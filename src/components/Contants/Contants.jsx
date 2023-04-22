import React from 'react';
import Card from './Card/Card';
import Head from './Head/Head';
import Favorites from './FavoritesObj';
import Obj from './Obj/Obj';

const cards = [
   {
      photo: "/img/0.jpg",
      card_category: 'Продаж',
      card_sub_category: 'Будинок',
      title: 'Продам дачу в СТ Сосновий бір',
      price: '39900',
      rooms: '3',
      m2: '113'
   },
   {
      photo: "/img/1.jpg",
      card_category: 'Продаж',
      card_sub_category: 'Дача',
      title: 'Продам дом в Новомосковске',
      price: '125000',
      rooms: '6',
      m2: '210'
   },
   {
      photo: "/img/1.jpg",
      card_category: 'Продаж',
      card_sub_category: 'Дача',
      title: 'Продам дом в Новомосковске',
      price: '125000',
      rooms: '6',
      m2: '210'
   },
   {
      photo: "/img/1.jpg",
      card_category: 'Продаж',
      card_sub_category: 'Дача',
      title: 'Продам дом в Новомосковске',
      price: '125000',
      rooms: '6',
      m2: '210'
   },

];

const Contants = () => {
   const [favorites, setFavorites] = React.useState(true);
   const [favoritesOpened, setFavoritesOpened] = React.useState(true);
   // isLiked ? setFavoritesOpened = true : false;

   return (
      <main className="content">
        <Head/>
        {favorites ? <button className='favorites' onClick={favoritesOpened}><img src='img/boxHearts.png' alt='boxWithHearts'></img>Обране</button> : null}
        <section className="cards">
        {favoritesOpened ? <Favorites/> : null}
        {cards.map((e) => (
         <Card
          photo = {e.photo}
          card_category = {e.card_category}
          card_sub_category = {e.card_sub_category}
          title = {e.title}
          price = {e.price}
          rooms = {e.rooms}
          m2 = {e.m2}
          />
        ))}
        )
        </section>
         <Obj/>
      </main>
   );
}

export default Contants;
