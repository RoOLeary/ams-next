import Link from 'next/link';
import { useRouter } from 'next/router'; 

const Nav = () => {
    const router = useRouter(); 
    return(
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={'/'}><a className={router.pathname == "/" ? "mr-5 gold" : "mr-5"}>Home</a></Link>
            <Link href={'/about'}><a className={router.pathname == "/about" ? "mr-5 gold" : "mr-5"}>About</a></Link>
            <Link href={'/artists'}><a className={router.pathname == "/artists" ? "mr-5 gold" : "mr-5"}>Artists</a></ Link>
            <Link href={'/schedule'}><a className={router.pathname == "/schedule" ? "mr-5 gold" : "mr-5"}>Schedule</a></ Link>
            <Link href={'/tickets'}><a className={router.pathname == "/tickets" ? "mr-5 gold" : "mr-5"}>Tickets</a></ Link>
            <Link href={'/masterclasses'}><a className={router.pathname == "/masterclasses" ? "mr-5 gold" : "mr-5"}>Masterclasses</a></ Link>
            <Link href={'/contact'}><a className={router.pathname == "/contact" ? "mr-5 gold" : "mr-5"}>Contact</a></Link>
        </nav>
    )    
}

export default Nav; 