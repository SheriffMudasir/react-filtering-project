import React from 'react'

const Input = ({ handleChange, value, title, name, color, border }) => {
  return (
    <div>
        <label className='sidebar-label-container'>
        <input onChange={handleChange} value={value} name={name}  type="radio" />
        <span style={{backgroundColor:color, border: `1px solid ${border}`}} className='checkmark' ></span>{title}
      </label>
      
    </div>
  )
}

export default Input
