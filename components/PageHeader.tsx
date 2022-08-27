import { useRouter } from 'next/router';

const PageHeader = (props) => {
    const {title, headerContent} = props; 
    const { locale, locales, asPath } = useRouter();

    console.log(headerContent);
    console.log(locale);

    const l18n = headerContent.filter((h) => h.locale === locale); 

    console.log(l18n[0].title);

    return(
        <div className="container px-5 pt-24 mx-auto">
            <h1 className="generalPageTitle">{l18n[0].title}</h1>
            <div className="h-1 overflow-hidden pb-8">
                <div className="h-1 w-20 bg-goldenrod"></div>
            </div>
            <p className="leading-relaxed text-lg mb-4" dangerouslySetInnerHTML={{ __html: l18n[0].content }} />
        </div>
    )
}

export default PageHeader; 