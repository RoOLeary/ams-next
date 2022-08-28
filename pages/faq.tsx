import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Faq from '../components/Faqs/Faq';
import faqContent from '../lib/data/faqContent';

export default function Index() {

    return(
        <Layout>
            <PageHeader title="Frequently Asked Questions" headerContent={faqContent} />    
            <Faq />
        </Layout>
    ) 
}
