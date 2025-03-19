import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";

const Card = ({img, title, prevPrice, newPrice}) => {
  return <section className='card'>
        <img className='card-image' src={img} />

        <div className="card-details">
          <h3 className='card-title'>{title}</h3>
          <section className='card-reviews'>
          <MdOutlineStar className='rating-star' /><MdOutlineStar className='rating-star' /><MdOutlineStar className='rating-star'  /><MdOutlineStar className='rating-star' />
          <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del>{newPrice}
            </div>
            <div className="bag">
            <BsBagCheckFill />
            </div>
          </section>
        </div>
      </section>

}

export default Card
