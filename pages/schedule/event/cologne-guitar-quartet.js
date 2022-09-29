import Image from 'next/image'; 
import imageLoader from '../../../imageLoader';
import Banner from '../../../components/Banner' 
import Layout from '../../../components/Layout';
import PageHeader from '../../../components/PageHeader';
import Ticket from '../../../components/Ticket';
import { useRouter } from 'next/router'; 

const EventSingle = () => {
    const { locale } = useRouter();
   
    const enBio = `The group Cologne Guitar Quartet is a guitar quartet founded in 2014 in Germany, by musicians from different countries: Ptolemaios Armaos (Greece), Tal Botvinik (Israel), Tobias Juchem (Germany) and Henrique Almeida (Portugal). His music explores different styles ranging from classical, traditional, world music, rock, contemporary, experimental and electronic music. He participates in several festivals in Italy, France, Germany, Israel, China or Serbia and has won several first prizes in international competitions such as the "Brigitte-Kempen- Kammermusikwettbewerb", "Karlsruher Wettbewerb für die Interpretation zeitgenössischer Musik", "Wuppertaler Kammermusik-Wettbewerb " or the “IMKA Chamber Music Competition”. He is the winner of the “Live Music Now” grant from the Yehudi Menuhin Foundation and the “Ensemble Förderung” grant, awarded by the Ministry of Culture of the State of Nordrhein-Westfalen, Germany, with a duration of 3 years.<br><br> The quartet already has two studio albums: Phasma (2018), dedicated to the music of Feliu Gasull, Georg Friedrich Haas and Mayako Kubo, and the most recent album, Routes (2020), which features a diverse program with music from Vivaldi to popular music. Sephardic, including original music composed by the quartet. In 2019, the project diGIT was born – new compositions for classical, electric and electronic guitars, a project that has already had two editions. A total of 7 pieces dedicated to the quartet were premiered, by composers such as Jonah Haven, Yair Klartag, Francisco Goldschmit, Dariya Maaminova, etc.`;
    const ptBio = `O grupo Cologne Guitar Quartet é um quarteto de guitarras fundado em 2014 na Alemanha, por músicos de diferentes países: Ptolemaios Armaos (Grécia), Tal Botvinik (Israel), Tobias Juchem (Alemanha) e Henrique Almeida (Portugal). A sua música explora diferentes estilos que vão desde a música clássica, tradicional, músicas do mundo, rock, música contemporânea, música experimental e eletrónica.  
    Participa em diversos festivais em Itália, França, Alemanha, Israel, China ou Sérvia e conta com vários primeiros prémios em competições internacionais como o "Brigitte-Kempen- Kammermusikwettbewerb", "Karlsruher Wettbewerb für die Interpretation zeitgenössischer Musik", "Wuppertaler Kammermusik-Wettbewerb" ou o “IMKA Chamber Music Competition”. É vencedor da bolsa “Live Music Now” da Fundação Yehudi Menuhin e da bolsa “Ensemble Förderung”, atribuida pelo ministério da cultura do estado de Nordrhein-Westfalen, Alemanha, com duração de 3 anos. <br><br>
    O quarteto conta já com dois albuns de estúdio: Phasma (2018), dedicado à música de Feliu Gasull, Georg Friedrich Haas e Mayako Kubo e o álbum mais recente, Routes (2020) que apresenta um programa diversificado com música desde Vivaldi a música popular sefardita, incluindo música original composta pelo quarteto. 
    Em 2019 nasce o projeto diGIT – novas composições para guitarras clássica, elétrica e música eletrónica, projeto que conta já com duas edições. Foram estreadas um total de 7 peças dedicadas ao quarteto, de compositores como Jonah Haven, Yair Klartag, Francisco Goldschmit, Dariya Maminova, etc.`;

    const performers = 'Ptolemaios Armaos (Greece), Tal Botvinik (Israel), Tobias Juchem (Germany) and Henrique Almeida (Portugal)';

    let eventContent = [
        {
            "locale": "en",
            "title": "Cologne Guitar Quartet",
            "content": "",
            "price": 'free',
            "detail": performers,
            "excerpt": enBio,
            "location": "Igreja do Carmo, Faro",
        },
        {
            "locale": "pt",
            "title": "Cologne Guitar Quarteta",
            "content": "",
            "price": 'free',
            "detail": performers,
            "excerpt": ptBio,
            "location": "Igreja do Carmo, Faro",
        }
    ];

    const eCont = eventContent && eventContent.filter((ev) => ev.locale === locale); 
    console.log(eCont[0].title);
    
    return(
        <Layout>
            <div className="container px-5 pt-24 mx-auto">
                <h1 className="generalPageTitle">{eCont[0].title}</h1>
                <div className="h-1 overflow-hidden pb-8">
                    <div className="h-1 w-20 bg-goldenrod"></div>
                </div>
                <p className="leading-relaxed text-lg mb-4" dangerouslySetInnerHTML={{ __html: eCont[0].excerpt }} />
            </div>
            <br />
            <section className="text-white-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <div className="h-1 bg-white rounded overflow-hidden">
                            <div className="h-1 w-20 bg-goldenrod"></div>
                        </div>
                        <br />
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900">Artistas</h1>
                        <p className="mb-8 leading-relaxed">{eCont[0].detail}</p>
                        
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image className={"object-cover object-center"} alt="hero" src="/assets/images/cologne-guitar-quartet.jpg" loader={imageLoader} width={600} height={450} />
                    </div>
                </div>
            </section>
            <br />
            
            <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
            <div className="singleTicket sm:mt-4">
            <div className="sm:w-full lg:w-full w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h1 className="text-white text-3xl title-font font-medium mb-4">Event & Ticket Information</h1>
                <div className="h-1 overflow-hidden pb-8">
                    <div className="h-1 w-20 bg-goldenrod"></div>
                </div>
                <div className="flex mb-4">
                    <a className="flex-grow gold py-2 text-lg">Event Description</a>
                </div>
                <p className="leading-relaxed mb-4">{'Event Description to follow.'}</p>
                
                {eCont[0].price === "free" ? 'Ticket Details' :
                
                <div className="flex">
                    <span className="title-font font-medium text-2xl text-white">{eCont[0].price ? `€${eCont[0].price}` : '€10'}</span>
                    <button className="flex ml-auto text-white bg-goldenrod border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded">Buy Now</button>
                </div>
                }
            </div>
        </div>
            </div>
            <Banner title={'Event Banner'} />
        </Layout>
    )
}

export default EventSingle; 