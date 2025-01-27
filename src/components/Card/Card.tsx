import React from "react";
import "./Card.css"

interface Props {
    body : string|React.ReactNode
    img : string
    title : string
}

const Card : React.FC<Props> = ({ body, img, title }) => {
    return <div className="card bg-white shadow-md p-4">
    <div className="card__image-outer">
      <img src={img} alt="test" className="card__image"/>
    </div>

    <div className="card__title font-bold mt-2 text-xl">
        { title }
    </div>
    <div className="card__text mt-2 text-start">
        { body }
    </div>
  </div>
}

export default Card