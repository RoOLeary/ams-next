import Layout from './../../components/Layout';
import Schedule from './../../components/Schedule';

export default function MasterClasses() {
    let scheduleContent = `Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.`; 
    return(
        <Layout>
            <div className="container px-5 py-24 mx-auto">
                <h1 className="generalPageTitle">Master Classes</h1>
                <div className="h-1 overflow-hidden pb-8">
                    <div className="h-1 w-20 bg-goldenrod"></div>
                </div>
                <p className="leading-relaxed text-lg mb-4" dangerouslySetInnerHTML={{ __html: scheduleContent }} />
            </div>
            <Schedule />
        </Layout>
    ) 
}
