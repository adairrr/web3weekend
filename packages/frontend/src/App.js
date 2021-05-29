import { useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';


import './App.css';

function App() {
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
    </div>
  );
}

export default App;
