import Banner from '../../../components/Banner' 
import Layout from '../../../components/Layout';
import PageHeader from '../../../components/PageHeader';
import Ticket from '../../../components/Ticket';
import { useRouter } from 'next/router'; 

const EventSingle = () => {
    const router = useRouter(); 
    const query = router.query;
    console.log(query.title)

    let aboutContent = [
        {
            "locale": "en",
            "title": "Piano Recital - Heribert Koch",
            "content": "Bach, Beethoven and Brahms",
        },
        {
            "locale": "pt",
            "title": "Piano Recital - Heribert Koch",
            "content": "Bach, Beethoven and Brahms",
        }
    ];

    return(
        <Layout>
            <PageHeader title={aboutContent.title} headerContent={aboutContent} />
            <br />
            <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
                <Ticket description={'Piano Recital - Heribert Koch'}/>
            </div>
            <Banner title={'Event Banner'} />
        </Layout>
    )
}

export default EventSingle; 