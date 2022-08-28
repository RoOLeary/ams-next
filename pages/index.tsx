import Image from 'next/image'; 
import { useRouter } from 'next/router';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import HeroGrid from '../components/HeroGrid';
import PanelGrid from '../components/PanelGrid';
import Featured from '../components/Featured';
import Signup from '../components/Signup';
import TextVisual from '../components/TextVisual';
import imageLoader from '../imageLoader';
import homeContent from '../lib/data/homeContent';


export default function Home() {
  const { locale } = useRouter();
  const home = homeContent && homeContent.filter((h) => h.locale === locale); 

  return (
    <Layout>
      <div className="container px-5 py-24 mx-auto">
        <h1 className="generalPageTitle text-center">{home[0].title}</h1>
        <h2 className="text-center text-2xl">{home[0].editionDetails}</h2>
      </div>
      <HeroGrid />
      <PanelGrid />
      <Signup />
      <Featured />
      <Banner title={'Home Banner'} />
      <TextVisual />
      <br />
    </Layout>
  )
}

