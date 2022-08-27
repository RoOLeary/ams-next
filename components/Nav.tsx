import Link from 'next/link';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router'; 
import { isActiveLink } from '../lib/utils'
import { AnimateSharedLayout, motion } from 'framer-motion'

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



const Nav = (): JSX.Element => {
    const unitRef = useRef(null);
    const router = useRouter(); 
    const { locales, locale } = useRouter();
    const [active, setActive] = useState(false);
    const [navbar, setNavbar] = useState(false);

    // console.log(locale);

    const handleClick = () => {
        console.log('toggled')
        setActive(!active)
        // console.log(active);
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
          {links.map(({ name, ptName, href }, i) => (
                
               
                <Link key={i} href={`${locale}${href}`}>
                    <a className={router.pathname == href ? "mr-5 gold" : "mr-5"}>
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
            <a href={`/${locale === 'pt' ? 'en' : 'pt'}`}>{locale === 'pt' ? 'EN' : 'PT'}</a>
          </div>
        </div>
      </nav>

        {/* <nav className="w-ful">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
            
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/blogs">
                    <a>Blogs</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/about">
                    <a>About US</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/contact">
                    <a>Contact US</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </nav> */}
        </AnimateSharedLayout>
    )    
}

export default Nav; 