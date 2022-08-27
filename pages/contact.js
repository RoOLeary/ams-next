import Layout from './../components/Layout';
import PageHeader from '../components/PageHeader';
import TextVisual from './../components/TextVisual';

export default function Contact(){
   
    let contactText =[
        {
            "locale": "en",
            "title": "Contact Us",
            "content": `Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn`
        },
        {
            "locale": "pt",
            "title": "Contato",
            "content": `Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn`
        }
    ];


    return(
        <Layout>
            <PageHeader title="Contact Us" headerContent={contactText} />
            <section className="text-black mt-24 body-font relative">
                <div className="absolute inset-0 bg-gray-300">
                    <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0algarve+(Algarve%20Music%20Series)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ "filter": "grayscale(1) contrast(1.2) opacity(0.4)" }} ></iframe>
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="text-black text-lg mb-1 font-medium title-font">Contact Us</h2>
                    <p className="leading-relaxed mb-5 text-black">To contact us, please add your email address and message below.</p>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-black">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-black">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-goldenrod border-0 py-2 px-6 focus:outline-none hover:bg-goldenrod rounded text-lg">Button</button>
                    <p className="text-xs text-white-500 mt-3">We will not pass your data to third parties.</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}