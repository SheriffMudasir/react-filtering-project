import React from 'react'
import "./Category.css"
import Input from '../../components/Input'

const Category = ({handleChange}) => {
  return (
    <div className='sidebar-div'>
      <h2 className='sidebar-title'>Category</h2>
      <div className='sidebar-div2'>
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" name='testCat' />
          <span className="checkmark"></span>All
        </label>

        <Input handleChange={handleChange}
        value="sneakers"
        title="Seakers"
        name="testCat"/>

        <Input handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="testCat"/>

        <Input handleChange={handleChange}
        value="flats"
        title="Flats"
        name="testCat"/>

        <Input handleChange={handleChange}
        value="heels"
        title="Heels"
        name="testCat"/>

      </div>
      
    </div>
  )
}

export default Category
