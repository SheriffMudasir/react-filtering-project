import React from 'react'
import "./Colors.css"
import Input from '../../components/Input'

const Colors = ({handleChange}) => {
  return (
    <div className='ml'>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" name='testCols' />
          <span className="checkmark all"></span>All
        </label>

        <Input handleChange={handleChange}
        name='testCols'
        title="White"
        value="white"
        color="white"
        border="black"
        />



        <Input handleChange={handleChange}
        name='testCols'
        title="Black"
        value="black"
        color="black"
        />


        <Input handleChange={handleChange}
        name='testCols'
        title="Blue"
        value="blue"
        color="blue"
        />
        <Input handleChange={handleChange}
        name='testCols'
        title="Red"
        value="red"
        color="red"
        />


        <Input handleChange={handleChange}
        name='testCols'
        title="Green"
        value="green"
        color="green"
        />
        
    </div>
  )
}

export default Colors
