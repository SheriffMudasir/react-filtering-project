import React from 'react'
import "./Reccommendation.css"

const Reccommendation = () => {
  return (
    <div className='reccommended-flex'>
      <h2 className='reccommended-title'>Reccommended</h2>
        <div className="reccommended-btns">
          <button className='btns'>All Products</button>
          <button className='btns'>Nike</button>
          <button className='btns'>Adidas</button>
          <button className='btns'>Puma</button>
          <button className='btns'>Vans</button>

        </div>
      
    </div>
  )
}

export default Reccommendation
