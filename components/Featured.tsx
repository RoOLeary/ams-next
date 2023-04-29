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
            <div className="container px-5 py-4 mx-auto">
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="h-64 overflow-hidden">
                        <Image loader={imageLoader} alt="content" className="object-cover object-center h-full w-full" src="./../assets/images/do-amor.jpeg" width={600} height={400} />
                    </div>
                    <h2 className="text-xl font-medium title-font gold mt-5">Do Amor</h2>
                    <h3 className="text-base leading-relaxed gold">Teatro das Figuras, Faro</h3>
                    <p className="text-base leading-relaxed mt-2">16 April 2023, 19:00</p>
                    <p className="text-base leading-relaxed mt-2">
                        Orquestra Sem Fronteiras
                    </p>
                    <p>
                        Martim Sousa Tavares - Musical Direction<br />
                        Vasco Dantas - piano<br />
                        Works by Clara Schumann, Barber, Menotti and R. Schumann
                    </p>
                   
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="h-64 overflow-hidden">
                        <Image loader={imageLoader} alt="content" className="object-cover object-center h-full w-full" src="./../assets/images/concerto.jpeg" width={600} height={400} />
                    </div>
                    <h2 className="text-xl font-medium title-font gold mt-5"><a href="https://www.pianoconcertofestival.com" target="_blank" rel="noreferrer">Piano Concerto Festival</a></h2>
                    <h3 className="text-base leading-relaxed gold">Faro</h3>
                    <p className="text-base leading-relaxed mt-2">3-9 July 2023</p>
                   
                    <p>
                    Faro welcomes young pianists from all over the world. A learning experience with outstanding tutors and with the collaboration of Orquestra do Algarve
                    </p>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="h-64 overflow-hidden">
                        <Image loader={imageLoader} alt="content" className="object-cover object-center h-full w-full" src="./../assets/images/ams23.jpeg" width={600} height={400} />
                    </div>
                    <h2 className="text-xl font-medium title-font gold mt-5">Algarve Music Series</h2>
                    <h3 className="text-base leading-relaxed mt-2 gold">Faro, Algarve</h3>
                    <p className="text-base leading-relaxed mt-2">October 2023</p>
                    <p className="text-base leading-relaxed mt-2">
                        During the month of October expect beautiful music played by excellent ensembles in Faro and surroundings, in the most inspiring locations. Details on the schedule coming up very soon!
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Featured; 