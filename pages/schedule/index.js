import Layout from './../../components/Layout';
import Schedule from './../../components/Schedule';

export default function SchedulePage() {

    return(
        <Layout>
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-white schedulePageTitle">Schedule</h1>
            </div>
            <Schedule />
        </Layout>
    ) 
}
