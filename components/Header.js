import React from 'react'
import Link from 'next/link'
import {Row, Col, Container} from 'react-bootstrap'
// import Image from 'next/image'

const Header = () => {

    // const pageHeader = document.querySelector(".header-bio");
    // // const animatedUl = pageHeader.querySelector(".secondary-menu");
    // const scrollHeader = "scroll-header";
    // let targetScroll = window.innerHeight - pageHeader.offsetHeight;
    
    // window.addEventListener("scroll", () => {
    // const scrollY = this.pageYOffset;
    
    // if (scrollY > targetScroll) {
    //     pageHeader.classList.add(scrollHeader);
    // } else {
    //     pageHeader.classList.remove(scrollHeader);
    // }
    // });
    
    // window.addEventListener("resize", () => {
    // targetScroll = window.innerHeight - pageHeader.offsetHeight;
    // });

    return (
        <>
            <header className="header-bio">
                <Container fluid>
                    <Row>
                        <Col sm="1"></Col>
                        <Col>
                            <Link href="/">
                                <a>
                                    <img src="/assets/img/iconos/logo_unmsm_cabezera.svg" alt=""/>
                                </a>
                            </Link>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default Header
