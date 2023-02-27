import React from 'react'

const Header = () => {
  return (
   <header>
      <div className="header_logo">
      <img src="/img/logo.jpg" alt="logo"/>
      <span>Агенція нерухомості "ТВОЯ ФОРТЕЦЯ"</span>
      <div className="header-btn">
         <div className="header-btn_burger"/>
      </div>
      <div className="header-icons">
         <img src="./img/fb.png" alt="Facebook" />
         <img src="./img/telegram.png" alt="Telegram" />
      </div>
      </div>
      <nav className="header_menu">       
         <div className="menu_objects">Всі об'єкти</div>
         <div className="menu_sell">Продаж</div>
         <div className="menu_buy">Покупка</div>
         <div className="menu_buy">Оренда</div>
      </nav>
   </header>
  )
}

export default Header