import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
    return(
        <header className="text-white body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={'/'}><a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <img src="./../algarvemusicseries.jpeg" height={75} width={75} />
                {/* <span className="ml-3 text-xl">Algarve Music Series</span> */}
                </a></Link>

                <Nav />
                
                {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </button> */}
            </div>
        </header>
    )
}

export default Header; 