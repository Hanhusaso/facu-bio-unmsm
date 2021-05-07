import Header from "./Header"
import Footer from "./Footer"
import Menu from "./Menu"
import Head from "next/head";

const Layout = ({title, children}) => {
    return (
        <div>
            <Head>
                <title>{title} | Facultad de Ciencias Biológicas</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu/>
            <Header></Header>
                <div className="bg-textura below-header">
                    {children}
                </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout
