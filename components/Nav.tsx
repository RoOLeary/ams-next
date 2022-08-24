import Link from 'next/link';
import { useRef } from 'react';
import { useRouter } from 'next/router'; 
import { isActiveLink } from '../lib/utils'
import { AnimateSharedLayout, motion } from 'framer-motion'

const links: { name: string; href: string }[] = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Artists',
        href: '/artists',
    },
    {
        name: 'Schedule',
        href: '/schedule',
    },
    {
        name: 'Tickets',
        href: '/tickets',
    },
    {
        name: 'Master Classes',
        href: '/masterclasses',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
]



const Nav = (): JSX.Element => {
    const unitRef = useRef(null);
    const router = useRouter(); 

    const closeOnChange = (e) => {
        e.preventDefault();
        console.log(e); 
    }


    return(
        <AnimateSharedLayout>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" ref={unitRef}>
            {/* <Link href={'/'}><a className={router.pathname == "/" ? "mr-5 gold" : "mr-5"}>Home</a></Link>
            <Link href={'/about'}><a className={router.pathname == "/about" ? "mr-5 gold" : "mr-5"}>About</a></Link>
            <Link href={'/artists'}><a className={router.pathname == "/artists" ? "mr-5 gold" : "mr-5"}>Artists</a></ Link>
            <Link href={'/schedule'}><a className={router.pathname == "/schedule" ? "mr-5 gold" : "mr-5"}>Schedule</a></ Link>
            <Link href={'/tickets'}><a className={router.pathname == "/tickets" ? "mr-5 gold" : "mr-5"}>Tickets</a></ Link>
            <Link href={'/masterclasses'}><a className={router.pathname == "/masterclasses" ? "mr-5 gold" : "mr-5"}>Masterclasses</a></ Link>
            <Link href={'/contact'}><a className={router.pathname == "/contact" ? "mr-5 gold" : "mr-5"}>Contact</a></Link>
         */}
            {links.map(({ name, href }) => (
                
                
                <Link key={name} href={href}>
                    <a className={router.pathname == href ? "mr-5 nav-hightlight" : "mr-5"}>
                        {name}
                        {isActiveLink(href, router.pathname) && (
                            <motion.div
                                layoutId="navigation-underline"
                                className="navigation-underline"
                                animate
                            />
                        )}
                    </a>
                </Link>
               
            ))}
        </nav>
        </AnimateSharedLayout>
    )    
}

export default Nav; 