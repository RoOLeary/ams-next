import Link from 'next/link';
import Image from 'next/image';
import Banner from './../../../components/Banner' 
import Layout from './../../../components/Layout';
import PageHeader from '../../../components/PageHeader';
import HeroGrid from '../../../components/HeroGrid';
import Ticket from './../../../components/Ticket';
import imageLoader from '../../../imageLoader';

const EventSingle = () => {
    
    let aboutContent = [
        {
            "locale": "en",
            "title": "About Us",
            "content": `Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table  salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table  salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn`
        },
        {
            "locale": "pt",
            "title": "Sobré nos",
            "content": "Esta es la primera entrada del blog en español publicada en el blog",
        }
    ];

    return(
        <Layout>
            <PageHeader title="Event Single Instance" headerContent={aboutContent} />
            <br />
            <HeroGrid />
            <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
                <Ticket />
            </div>
            
            
            <Banner title={'Event Banner'} />
        </Layout>
    )
}

export default EventSingle; 