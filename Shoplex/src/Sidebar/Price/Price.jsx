import React from 'react'
import "./Price.css"
import Input from '../../components/Input'

const Price = ({handleChange}) => {
  return (
    <div className='ml'>
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" name='testPrice' />
          <span className="checkmark"></span>All
        </label>

        <Input handleChange={handleChange}
        name='testPrice'
        title="$0 - $50"
        value={50}
        />


        <Input handleChange={handleChange}
        name='testPrice'
        title="$100 - $150"
        value={100}
        />


        <Input handleChange={handleChange}
        name='testPrice'
        title="$150 - $200"
        value={150}
        />
        <Input handleChange={handleChange}
        name='testPrice'
        title="$150 - $200"
        value={200}
        />
    </div>
  )
}

export default Price
