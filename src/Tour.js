import React, { useState,useContext } from "react";
import {toursContext} from "./App"
function Tour({ id, name, image, info, price }) {
    const {removeTour}=useContext(toursContext)
    const [showMore,setShowMore]=useState(false)
    const showHide=()=>{
        setShowMore((show)=>!show)
    }
  return (
    <article className="single-tour">
      <div>
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">{price}</h4>
          </div>
          <p>({showMore? info:`${info.substring(0,200)}...`} 
            <button onClick={showHide}>{showMore ?'show less':'read more'}</button>
           </p>

          <button className="delete-btn" onClick={()=>removeTour(id)}>Not Interested</button>
        </footer>
      </div>
    </article>
  );
}

export default Tour;
