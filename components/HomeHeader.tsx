interface IHomeHeader {   
    title?: string
    editionDetails?: string
}
  


const HomeHeader = ({ title, editionDetails }: IHomeHeader): JSX.Element => {

    return(
        <div className="container px-5 py-24 mx-auto">
            <h1 className="generalPageTitle text-center">{title}</h1>
            <h2 className="text-center text-2xl">{editionDetails}</h2>
        </div>
    );
}

export default HomeHeader;