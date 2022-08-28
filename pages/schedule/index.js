import Layout from './../../components/Layout';
import PageHeader from '../../components/PageHeader';
import Schedule from './../../components/Schedule';
import scheduleContent from './../../lib/data/scheduleContent';




export default function SchedulePage() {
    
    return(
        <Layout>
            <PageHeader title="Schedule" headerContent={scheduleContent} />
            <br />
            <Schedule />
        </Layout>
    ) 
}
