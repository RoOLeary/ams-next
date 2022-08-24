import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
    return(
        <header className="text-white body-font">
            <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center justify-between">
                <Link href={'/'}>
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img src="../../algarvemusicseries.jpeg" height={75} width={75} />
                    </a>
                </Link>
                <Nav />
            </div>
        </header>
    )
}

export default Header; 