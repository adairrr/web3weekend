import {useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
//import { WalletService } from '@unlock-protocol/unlock-js';
import { create, globSource } from 'ipfs-http-client';


import './App.css';

function App() {
    const some = this;
  
    let [isMetamastInstalled, setIsMetamaskInstalled] = useState();
    let [isConnecting, setIsConnecting] = useState();
    let [isConnected, setIsConnected] = useState();
    let [currentMetaMaskAccount, setCurrentMetaMaskAccount] = useState(null);
    let [ethersProvider, setEthersProvider] = useState();
    let [provider, setProvider] = useState();
    let [walletService, setWalletService] = useState();
    let [keyToPurchase, setKeyToPurchase] = useState();
    //let [fileToUpload, setFileToUpload] = useState();
    let [hashOfPurchasedKey, setHashOfPurchasedKey] = useState();
    let [buffer, setBuffer] = useState(null);
    let [imageHash, setImageHash] = useState("");

    // connect to the default API address http://localhost:5001
    //const ipfs = create({host: 'localhost', port: 5001, protocol: 'http'});
    const ipfs = create({
                    host: 'ipfs.infura.io', 
                    port: 5001, 
                    protocol: 'https'
                  });

  
 
  useEffect(() => {
    const init = async () => {
      setIsMetamaskInstalled(true);
      setIsConnected(false);

      try {
        //detect whether the browser is connected to a provider
        let ethereumProvider = await detectEthereumProvider();
        if (ethereumProvider) {
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

            /*const _walletService = new WalletService(networks);
            await _walletService.connect(_ethersProvider, signer)
            setWalletService(_walletService);
*/
            // setEthersSigner(signer);
          //
          //   const _taro = new ethers.Contract(
          //     taroAddress.Taro,
          //     Taro.abi,
          //     signer
          //   );
          //   setTaro(_taro);
          //
          //   const _governorAlpha = new ethers.Contract(
          //     governorAlphaAddress.GovernorAlpha,
          //     GovernorAlpha.abi,
          //     signer
          //   );
          //   setGovernorAlpha(_governorAlpha);
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

  const captureFile = async e => {
    e.preventDefault();
    const fileToUpload = e.target.files[0];
    console.log(fileToUpload);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(fileToUpload);
    reader.onloadend = () => {
      
      setBuffer(Buffer(reader.result));
      console.log('buffer', Buffer(reader.result));
    }
    
  };

  const onSubmitUploadFile = async e => {
    e.preventDefault();
    console.log(ipfs.getEndpointConfig());
    console.log(buffer);
    console.log('Submiting form...');

    /*ipfs.add(buffer, (error, result) => {
      console.log("IPFS result: ", result);
      if (error){
        console.error(error);
        return;
      }
    })*/
    const result = await ipfs.add(buffer);
    console.log("IPFS result: ", result);
    setImageHash(result.path);
  }

    // Sample hash: QmaBB6FviGLCbDQYs9bBuJh3GpBqRzg7V9XrDioV1kkhiH
    // Sample url: http://ipfs.infura.io/ipfs/QmaBB6FviGLCbDQYs9bBuJh3GpBqRzg7V9XrDioV1kkhiH
  const getFile = async e => {
    e.preventDefault();
  }

  const onSubmitGetFile = async e => {
    e.preventDefault();
    console.log(buffer);
    console.log('Getting file...');
    
    const result = await ipfs.add(buffer);
    console.log("IPFS result: ", result);
    
  }

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

  // function handleChainChanged(_chainId) {
  //   window.location.reload();
  // };

  //Give a MetaMask account permission to interact with the app
  const handleOnConnect = async () => {
    setIsConnecting(true);
    try {
      await getAccounts();

      provider.on('accountsChanged', handleAccountsChanged);

      let signer = await ethersProvider.getSigner();

      const networks = {
        4: {
          provider:
            ethersProvider,
          unlockAddress: '0xd8c88be5e8eb88e38e6ff5ce186d764676012b0b', // Rinkeby proxy UNLOCK.SOL 
        },
      };

      /*
      const _walletService = new WalletService(networks);
      await _walletService.connect(ethersProvider, signer)
      setWalletService(_walletService);
*/
      // setEthersSigner(signer);

      // const _taro = new ethers.Contract(
      //   taroAddress.Taro,
      //   Taro.abi,
      //   signer
      // );
      // setTaro(_taro);

      // const _governorAlpha = new ethers.Contract(
      //   governorAlphaAddress.GovernorAlpha,
      //   GovernorAlpha.abi,
      //   signer
      // );
      // setGovernorAlpha(_governorAlpha);
    } catch (error) {
      console.error(error);
    };
  };

  const _purchaseKey = async e => {
    // const lockAddress = '0xF735257c43dB1723AAE2A46d71E467b1b8a8422A';
    e.preventDefault();
    let lockAddress = keyToPurchase.toString();

    await walletService.purchaseKey(
      {lockAddress,},
      (error, hash) => {
        // This is the hash of the transaction!
        console.log('hash: ', hash);
        setHashOfPurchasedKey(hash);
      }
    );
  };

  const handleOnPurchaseKeyChange = e => {
    setKeyToPurchase(e.target.value);
  };


  return (
    <div className="App">
      <div>
        Is metamask installed? {isMetamastInstalled ? 'yes' : 'no'}
      </div>
      <br></br>
      <div>
        {isConnected
          ?
            'You are connected!'
          :
          <button disabled={isConnecting} onClick={handleOnConnect}>
            {isConnecting ? 'Connecting' : 'Connect'}
          </button>
        }
      </div>
      <br></br>
      <div>
        {/*  <p>You want the buy a key from the lock of this creator: 0xF735257c43dB1723AAE2A46d71E467b1b8a8422A</p>
        <form onSubmit={_purchaseKey}>
          <input placeholder="paste the lock # here" onChange={handleOnPurchaseKeyChange}></input>
          <button type="submit">Purchase a key</button>
          
        </form>
        <p>This is the transaction hash of the key you purchased: {hashOfPurchasedKey}</p>
        */}
        <br></br>
        <form onSubmit={onSubmitUploadFile}>
          <input type='file' onChange={captureFile}/>  <input type="submit" />
        </form>
        
        <form onSubmit={onSubmitGetFile}>
          <input onChange={getFile}/>  <input type="submit" />
        </form>
        <img src={`http://ipfs.infura.io/ipfs/${imageHash}`}></img>
      </div>
    </div>
  );
}

export default App;
