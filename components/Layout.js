import Header from "./Header"
import Footer from "./Footer"
import Head from "next/head";

const Layout = ({title, children}) => {
    return (
        <div>
            <Head>
                <title>{title} | Facultad de Ciencias Biológicas</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
                <div className="bg-textura">
                    {children}
                </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout
