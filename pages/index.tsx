import Image from 'next/image'; 
import { useRouter } from 'next/router';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import HeroGrid from '../components/HeroGrid';
import HomeHeader from '../components/HomeHeader';
import PanelGrid from '../components/PanelGrid';
import Featured from '../components/Featured';
import Signup from '../components/Signup';
import TextVisual from '../components/TextVisual';
import homeContent from '../lib/data/homeContent';


export default function Home() {
  const { locale } = useRouter();
  const home = homeContent && homeContent.filter((h) => h.locale === locale); 

  return (
    <Layout>
      <HomeHeader title={home[0].title} editionDetails={home[0].editionDetails} />
      <HeroGrid />
      <PanelGrid />
      <Signup content={'signup'}/>
      <Featured />
      <Banner title={'Home Banner'} />
      <TextVisual />
      <br />
    </Layout>
  )
}

