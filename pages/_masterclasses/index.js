import Layout from './../../components/Layout';
import PageHeader from '../../components/PageHeader';
import Schedule from './../../components/Schedule';
import masterClassContent from '../../lib/data/masterClassContent';

export default function MasterClasses() {
    
    return(
        <Layout>
            <PageHeader title="Master Classes" headerContent={masterClassContent} />
            <br />
            <Schedule />
        </Layout>
    ) 
}
