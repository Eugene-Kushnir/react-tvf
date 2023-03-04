const Card = ()=> {
   return (
      <div className="card">
         <img src="/img/0.jpg" alt="pfoto" />
         <img  className = "card_like" src="/img/like.png" alt="like" />
         <div className="card_categories">
            <span className="card_category">Продаж</span>
            <span className="card_sub_category">Будинок</span>
         </div>
         <h2>Продам дачу в СТ Сосновий бір</h2>
         <span className="card_price"><b>39900$</b></span>
         <div className="card_footer">
            <span className="card_rooms">3 кімнати</span>
            <span className="card_m2">113 <img src="./img/measurement.png" alt="m2" /></span>
         </div>
      </div>
   )
}

export default Card;