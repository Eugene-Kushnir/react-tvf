import React from 'react';

const Card = (props)=> {
const [isLiked, setLiked] = React.useState(false);
const onClickLike = () => {
   setLiked(!isLiked);
}
   return (
         <div className="card">
         <img src={props.photo} alt="pfoto" />
         <img  className = "card_like" src={isLiked ? '/img/liked.png' : '/img/like.png'} alt="like" onClick={onClickLike} />
         <img  className = "card_more" src="/img/search.png" alt="search" onClick={props.onClickSearch} />
         <div className="card_categories">
            <span className="card_category">{props.card_category}</span>
            <span className="card_sub_category">{props.card_sub_category}</span>
         </div>
         <h2>{props.titl}</h2>
         <span className="card_price"><b>{props.price}$</b></span>
         <div className="card_footer">
            <span className="card_rooms">{props.rooms} кімнати</span>
            <span className="card_m2">{props.m2} <img src="./img/measurement.png" alt="m2" /></span>
         </div>
      </div>
   )
}

export default Card;