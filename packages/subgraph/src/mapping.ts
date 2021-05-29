import {
	BigInt, 
	Address,
} from "@graphprotocol/graph-ts"


import {
	Account,
  Contract,
	Transfer,
  Token,
  TokenRegistry
} from '../generated/schema'

import {
	// Approval       as ApprovalEvent,
	// ApprovalForAll as ApprovalForAllEvent,
	Transfer       as TransferEvent,
} from '../generated/AnonyFans/AnonyFans'

import {
  constants,
  events,
  transactions,
} from '@amxx/graphprotocol-utils'

import {
	IERC721Metadata,
} from '../generated/AnonyFans/IERC721Metadata'

import { supportsInterface } from './amxx-erc165';

export function handleTransfer(event: TransferEvent): void {
	let registry = fetchRegistry(event.address)
	if (registry != null)
	{
		let token = fetchToken(registry, event.params.tokenId)
		let from  = new Account(event.params.from.toHex())
		let to    = new Account(event.params.to.toHex())

		token.owner = to.id

		registry.save()
		token.save()
		from.save()
		to.save()

		let ev = new Transfer(events.id(event))
		ev.transaction = transactions.log(event).id
		ev.timestamp   = event.block.timestamp
		ev.token       = token.id
		ev.from        = from.id
		ev.to          = to.id
		ev.save()
	}
}


// AMXX
export function fetchRegistry(address: Address): TokenRegistry {
	let erc721   = IERC721Metadata.bind(address)
	let contract = Contract.load(address.toHex())

	if (contract == null) {
		contract = new Contract(address.toHex())
		let introspection_01ffc9a7 = supportsInterface(erc721, '01ffc9a7') // ERC165
		let introspection_80ac58cd = supportsInterface(erc721, '80ac58cd') // ERC721
		let introspection_00000000 = supportsInterface(erc721, '00000000', false)
		contract.isERC721          = introspection_01ffc9a7 && introspection_80ac58cd && introspection_00000000
		contract.save()
	}

	if (contract.isERC721) {
		let registry = TokenRegistry.load(contract.id)
		if (registry == null) {
			registry = new TokenRegistry(contract.id)
			let try_name = erc721.try_name()
			let try_symbol = erc721.try_symbol()
			registry.name = try_name.reverted   ? '' : try_name.value
			registry.symbol = try_symbol.reverted ? '' : try_symbol.value
			registry.supportsMetadata = supportsInterface(erc721, '5b5e139f') // ERC721Metadata
		}
		return registry as TokenRegistry
	}

	return null as TokenRegistry
}

export function fetchToken(registry: TokenRegistry, id: BigInt): Token {
	let tokenid = registry.id.concat('-').concat(id.toHex())
	let token = Token.load(tokenid)
	if (token == null) {
		token = new Token(tokenid)
		token.registry = registry.id
		token.identifier = id

		if (registry.supportsMetadata) {
			let erc721 = IERC721Metadata.bind(Address.fromString(registry.id))
			let try_tokenURI = erc721.try_tokenURI(id)
			token.uri = try_tokenURI.reverted ? '' : try_tokenURI.value
		}
	}
	return token as Token
}



// export function handleApproval(event: ApprovalEvent): void {
// 	let registry = fetchRegistry(event.address)
// 	if (registry != null)
// 	{
// 		let token    = fetchToken(registry, event.params.tokenId)
// 		let owner    = new Account(event.params.owner.toHex())
// 		let approved = new Account(event.params.approved.toHex())

// 		token.owner    = owner.id
// 		token.approval = approved.id

// 		token.save()
// 		owner.save()
// 		approved.save()

// 		let ev = new Approval(events.id(event))
// 		ev.transaction = transactions.log(event).id
// 		ev.timestamp   = event.block.timestamp
// 		ev.token       = token.id
// 		ev.owner       = owner.id
// 		ev.approved    = approved.id
// 		ev.save()
// 	}
// }

// export function handleApprovalForAll(event: ApprovalForAllEvent): void {
// 	let registry = fetchRegistry(event.address)
// 	if (registry != null)
// 	{
// 		let owner      = new Account(event.params.owner.toHex())
// 		let operator   = new Account(event.params.operator.toHex())
// 		let delegation = new OperatorDelegation(registry.id.concat('-').concat(owner.id).concat('-').concat(operator.id))

// 		delegation.registry = registry.id;
// 		delegation.owner    = owner.id;
// 		delegation.operator = operator.id;
// 		delegation.approved = event.params.approved;

// 		owner.save();
// 		operator.save();
// 		delegation.save();

// 		let ev = new ApprovalForAll(events.id(event));
// 		ev.transaction = transactions.log(event).id
// 		ev.timestamp   = event.block.timestamp;
// 		ev.delegation  = delegation.id;
// 		ev.owner       = owner.id;
// 		ev.operator    = operator.id;
// 		ev.approved    = event.params.approved;
// 		ev.save();
// 	}
// }
