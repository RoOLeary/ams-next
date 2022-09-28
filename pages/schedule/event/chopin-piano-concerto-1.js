import Banner from '../../../components/Banner' 
import Layout from '../../../components/Layout';
import PageHeader from '../../../components/PageHeader';
import Ticket from '../../../components/Ticket';
import { useRouter } from 'next/router'; 

const EventSingle = () => {
    const { locale } = useRouter();
   
    let eventContent = [
        {
            "locale": "en",
            "title": "Chopin Piano Concerto",
            "content": "",
            "desc": "Chopin Piano Concertosss",
            "price": "free"
        },
        {
            "locale": "pt",
            "title": "Chopin Piano Concerto",
            "content": "",
            "desc": "Chopin Piano Concertosss",
            "price": "free"
        }
    ];

    const eCont = eventContent && eventContent.locale === locale; 

    return(
        <Layout>
            <PageHeader title={eCont.title} headerContent={eventContent} />
            <br />
            <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
                <Ticket description={eCont.desc} price={eCont.price} />
            </div>
            <Banner title={'Event Banner'} />
        </Layout>
    )
}

export default EventSingle; 