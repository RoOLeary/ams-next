import Layout from './../components/Layout';
import Gallery from './../components/Gallery';
import PanelGrid from './../components/PanelGrid';
import Featured from '../components/Featured';
import Signup from '../components/Signup';
import TextVisual from '../components/TextVisual';

export default function Home() {
  return (
    <Layout>
     <div className="container px-5 py-24 mx-auto">
          <h1 className="generalPageTitle text-center">Algarve Music Series</h1>
          <h2 className="text-center text-2xl">7th Edition | October 2022 | Algarve, Portugal</h2>
      </div>
      <Gallery />
      <PanelGrid />
      <Signup />
      <Featured />
      <div className="w-full h-auto border-black bg-white flex justify-end">
          <img src="https://algarvemusicseries.com/wp-content/uploads/2019/11/music.jpeg" className="relative block w-full h-full object-cover -mt-12" />     
      </div>
      <TextVisual />
      <br />
    </Layout>
  )
}