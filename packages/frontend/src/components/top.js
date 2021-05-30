import React, { useState, useEffect } from 'react'
import { Popover } from '@headlessui/react'
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
import * as Assets from '../assets/index'

const navigation = [
  { name: 'Explore', href: '#' },
  { name: 'How It Works', href: '#' }
]

const Top = () => {

  let [isMetamastInstalled, setIsMetamaskInstalled] = useState();
  let [isConnecting, setIsConnecting] = useState();
  let [isConnected, setIsConnected] = useState();
  let [currentMetaMaskAccount, setCurrentMetaMaskAccount] = useState(null);
  let [ethersProvider, setEthersProvider] = useState();
  let [provider, setProvider] = useState();

  useEffect(() => {
    const init = async () => {
      setIsMetamaskInstalled(true);
      setIsConnected(false);

      try {
        //detect whether the browser is connected to a provider
        let ethereumProvider = await detectEthereumProvider();
        if (ethereumProvider) {
          console.log("Got eth provider")
          setProvider(ethereumProvider);
          startApp(ethereumProvider);
        } else {
          setIsMetamaskInstalled(false);
          return;
        };
      } catch (error) {
        console.error(error);
      };

      async function startApp(_ethereumProvider) {
        try {
          //The provider detected by detectEthereumProvider() must be the same as window.ethereum
          if (_ethereumProvider !== window.ethereum) {
            setIsMetamaskInstalled(false);
            return;
          };

          const handleChainChanged = _chainId => {
            window.location.reload();
          };

          //Force the browser to refresh whenever the network chain is changed
          let chainId = await _ethereumProvider.request({ method: 'eth_chainId' });
          _ethereumProvider.on('chainChanged', handleChainChanged);
          console.log('chainId: ', chainId);

          //Check if a MetaMask account has permission to connect to app
          let metamaskAccount;
          let accounts = await _ethereumProvider.request({ method: 'eth_accounts' });

          if (accounts.length > 0) {
            metamaskAccount = accounts[0];
            setCurrentMetaMaskAccount(accounts[0]);
            setIsMetamaskInstalled(true);
            setIsConnected(true);
          };
          console.log(`metamaskAccount ${metamaskAccount}`);

          //Create the Ethers.js provider and set it in state
          let _ethersProvider = await new ethers.providers.Web3Provider(_ethereumProvider);
          setEthersProvider(_ethersProvider);
          console.log('_ethersProvider: ', _ethersProvider)

          if(accounts.length !== 0) {
            let signer = await _ethersProvider.getSigner();

            const networks = {
              4: {
                provider:
                  _ethersProvider,
                unlockAddress: '0xd8c88be5e8eb88e38e6ff5ce186d764676012b0b',
              },
            };
          };
        } catch (error) {
          console.error(error);
        };
      };
    };
    init();
  }, []);

  const getAccounts = async () => {
    try {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      await handleAccountsChanged(accounts);
    } catch (error) {
      console.error(error);
    };
  };

   //Give a MetaMask account permission to interact with the app
   const handleOnConnect = async () => {
    setIsConnecting(true);
    try {
      await getAccounts();

      provider.on('accountsChanged', handleAccountsChanged);

      let signer = await ethersProvider.getSigner();

      // const networks = {
      //   4: {
      //     provider:
      //       ethersProvider,
      //     unlockAddress: '0xd8c88be5e8eb88e38e6ff5ce186d764676012b0b', // Rinkeby proxy UNLOCK.SOL 
      //   },
      // };
    } catch (error) {
      console.error(error);
    };
  };

  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      console.log('Please connect to MetaMask.');
    } else if (accounts[0] !== currentMetaMaskAccount) {
      console.log('account[0]: ', accounts[0]);
      setCurrentMetaMaskAccount(accounts[0]);
      setIsConnected(true);
      setIsConnecting(false);
      setIsMetamaskInstalled(true);
    }
  };


  return (
    <div className="relative h-full">
      <Popover as="header" className="relative">
        {_ => (
          <>
            <div className="bg-white pt-6">
              <nav
                className="relative max-w-8xl mx-20 flex items-center justify-between px-4 sm:px-6"
                aria-label="Global"
              >
                <div className="flex flex-row items-center w-full">
                  <div className="flex items-center justify-between w-full md:w-4/5">
                    <a href="#">
                      <Assets.Logo />
                    </a>
                  </div>
                  <div className="hidden space-x-8 md:flex md:flex-row md:items-center md:w-1/4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-semibold text-gray-400"
                      >
                        {item.name}
                      </a>
                    ))}
                    {isConnected ? 
                      <a 
                      href='connect'
                      className='text-base font-semibold text-indigo-600'
                    >
                      Connected!
                    </a> :
                    <button disabled={isConnecting} onClick={handleOnConnect}>
                      {isConnecting ? 'Connecting Wallet' : 'Connect Wallet'}
                    </button>
                    }
                    
                    {/* <a 
                      href='connect'
                      className='text-base font-semibold text-indigo-600'
                    >
                      Connect Wallet
                    </a> */}
                  </div>
                </div>
              </nav>
            </div>
          </>
        )}
      </Popover>
      <div className='mx-20 px-4 sm:px-6 mt-8 mb-6'>
        <Assets.Description />
      </div>
      <div className='relative -top-2 mx-20 px-4 sm:px-6'>
        <Assets.Camera className='relative -bottom-44 left-1' />
        <Assets.Crypto className='relative -bottom-68 left-2' />
        <Assets.Features />
      </div>
      <div className='absolute top-16 -bottom-16 right-0'>
        <Assets.Device className='absolute right-48 bottom-36' />
        <Assets.Vneck className='absolute right-24 bottom-20' />
        <Assets.Tie className='absolute right-12 bottom-72' />
        <Assets.Ponytail className='absolute right-12 top-68' />
        <Assets.Polo className='absolute right-44 top-28' />
        <Assets.Vneck className='absolute right-116 top-24' />
        <Assets.Tie className='absolute right-176 top-36' />
        <Assets.Polo className='absolute right-184 top-80' />
        <Assets.Vneck className='absolute right-188 bottom-72' />
        <Assets.Tie className='absolute right-240 bottom-80' />
        <Assets.Ponytail className='absolute right-224 bottom-32' />
        <Assets.Polo className='absolute right-172 bottom-20' />
      </div>
      <div className='absolute right-48 flex flex-col items-center justify-center'>
        <Assets.Explore className='mb-4' />
        <Assets.Downarrow className='cursor-pointer' />
      </div>
    </div>
  )
}

export default Top
