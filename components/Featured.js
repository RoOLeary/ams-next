import Link from 'next/link';

const Featured = () => {

    return(
        <section className="text-white-600 mb-24 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                <div className="h-1 overflow-hidden">
                    <div className="h-1 w-20 bg-goldenrod"></div>
                </div>
                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                    <h1 className="sm:w-2/5 text-white-900 font-medium title-font text-4xl mb-2 sm:mb-0">Concertos em Destaque</h1>
                    <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src="https://source.unsplash.com/600x450/?cello?music" />
                    </div>
                    <Link href={'artists/isabel-vaz'}><a><h2 className="text-xl font-medium title-font gold mt-5">Isabel Vaz</h2></a></Link>
                    <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                    <Link href={'artists/isabel-vaz'}><a className="gold inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                    </Link>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src="https://source.unsplash.com/600x450/?piano?music" />
                    </div>
                    <h2 className="text-xl font-medium title-font gold mt-5">Vasco Dantes</h2>
                    <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                    <Link href={'artists/vasco-dantes'}><a className="gold inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                    </Link>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src="https://source.unsplash.com/600x450/?clarinet" />
                    </div>
                    <h2 className="text-xl font-medium title-font gold mt-5">Natasha Grujic</h2>
                    <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                    <Link href={'artists/natasha-grujic'}><a className="gold inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                    </Link>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Featured; 