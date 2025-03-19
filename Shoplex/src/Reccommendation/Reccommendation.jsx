import React from 'react'
import "./Reccommendation.css"
import Button from '../components/Button'
import "../index.css"

const Reccommendation = ({handleClick}) => {
  return (
    <div className='reccommended-flex'>
      <h2 className='reccommended-title'>Reccommended</h2>
        <div className="reccommended-btns">
          <Button handleClick={handleClick} value="" title="All Products" />
          <Button handleClick={handleClick} value="Nike" title="Nike" />
          <Button handleClick={handleClick} value="Adidas" title="Adidas" />
          <Button handleClick={handleClick} value="Puma" title="Puma" />
          <Button handleClick={handleClick} value="Vans" title="Vans" />

        </div>
      
    </div>
  )
}

export default Reccommendation
