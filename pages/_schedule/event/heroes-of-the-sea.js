import Image from 'next/image'; 
import imageLoader from '../../../imageLoader';
import Banner from '../../../components/Banner'; 
import Layout from '../../../components/Layout';
import PageHeader from '../../../components/PageHeader';
import Ticket from '../../../components/Ticket';
import { useRouter } from 'next/router'; 

const EventSingle = () => {
    const { locale } = useRouter();

    let eventContent = [
        {
            "locale": "en",
            "title": "Heroes of the Sea, from Painting to Music",
            "content": "",
            "price": '€10 / €8 (members)',
            "detail": "",
            "excerpt": "",
            "location": "",
            "slug": ""
        },
        {
            "locale": "pt",
            "title": "Heroes of the Sea, from Painting to Music",
            "content": "",
            "price": '€10 / €8 (members)',
            "detail": "",
            "excerpt": "",
            "location": "",
            "slug": ""
        }
    ];

    const eCont = eventContent && eventContent.locale === locale;

    return(
        <Layout>
            <PageHeader title={eCont.title} headerContent={eventContent} />
            <br />
            <section className="text-white-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <div className="h-1 bg-white rounded overflow-hidden">
                            <div className="h-1 w-20 bg-goldenrod"></div>
                        </div>
                        <br />
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900">Performers</h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image className={"object-cover object-center"} alt="hero" src="https://source.unsplash.com/600x450/?concert?tickets" loader={imageLoader} width={600} height={450} />
                    </div>
                </div>
            </section>
            <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
                <Ticket description={'Heroes of the Sea, from Painting to Music'} price={eventContent.price} />
            </div>
            <Banner title={'Event Banner'} />
        </Layout>
    )
}

export default EventSingle; 