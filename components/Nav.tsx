import Link from 'next/link';
import { useRef, useState } from 'react';
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
    const [active, setActive] = useState(false);

    const handleClick = () => {
        console.log('toggled')
        setActive(!active)
        console.log(active);
    }

    return(
        <AnimateSharedLayout>
        {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" ref={unitRef}>
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
        </nav> */}
    
      <nav className='flex items-center flex-wrap p-3 '>
        <button
            className=' inline-flex p-3 hover:bg-gray-200 rounded-full lg:hidden text-white ml-auto hover:text-white outline-none'
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

        <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
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
          </div>
        </div>
      </nav>
        </AnimateSharedLayout>
    )    
}

export default Nav; 