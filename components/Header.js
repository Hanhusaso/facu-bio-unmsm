import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {Row, Col, Container} from 'react-bootstrap'
// import Image from 'next/image'

const Header = () => {

    // const header = useRef()

    const [isShrunk, setShrunk] = useState(false);

    useEffect(() => {

        const handler = () => {
            setShrunk((isShrunk) => {
              if (
                !isShrunk &&
                (document.body.scrollTop > 20 ||
                  document.documentElement.scrollTop > 20)
              ) {
                return true;
              }
      
              if (
                isShrunk &&
                document.body.scrollTop < 4 &&
                document.documentElement.scrollTop < 4
              ) {
                return false;
              }
      
              return isShrunk;
            });
          };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);

    }, []);



    return (
        <>
            <header className={isShrunk ? "header-bio shrink-header" : "header-bio"}>
                <Container fluid>
                    <Row>
                        <Col className="lp-shrink-header" sm="1"></Col>
                        <Col className="">
                            <Link href="/">
                                <a>
                                    <img className="img-logo" src="/assets/img/iconos/logo_unmsm_cabezera.svg" alt=""/>
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
