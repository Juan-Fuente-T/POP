import React, { useState } from 'react';
import Web3 from 'web3';

const WalletAddress = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const connectMetaMask = () => {
      if (window.ethereum) {
        /* eslint-disable no-unused-vars */
      const web3 = new Web3(window.ethereum);
       window.ethereum.enable()
        .then((accounts) => {
          const address = accounts[0];
          setWalletAddress(address);
          setButtonClicked(true);
        })
        .catch((error) => {
          console.error("Error al habilitar MetaMask:", error);
        });
    } else {
      console.error("MetaMask no está instalado.");
    }
  };

  return (
    <div>
      {walletAddress ? (
        <p>Wallet Address: {walletAddress}</p>
      ) : (
        <div>
          <p>Connect Your Wallet </p>
          <button onClick={connectMetaMask} style={{color:'white', width:130, padding:10, borderRadius: 10,backgroundColor: buttonClicked ? 'green' : 'blue'}}>
          {buttonClicked ? 'Connected' : 'Connect'}
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletAddress;
