import Layout from './../../components/Layout';
import PageHeader from '../../components/PageHeader';
import Schedule from './../../components/Schedule';

export default function MasterClasses() {
    
    let scheduleContent =[
        {
            "locale": "en",
            "title": "Master Classes",
            "content": `Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table  salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table  salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn`
        },
        {
            "locale": "pt",
            "title": "Classe mestres",
            "content": `Meggings portland fingerstache lyft, pós-irônico fixie man bun banh mi umami todos os dias carregam hexágono locavore direct trade art party. Bolsa mensageiro de sálvia da fazenda à mesa Locavore em pequeno lote listicle gastropub. Livro de colorir flanela truffaut cerveja artesanal bebendo vinagre indumentária, romper moda machado normcore meh açougueiro. Portland 90's scenester vexillologist forrage pós-irônico assimétrico, chartreuse perturbar açougueiro paleo intelligentsia pabst antes de vender quatro loko. 3 lobos da lua brooklyn. Meggings portland fingerstache lyft, pós-irônico fixie man bun banh mi umami todos os dias carregam hexágono locavore direct trade art party. Bolsa de mensageiro de sálvia  de pequeno lote Locavore listicle gastropub da fazenda à mesa.`
        }
    ];
       
    return(
        <Layout>
            <PageHeader title="Master Classes" headerContent={scheduleContent} />
            <br />
            <Schedule />
        </Layout>
    ) 
}
