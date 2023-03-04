import Card from './Card/Card';
import Head from './Head/Head';
import Obj from './Obj/Obj';


const Contants = () => {
   return (
      <main className="content">
        <Head/>
        <section className="cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </section>
         <Obj/>
      </main>
   );
}

export default Contants;
