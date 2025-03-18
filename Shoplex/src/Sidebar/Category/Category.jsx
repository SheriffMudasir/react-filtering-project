import React from 'react'
import "./Category.css"

const Category = () => {
  return (
    <div className='sidebar-div'>
      <h2 className='sidebar-title'>Category</h2>
      <div className='sidebar-div2'>
      <label className='sidebar-label-container'>
        <input type="radio" name='test' />
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name='test' />
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name='test' />
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name='test' />
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name='test' />
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name='test' />
        <span className='checkmark'></span>All
      </label>
      </div>
      
    </div>
  )
}

export default Category
