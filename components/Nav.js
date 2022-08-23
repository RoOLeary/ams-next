import Link from 'next/link';

const Nav = () => {
    return(
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={'/'}><a className="mr-5 hover:text-gray-900">Home</a></Link>
            <Link href={'/about'}><a className="mr-5 hover:text-gray-900">About</a></Link>
            <Link href={'/artists'}><a className="mr-5 hover:text-gray-900">Artists</a></ Link>
            <Link href={'/schedule'}><a className="mr-5 hover:text-gray-900">Schedule</a></ Link>
            <Link href={'/tickets'}><a className="mr-5 hover:text-gray-900">Tickets</a></ Link>
            <Link href={'/contact'}><a className="mr-5 hover:text-gray-900">Contact</a></Link>
        </nav>
    )    
}

export default Nav; 