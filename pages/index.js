import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Presentation from '../components/presentation';
import CarouselAvis from '../components/avis';
import Devis from '../components/devis';
import Price from '../components/price';
import Price2 from '../components/price2';
import Elagage from '../components/elagage';
import Slider from '../components/slider';
import Banniere1 from '../components/banniere1';
import Banniere2 from '../components/banniere2';
import Abattage from '../components/abattage';
import TailleDeHaie from '../components/tailleDeHaie';
import Diaporama from '../components/carousel';


export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Aurélien Bernard Elagage</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Redressed&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet" />
        </Head>
        <Presentation />
        <CarouselAvis />
        <Banniere2 />
        <Devis />
        <Price />
        <Price2 />
        <Banniere1 />
        <Elagage />
        <Diaporama />
        <Abattage />
        <TailleDeHaie />
        {/* <Slider items={[
          <img src='/photo/abattage.jpeg' />,
          <img src='/photo/démontage2.jpeg' />,
          <img src='/photo/démontage3.jpg' />
        ]} displaySlides="2" /> */}
      </Layout>
    </>
  )
}
