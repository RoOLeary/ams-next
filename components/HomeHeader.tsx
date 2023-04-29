import { motion, AnimatePresence } from 'framer-motion'


interface IHomeHeader {   
    title?: string
    editionDetails?: string
    comingSoon?: string
}
  


const HomeHeader = ({ title, editionDetails, comingSoon }: IHomeHeader): JSX.Element => {

    console.log(title); 

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
                <br />
                <h3 className="text-center text-3xl">{comingSoon}</h3>
            </motion.div>
        </AnimatePresence>
    );
}

export default HomeHeader;