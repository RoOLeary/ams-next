import Layout from './../components/Layout';
import Gallery from './../components/Gallery';
import PanelGrid from './../components/PanelGrid';
import Featured from '../components/Featured';
import TextVisual from '../components/TextVisual';

export default function Home() {
  return (
    <Layout>
     
      <Gallery />
      <PanelGrid />
      <Featured />
      <TextVisual />
      <br />
    </Layout>
  )
}