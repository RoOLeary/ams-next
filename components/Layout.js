import Head from 'next/head';
import Header from './../components/Header';
import Footer from './../components/Footer';

const Layout = ({ children }) => {
    return(
        <>  
            <Head />
            <Header />  
                <div>{children}</div>
            <Footer />
        </>

    )
}

export default Layout;