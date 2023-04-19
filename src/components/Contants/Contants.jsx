import Card from './Card/Card';
import Head from './Head/Head';
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
   return (
      <main className="content">
        <Head/>
        <section className="cards">
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
