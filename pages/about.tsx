import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import TextVisual from '../components/TextVisual';
import Faq from '../components/Faqs/Faq';
import aboutContent from '../lib/data/aboutContent';

export default function About() {

    return(
        <Layout>
            <PageHeader title="About Us" headerContent={aboutContent} />
            <TextVisual />
            <br />
            <Faq />
            <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
                <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-full sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-relaxed text-lg mb-4" dangerouslySetInnerHTML={{ __html: aboutContent[0].content }} />
                        <a className="gold inline-flex items-center">Learn More<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a>
                    </div>
                </div>
            </div>
        </Layout>
    ) 
}


