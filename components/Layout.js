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
                <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css " />
                <link rel="stylesheet" href="/resources/demos/style.css" />
                <script src="https://code.jquery.com/jquery-1.12.4.js" />
                <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" />
            </Head>
            <Menu/>
            <Header></Header>
                <div className="bg-textura below-header pb-5">
                    {children}
                </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout
