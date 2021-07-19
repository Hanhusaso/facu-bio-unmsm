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
                <style id="calendar">
                {`
                    a.ui-state-active{
                        border: 1px solid #48DC57 !important;
                        border-radius: 6px;
                        background: none !important;
                        opacity: 80% !important;
                        font-weight: normal !important;
                        color: #454545 !important;
                        text-align: center !important;
                    }
                    
                    .ui-state-default{
                        border: none !important;
                        background: none !important;
                        text-align: center !important;
                    }
                    .ui-state-hover{
                        border: 0px solid #cccccc !important;
                        background: #ededed !important;
                        color: #2b2b2b !important;
                        text-align: center !important;
                    }
                    .ui-datepicker-inline{
                        width: 100% !important;
                    }
                    thead{
                        color: #56756B !important;
                        background: #ffffff !important;
                    }
                    .ui-datepicker-title{
                        color: #56756B !important;
                    }
                `}
                </style>
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
