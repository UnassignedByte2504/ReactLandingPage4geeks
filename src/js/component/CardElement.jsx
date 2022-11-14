import React from 'react'

function CardElement() {
  return (
    <div className="CardElement">
    <div className="cardImgcontainer">
        <img className="cardImg" src="https://picsum.photos/150/150" />
    </div>
    <hr />
    <div><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sequi vitae facere fugit...</span></div>
    <hr />
    <button className="theonlybutton">Learn more</button>
    </div>
  )
}

export default CardElement