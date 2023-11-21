import React from 'react';
import "./CardsStyle.css";

const Cards = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
            <img src={props.imgsrc} alt="" className='card-img' />
            <div className="card-info">
                <span className='card-category'>{props.title}</span>
                <h3 className='card-title'>{props.sname}</h3>
                <a href={props.link} target='-blank' ><button>For More</button></a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
