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
            "title": "Cologne Guitar Quartet",
            "content": "",
            "price": '€10 / €8 (members)'
        },
        {
            "locale": "pt",
            "title": "Cologne Guitar Quartet",
            "content": "",
            "price": '€10 / €8 (members)'
        }
    ];

    const eCont = eventContent && eventContent.locale === locale;
    
    return(
        <Layout>
            <PageHeader title={eCont.title} headerContent={eventContent} />
            <br />
            <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
                <Ticket description={'Cologne Guitar Quartet'} price={eventContent.price} />
            </div>
            <Banner title={'Event Banner'} />
        </Layout>
    )
}

export default EventSingle; 