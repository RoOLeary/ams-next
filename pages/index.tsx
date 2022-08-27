import Image from 'next/image'; 
import { useRouter } from 'next/router';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import PanelGrid from '../components/PanelGrid';
import Featured from '../components/Featured';
import Signup from '../components/Signup';
import TextVisual from '../components/TextVisual';
import imageLoader from '../imageLoader';

export default function Home() {
  const { locale } = useRouter();
  return (
    <Layout>
      <div className="container px-5 py-24 mx-auto">
        <h1 className="generalPageTitle text-center">{locale === 'en' ? 'Algarve Music Series' : 'Série de Música do Algarve'}</h1>
        <h2 className="text-center text-2xl">{locale === 'en' ? '7th Edition | October 2022 | Algarve, Portugal' : '7ª Edição | Outubro 2022 | Algarve, Portugal'}</h2>
      </div>
      <Gallery />
      <PanelGrid />
      <Signup />
      <Featured />
      <Banner title={'Home Banner'} />
      <TextVisual />
      <br />
    </Layout>
  )
}