import Link from 'next/link';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router'; 
import { isActiveLink } from '../lib/utils'
import { motion } from 'framer-motion'

const links: { name: string; ptName: string, href: string }[] = [
    {
        name: 'Home',
        ptName: 'Casa',
        href: '/',
    },
    {
        name: 'About',
        ptName: 'Sobré Nos',
        href: '/about',
    },
    {
        name: 'Artists',
        ptName: 'Artistas',
        href: '/artists',
    },
    {
        name: 'Schedule',
        ptName: 'Cronograma',
        href: '/schedule',
    },
    {
        name: 'Tickets',
        ptName: 'Ingressos',
        href: '/tickets',
    },
    {
        name: 'Master Classes',
        ptName: 'Classe mestres',
        href: '/masterclasses',
    },
    {
        name: 'Contact',
        ptName: 'Contato',
        href: '/contact',
    },
]

export async function getStaticProps() {
    return { props: { isNav: true } };
  }

const Nav = (): JSX.Element => {
    const unitRef = useRef(null);
    const router = useRouter(); 
    const { locales, locale } = useRouter();
    const [active, setActive] = useState(false);
   
   
    const handleClick = () => {
        // console.log(active)
        setActive(!active)
        document.body.className = active ? '' : 'navIsOpen';
        
    }

    return(
          
            <nav className='flex items-center flex-wrap p-3 '>
                <button
                    className=' inline-flex p-3 hover:bg-gray-200 rounded-full lg:hidden text-white ml-auto hover:text-white outline-none menuToggleIndex'
                    onClick={() => handleClick()}
                >
                    <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='goldenrod'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                    </svg>
                </button>

                <div className={`${active ? 'mobileNav' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                {links.map(({ name, ptName, href }, i) => (
                        
                    
                        <Link key={i} href={`/${locale}${href}`}>
                            <a className={router.pathname == href ? "mr-5 gold mobLink" : "mr-5 mobLink"}>
                                {locale === 'pt' ? ptName : name}
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
                    <a href={`/${locale === 'pt' ? 'en' : 'pt' }`}>{locale === 'pt' ? 'EN' : '🇵🇹'}</a>
                </div>
                </div>
            </nav>
        
    )    
}

export default Nav; 