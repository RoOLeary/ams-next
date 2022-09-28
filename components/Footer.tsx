import Link from 'next/link';
import Image from 'next/image';
import imageLoader from '../imageLoader';

const Footer = () => {
    return(
        <footer className="text-white-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <Link href={'/'}><a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <Image loader={imageLoader} alt="AMS Logo - Footer" src="../../algarvemusicseries.jpeg" height={50} width={50} />
                {/* <span className="ml-3 text-xl">Algarve Music Series</span> */}
                </a></Link>
                <p className="text-sm text-white-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">© 2022 Algarve Music Series —
                <a href="https://twitter.com/algarvemusicseries" className="text-white-600 ml-1" rel="noopener noreferrer" target="_blank">@algarvemusicseries</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="text-white-500" href="https://facebook.com/algarvemusicseries">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
               
                <a className="ml-3 text-white-500" href="https://instagram.com/algarvemusicseries">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </a>
            
                </span>
            </div>
        </footer>
    )
}

export default Footer; 