import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'; 

const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
}

type Props = {
    children: any
    description?: string
}

const Layout = ({ children, description }: Props): JSX.Element => (
        
        <>  
            <Head>
                <title>Algarve Music Series | October 2023</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <SEO />
            </Head>
            <Header />  
            <motion.div
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: 'linear' }} // Set the transition to linear
                className=""
            >
                {children}
            </motion.div>
            <Footer />
        </>

    )


export default Layout;