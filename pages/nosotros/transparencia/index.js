import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import {Row, Col, Container, Breadcrumb, Tabs, Tab} from 'react-bootstrap'

const transparencia = () => {

    return (
        <>
            <Layout title="Transparencia">
                <div>
                    <div>
                        <Container>
                            <Row>
                                <Col md="1"></Col>
                                <Col>
                                    <Breadcrumb>
                                        {/* <Breadcrumb.Item> */}
                                        <li className="breadcrumb-item">
                                            <Link href="/">
                                                <a role="button">Inicio</a>
                                            </Link>
                                        </li>
                                        {/* </Breadcrumb.Item> */}
                                        <Breadcrumb.Item active>Nosotros: Transparencia</Breadcrumb.Item>
                                    </Breadcrumb>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                    </div>
                    <div>
                        <Container className="mb-3">
                            <Row>
                                <Col md="1"></Col>
                                <Col>
                                    <div className="title-page text-center">Transparencia</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>

                        <Container>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="2">
                                    <div className="mb-4">
                                        <ul className="nav flex-column tabs-wrapper">
                                            <li className="tab">Resoluciones</li>
                                            <li className="tab">Actas del Consejo</li>
                                            <li className="tab">Convenios</li>
                                            <li className="tab">Trámites</li>
                                            <li className="tab">Plan estratégico 2019-2023</li>
                                            <li className="tab">Libro de Reclamaciones</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="8">
                                    <Tabs defaultActiveKey="2021" id="resoluciones-tab">
                                        <Tab className="pt-3" eventKey="2021" title="2021">
                                            <div>
                                                <div className="table-responsive">
                                                    <table className="bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    29/11/2020
                                                                </td>
                                                                <td>
                                                                    Resolución de Decanato N° 836 - D - FCB -2020
                                                                </td>
                                                                <td>
                                                                    Directiva de pago de subvención económica extraordinaria del personal admin. de la UNMSM
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        Ver documento
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    29/11/2020
                                                                </td>
                                                                <td>
                                                                    Resolución de Decanato N° 836 - D - FCB -2020
                                                                </td>
                                                                <td>
                                                                    Directiva de pago de subvención económica extraordinaria del personal admin. de la UNMSM
                                                                </td>
                                                                <td>
                                                                    <a href="#">
                                                                        Ver documento
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default transparencia
