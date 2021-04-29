import React from 'react'
import Link from 'next/link'
import {Row, Col, Container} from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <header className="header-bio">
                <Container fluid>
                    <Row>
                        <Col sm="1"></Col>
                        <Col>
                            <Link href="/">
                                <a>
                                    <img src="assets/img/iconos/logo_unmsm_cabezera.svg" alt=""/>
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
