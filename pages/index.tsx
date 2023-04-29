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
import Schedule from '../components/Schedule';
import scheduleContent from '../lib/data/scheduleContent';

export default function Home() {
  const { locale } = useRouter();
  const home = homeContent && homeContent.filter((h) => h.locale === locale); 

  console.log(home[0].comingSoon);
  
  return (
    <Layout>
      <HomeHeader title={home[0].title} editionDetails={home[0].editionDetails} comingSoon={home[0].comingSoon}/>
      <HeroGrid />
      {/* <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Welcome to the Algarve Music Series</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-400 text-base"></p>
      </div> */}
      
      <div className="container px-5 pt-24 mx-auto">
          <h1 className="generalPageTitle">Events in 2023</h1>
          <div className="h-1 overflow-hidden pb-8">
              <div className="h-1 w-20 bg-goldenrod"></div>
          </div>
      </div>
      <Featured />
      <PanelGrid />
      <Banner title={'Home Banner'} />
      
    </Layout>
  )
}

