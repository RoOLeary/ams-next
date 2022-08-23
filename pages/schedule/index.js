import Layout from './../../components/Layout';
import Schedule from './../../components/Schedule';

export default function SchedulePage() {

    return(
        <Layout>
            <div className="container px-5 py-24 mx-auto">
                <h1 className="generalPageTitle">Schedule</h1>
            </div>
            <Schedule />
        </Layout>
    ) 
}
