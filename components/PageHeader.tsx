import { useRouter } from 'next/router';

const PageHeader = (props) => {
    const {title, headerContent} = props; 
    const { locale, locales, asPath } = useRouter();

   
    // console.log(locale);

    const l18n = headerContent && headerContent.filter((h) => h.locale === locale); 
    console.log(l18n);
    console.log(l18n[0].title)
    
    let fbstring:string = `Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party.</p>`;

    return(
        <div className="container px-5 pt-24 mx-auto">
            <h1 className="generalPageTitle">{l18n[0].title}</h1>
            <div className="h-1 overflow-hidden pb-8">
                <div className="h-1 w-20 bg-goldenrod"></div>
            </div>
            <p className="leading-relaxed text-lg mb-4" dangerouslySetInnerHTML={{ __html: l18n[0].detail ? l18n[0].detail : fbstring }} />
        </div>
    )
}

export default PageHeader; 