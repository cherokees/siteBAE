import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Presentation from '../components/presentation'
import CarouselAvis from '../components/avis'
import Devis from '../components/devis'
import Price from '../components/price'
import Elagage from '../components/elagage'
import Slider from '../components/slider'

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Redressed&display=swap" rel="stylesheet" />
        </Head>
        <Presentation />
        <CarouselAvis />
        <Devis />
        <Price />
        <Elagage />
        {/* <Slider items={[1, 2, 3]} displaySlides="2" /> */}
      </Layout>
    </>
  )
}
