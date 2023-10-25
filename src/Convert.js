import React, { useState } from 'react';
import { createWorker } from 'tesseract.js';
import { storage } from './components/page/FirebaseConfig';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import './Convert.css'

function Convert() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [stringValue, setStringValue] = useState(' ');

  var imageRef="";

  function ImgPrev() {
    if (selectedFile) {
      //setImageUrl(URL.createObjectURL(selectedFile));
      imageRef = ref(storage, `images/${selectedFile.name}`);
      uploadBytes(imageRef, selectedFile)
      .then((snapshot) => {
        alert("Image uploaded Successfully");
        getDownloadURL(snapshot.ref).then(() => {
          setImageUrl(URL.createObjectURL(selectedFile));
        })
      })
    }
  }

  /*const uploadImage = () => {
    if (imageUpload == null)
      return;
    imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      alert("Image uploaded Successfully");
      getDownloadURL(snapshot.ref).then((url) => {
        //setImageUrl(url);


      });
    });
  };*/

  const GetText = async () => {
    setStringValue('');
    const worker = await createWorker({
      logger: m => console.log(m),
    });
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(imageUrl);
    setStringValue(text);
  }

  return (
    <div>
      <div className="split left">
        <div className="centered">
          {imageUrl ? ("") : (<input type="file" onChange={e => setSelectedFile(e.target.files[0])} />)}
          {imageUrl ? (<img src={imageUrl} alt="Image Preview" height="90%" width="100%"></img>) : ("")}
          <button className="button-64" onClick={ImgPrev}>preview</button>
          {/*imageUrl?(<img src={imageUrl} alt="Image Preview" height="90%" width="100%"></img>):("")*/}
          {/*<button className="button-63" onClick={onFileUpload}>Upload</button>*/}
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          {
            stringValue === "" ?
              <div className="loader align-self-center" ></div>
              :
              <div className='textbox'>{stringValue}</div>
          }
          <button className="button-64" onClick={GetText}>text</button>
        </div>
        {/*<img src={imageUrl} alt="Uploaded image" height='60%' width='30%' />*/}

      </div>
    </div>
  );
}

export default Convert;
