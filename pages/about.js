import Layout from './../components/Layout';
import PageHeader from '../components/PageHeader';
import TextVisual from './../components/TextVisual';
import Faq from './../components/Faqs/Faq';
import { useRouter } from 'next/router';


export default function About() {
  
    let aboutContent = [
        
        {
            "locale": "en-US",
            "title": "About Us",
            "content": `Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn`
        },
        {
            "locale": "pt-PT",
            "title": "Sobré nos",
            "content": "Esta es la primera entrada del blog en español publicada en el blog",
        }
    ];

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


