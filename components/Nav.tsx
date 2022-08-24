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

    return(
        <AnimateSharedLayout>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" ref={unitRef}>
            {links.map(({ name, href }) => (
                
                <>
                <Link href={href}>
                    <a className={router.pathname == href ? "mr-5 gold" : "mr-5"}>
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
                </>
            ))}
        </nav>
        </AnimateSharedLayout>
    )    
}

export default Nav; 