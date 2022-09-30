import Link from 'next/link';
import Image from 'next/image'; 
import imageLoader
from '../imageLoader';

interface Featured {     
    featuredTitle?: string
    featuredContent?: string
}


const Featured = ({ featuredTitle, featuredContent }: Featured): JSX.Element => {

    return(
        <section className="text-white-600 mb-24 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                <div className="h-1 overflow-hidden">
                    <div className="h-1 w-20 bg-goldenrod"></div>
                </div>
                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                    <h1 className="sm:w-2/5 text-white-900 font-medium title-font text-4xl mb-2 sm:mb-0">{featuredTitle}</h1>
                    <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">{featuredContent}</p>
                </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="h-64 overflow-hidden">
                        <Image loader={imageLoader} alt="content" className="object-cover object-center h-full w-full" src="./../assets/images/isabelvaz.jpeg" width={600} height={400} />
                    </div>
                    <Link href={'artists/isabel-vaz'}><a><h2 className="text-xl font-medium title-font gold mt-5">Isabel Vaz</h2></a></Link>
                    <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra.</p>
                    <Link href={'artists/isabel-vaz'}><a className="gold inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                    </Link>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="h-64 overflow-hidden">
                        <Image loader={imageLoader} alt="content" className="object-cover object-center h-full w-full" src="./../assets/images/vasco-dantas.jpeg" width={600} height={400} />
                    </div>
                    <Link href={'artists/vasco-dantas'}><a><h2 className="text-xl font-medium title-font gold mt-s5">Vasco Dantas</h2></a></Link>
                    <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra.</p>
                    <Link href={'artists/vasco-dantas'}><a className="gold inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                    </Link>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="h-64 overflow-hidden">
                        <Image loader={imageLoader} alt="content" className="object-cover object-center h-full w-full" src="./../assets/images/lisa-jacobs.jpeg" width={600} height={400} />
                    </div>
                    <h2 className="text-xl font-medium title-font gold mt-5">Lisa Jacobs</h2>
                    <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra.</p>
                    <Link href={'artists/ketevan-roninishvilli'}><a className="gold inline-flex items-center mt-3">Learn More
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