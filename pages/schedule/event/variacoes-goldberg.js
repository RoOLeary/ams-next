import Banner from '../../../components/Banner' 
import Layout from '../../../components/Layout';
import PageHeader from '../../../components/PageHeader';
import Ticket from '../../../components/Ticket';
import { useRouter } from 'next/router'; 

const EventSingle = () => {
    const router = useRouter(); 
   
    let aboutContent = [
        {
            "locale": "en",
            "title": "Variações Goldberg",
            // "content": query.detail
        },
        {
            "locale": "pt",
            "title": "Variações Goldber",
            // "content": query.detail
        }
    ];

    return(
        <Layout>
            <PageHeader title={aboutContent.title} headerContent={aboutContent} />
            <br />
            <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
                <Ticket />
            </div>
            <Banner title={'Event Banner'} />
        </Layout>
    )
}

export default EventSingle; 