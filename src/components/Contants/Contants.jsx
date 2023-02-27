import React from 'react';

const Contants = () => {
   return (
      <main className="content">
        <section className="head">
          <span>Фільтри: </span>
            <div className="filters">
            <div className="filter city">
         <span>Місто</span>
         <div className='sub_filter'>
            <form className='filter_form'>
               <label>
                  <input type="checkbox" name="city" />
                  Дніпро
               </label>
               <label>
                  <input type="checkbox" name="city" />
                  Новомосковськ
               </label>
               <label>
                  <input type="checkbox" name="city" />
                  Павлоград
               </label>
               <input type="submit" value="Submit" />
            </form>
         </div>
           
            </div>
            <div className="filter district">Район</div>
            <div className="filter category">Категорія</div>
            <div className="filter sub_category">Підкатегорія</div>
            <div className="filter rooms">Кімнат</div>
            <div className="filter m2">Площа</div>
            <div className="filter price">Ціна</div>
          </div>
        </section>
        <section className="cards">
          <div className="card">
            <img src="/img/0.jpg" alt="pfoto" />
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
          <div className="card">
            <img src="/img/1.jpg" alt="pfoto" />
            <div className="card_categories">
              <span className="card_category">Продаж</span>
              <span className="card_sub_category">Квартира</span>
            </div>
            <h2>Продам 3к квартиру в ЖК Грані</h2>
            <span className="card_price"><b>77350$</b></span>
            <div className="card_footer">
              <span className="card_rooms">3 кімнати</span>
              <span className="card_m2">91<img src="./img/measurement.png" alt="m2" /></span>
            </div>
          </div>
          <div className="card">
            <img src="/img/0.jpg" alt="pfoto" />
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
          <div className="card">
            <img src="/img/0.jpg" alt="pfoto" />
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
        </section>
      </main>
   );
}

export default Contants;
