import Link from 'next/link';
import Image from 'next/image'; 
import Layout from './../../../components/Layout';
import PageHeader from '../../../components/PageHeader';
import Gallery from './../../../components/Gallery';
import Ticket from './../../../components/Ticket';
import imageLoader from '../../../imageLoader';

const EventSingle = () => {
    let aboutContent = `Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
    <br /><br />
    Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
    `; 
    return(
        <Layout>
            <PageHeader title="Event Single Instance" headerContent={aboutContent} />
            <br />
            <Gallery />
            <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
                <Ticket />
            </div>
            
            
            <div className="w-full h-auto border-black bg-white flex justify-end">
                <Image loader={imageLoader} alt="Banner Image" src="https://algarvemusicseries.com/wp-content/uploads/2019/11/music.jpeg" className="relative block w-full h-full object-cover -mt-12" width={1200} height={480}/>     
            </div>
        </Layout>
    )
}

export default EventSingle; 