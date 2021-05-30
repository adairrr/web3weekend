import React, { useState } from 'react';
import { create, globSource } from 'ipfs-http-client';

const ipfs = create({
  host: 'ipfs.infura.io', 
  port: 5001, 
  protocol: 'https'
});

const Upload = () => {

  let [hashOfPurchasedKey, setHashOfPurchasedKey] = useState();
  let [buffer, setBuffer] = useState(null);
  let [imageHash, setImageHash] = useState("");

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

  return (
    <div>
      <form onSubmit={onSubmitUploadFile}>
        <input type='file' onChange={captureFile}/>  <input type="submit" />
      </form>
      
      <form onSubmit={onSubmitGetFile}>
        <input onChange={getFile}/>  <input type="submit" />
      </form>
      <img src={`http://ipfs.infura.io/ipfs/${imageHash}`}></img>
    </div>
  );  
}

export default Upload;
