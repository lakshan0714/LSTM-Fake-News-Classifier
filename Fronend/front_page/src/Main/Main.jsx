import React from 'react'
import DragDrop from '../DragDrop/DragDrop'
import './Main.css'

const Main = () => {
  return (
    <div>
      <h1 className='heading'>Upload Your Image Here</h1>
      <p className='size'>Max 10MB</p>
      <DragDrop/>
      <button className="predictBtn">Predict</button>
      <div className="input-box"> 
      <div className='extract-box'>
      <label htmlFor="extract" className='label'>Extracted Text</label>
      <textarea rows={10} name="prediction" id="prediction" className="extract"></textarea>
      </div>
      <div className='prediction-box'>
      <label htmlFor="prediction" className='label'>Predicted Class </label>
      <textarea rows={10} name="prediction" id="prediction" className="prediction"></textarea>

      </div>
      </div>



    </div>
  )
}

export default Main
