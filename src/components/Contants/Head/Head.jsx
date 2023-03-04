const Head = ()=>{
   return (
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
                  </form>
               </div>
            </div>
            <div className="filter district">
               <span>Район</span>
               <div className='sub_filter'>
                  <form className='filter_form'>
                     <label>
                        <input type="checkbox" name="district" />
                        Новокодацький
                     </label>
                     <label>
                        <input type="checkbox" name="district" />
                        АНД
                     </label>
                     <label>
                        <input type="checkbox" name="district" />
                        Індустріальний
                     </label>
                     <label>
                        <input type="checkbox" name="district" />
                        Центральний
                     </label>
                  </form>
               </div>
            </div>
            <div className="filter category">
               <span>Категорія</span>
               <div className='sub_filter'>
                  <form className='filter_form'>
                     <label>
                        <input type="checkbox" name="category" />
                        Продаж
                     </label>
                     <label>
                        <input type="checkbox" name="category" />
                        Оренда
                     </label>
                  </form>
               </div>
            </div>
            <div className="filter sub_category">
               <span>Підкатегорія</span>
               <div className='sub_filter'>
                  <form className='filter_form'>
                     <label>
                        <input type="checkbox" name="sub_category" />
                        Квартира
                     </label>
                     <label>
                        <input type="checkbox" name="sub_category" />
                        Будинок
                     </label>
                     <label>
                        <input type="checkbox" name="sub_category" />
                        Дільниця
                     </label>
                     <label>
                        <input type="checkbox" name="sub_category" />
                        Комерційна нерухомість
                     </label>
                  </form>
               </div>
            </div>
            <div className="filter rooms">
               <span>Кімнат</span>
               <div className='sub_filter'>
                  <form className='filter_form'>
                     <label>
                        <input type="checkbox" name="rooms" />
                        1
                     </label>
                     <label>
                        <input type="checkbox" name="rooms" />
                        2
                     </label>
                     <label>
                        <input type="checkbox" name="rooms" />
                        3
                     </label>
                     <label>
                        <input type="checkbox" name="rooms" />
                        4
                     </label>
                  </form>
               </div>
            </div>
            <div className="filter m2">
               <span>Площа</span>
               <div className='sub_filter'>
                  <form className='filter_form'>
                     <p>Від</p><input type="text" />
                     <p>До</p><input type="text" />
                  </form>
               </div>
            </div>
            <div className="filter price">
               <span>Ціна</span>
               <div className='sub_filter'>
                  <form className='filter_form'>
                     <p>Від</p><input type="text" />
                     <p>До</p><input type="text" />
                  </form>
               </div>
            </div>
          </div>
        </section>
   );
}
export default Head;