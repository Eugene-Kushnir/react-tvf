const Obj = ()=>{
   return (
      <section className='obj' style={{display:"none"}}>
      <div className='overlay'>
         <div className="singleObj">
            <img className='closeObj' src="/img/close.png" alt="close" />
            <h2>Продам дачу в СТ Сосновий бір</h2>
            <div className="slider">
               <img src="/img/0.jpg" alt="obg" />
            </div>
            <div className="objInfo">
               <div className='date_publ'>Опубліковано 18 лютого 2023 р.</div>
               <div className="objInfo_properties">
                  <span className='objInfo_category objInfo_propertie'>Продаж</span>
                  <span className='objInfo_sub_category objInfo_propertie'>Дача</span>
                  <span className='objInfo_price objInfo_propertie'>Вартість - <b>39900</b> $</span>
                  <span className='objInfo_rooms objInfo_propertie'>Кімнат - <b>3</b></span>
                  <span className='objInfo_m2 objInfo_propertie' objInfo_propertie>Площа будинку: 113кв.м.</span>
                  <span className='objInfo_m2Plat objInfo_propertie'>Площа ділянки: 5 соток</span>
               </div>
               <div className='obj_text'>Продам дом/дачу в садовом товариществе Сосновый бор, Песчанка (4,5 км. от Новомосковска).
               Дом кирпичный, 3 этажа, перекрытия ж/б.
               На первом этаже распологается гараж, котельная, сауна, с/у и душевая, на втором - кухня, просторный зал с камином и терасса, на третьем этаже - 2 спальни и балкон. Крыша в отличном состоянии. В доме есть батареи отопления, скважина, кондиционер зима-лето.
               К дому прилогается 5 соток земли, есть кадастровый + огражденный участок до реки (соток 4-5). В конце участка выход к реке, пирс и пляж в 5 метрах.
               Отличный воздух, много зелени и р. Самара. Территория закрытая, охрана.
               Стоимость 39900$, торг уместен! Документы готовы к продаже!</div>
               <div className='ownerCard'>
                  <div className='ownerCard_column'>
                     <div className="owner_name">
                        <img src="/img/profile.png" alt="profile" />
                        <span>Евгений</span>
                     </div>
                     <div className="owner_tel">
                        <img src="/img/telephone.png" alt="tel" />
                        <a href="tel:0996237525">0996237525</a>
                     </div>
                     <div className="owner_mail">
                        <img src="/img/email.png" alt="mail" />
                        <a href = "mailto: kushnir.fort@gmail.com">kushnir.fort@gmail.com</a>
                     </div>
                  </div>
                  <img className='owner_photo' src="/img/eugene.jpg" alt="owner" />
               </div>
            </div>
         </div>
      </div>
     </section>
   );
};

export default Obj;