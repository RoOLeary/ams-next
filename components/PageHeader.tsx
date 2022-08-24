const PageHeader = (props) => {
    const {title, headerContent} = props; 
    return(
        <div className="container px-5 pt-24 mx-auto">
            <h1 className="generalPageTitle">{title}</h1>
            <div className="h-1 overflow-hidden pb-8">
                <div className="h-1 w-20 bg-goldenrod"></div>
            </div>
            <p className="leading-relaxed text-lg mb-4" dangerouslySetInnerHTML={{ __html: headerContent }} />
        </div>
    )
}

export default PageHeader; 