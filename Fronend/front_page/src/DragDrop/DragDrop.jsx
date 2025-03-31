import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import './DragDrop.css'
import { asset } from '../Assets/asset'


const DragDrop = () => {
   const[files,setFiles] = useState(null)
   const[preview,setPreview] = useState()
   const inputRef = useRef();

   const hadleFileChange=(event) =>{
    const file = event.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      alert("File size exceeds limit (Max 10MB)");
      event.target.value = null; 
      return;
    }
    setFiles(event.target.files);
    setPreview(URL.createObjectURL(file));

   }

   const handleDragOver =(event)=>{
    event.preventDefault();
   }

   const handleDrop =(event)=>{
    event.preventDefault();
    const files = event.dataTransfer?.files
  const file = files?.[0]
  if (file && file.type.startsWith("image/")) {
    setFiles(files)
    setPreview(URL.createObjectURL(file))
  }
  else {
    alert("Only image files are allowed");
  }

   }
   useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);


  return (
    <div className='container'>
      {!files && (
        <div className='dropzone' onDragOver={handleDragOver} onDrop={handleDrop}>
           <img src={asset.upload} alt="" className="cloud-upload" />
            <p className='Drag-title'>Drag & drop your files here </p>
            <p className='OR-drag'>OR</p>
            <input type="file" onChange={ hadleFileChange } hidden  ref={inputRef} accept="image/*"/>
            <button className='button-input' onClick={()=> inputRef.current.click()}>Browse files </button>

        </div>
      ) 
      }
      {files && <div className="after-uploads">
        {preview && <img src={preview} alt="preview" className="uploadPic" />}
        <p className='filename'>File name : {files[0]?.name}</p>
        <button className='cancel-btn' onClick={()=>{setFiles(null) ;setPreview(null);}}> Cancel </button>

    </div>

      }
    </div>
  )
}

export default DragDrop
