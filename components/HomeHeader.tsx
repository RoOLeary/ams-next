import { motion, AnimatePresence } from 'framer-motion'


interface IHomeHeader {   
    title?: string
    editionDetails?: string
}
  


const HomeHeader = ({ title, editionDetails }: IHomeHeader): JSX.Element => {

    return(
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .8,  ease: "easeInOut" }}
                className="container px-5 py-24 mx-auto"
            >
                <h1 className="generalPageTitle text-center">{title}</h1>
                <h2 className="text-center text-2xl">{editionDetails}</h2>
            </motion.div>
        </AnimatePresence>
    );
}

export default HomeHeader;