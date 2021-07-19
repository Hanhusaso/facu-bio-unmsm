import React, { useState } from 'react'
import Link from 'next/link'
import Layout from "../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'

const directorio = () => {

    return (
        <>
            <Layout title="Directorio">
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
                                        <Breadcrumb.Item active>Directorio</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Directorio</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>

                        <Container className="mb-4">
                            <Row>
                                <Col md="3"></Col>
                                <Col md="6" className="">
                                    <div>
                                        <input className="search-input" placeholder="Buscar por palabra clave" type="text" />
                                    </div>
                                </Col>
                                <Col md="3"></Col>
                            </Row>
                        </Container>

                        <Container>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="10">
                                    <div>
                                        <div className="d-block d-md-flex align-items-center justify-content-between mb-3">
                                            <div className="mb-2 mb-md-0">
                                                <img className="icon mr-2 mb-1" src="/assets/img/iconos/telefono.svg" alt=""/>
                                                <span>
                                                    <b>UNMSM Central</b>: +(51) 619 7000
                                                </span>
                                            </div>
                                            <div>
                                                <a href="https://vicus.unmsm.edu.pe/" target="_blank" className="btn-green-bright">
                                                    Directorio general
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            3 resultados
                                        </div>
                                        <div className="table-responsive">
                                            <table className="striped w-100">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center">Unidad</th>
                                                        <th className="text-center">Cargo</th>
                                                        <th className="text-center">Nombre</th>
                                                        <th className="text-center">Anexo</th>
                                                        <th className="text-center">Email</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Decanato</td>
                                                        <td>Decano</td>
                                                        <td>Pablo Sergio Ramirez Roca</td>
                                                        <td>1501</td>
                                                        <td>decanobio@unmsm.edu.pe<br/>pramirezr@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Decanato</td>
                                                        <td>Secretaria</td>
                                                        <td>Carito Silvia Paredes Martínez</td>
                                                        <td>1502</td>
                                                        <td>decanobio@unmsm.edu.pe<br/>cparedesm_at@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Decanato</td>
                                                        <td>Asistente Secretaria de Decanato</td>
                                                        <td>Selene Belapatiño Quiroz</td>
                                                        <td>1509</td>
                                                        <td>asistentedecano.fcb@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>Mesa de Partes - Teléfono IP Virtual</td>
                                                        <td>Irma Huamán del Águila</td>
                                                        <td>410</td>
                                                        <td>mesadepartes.biologia@unmsm.edu.pe<br/>ihuamand@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dirección Administrativa</td>
                                                        <td>Directora</td>
                                                        <td>Liz Fabiola Elias Rolando</td>
                                                        <td>1532</td>
                                                        <td>dadaministrativa.biologia@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Direccion Administrativa</td>
                                                        <td>Secretaria</td>
                                                        <td>Natalia Aguado Méndez</td>
                                                        <td>1504</td>
                                                        <td>asistentediradministrativa.biologia@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Unidad de Posgrado</td>
                                                        <td>Director</td>
                                                        <td>César Augusto Aguilar Puntriano</td>
                                                        <td>1503</td>
                                                        <td>upg.biologia@unmsm.edu.pe<br/>caguilarp@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Unidad de Posgrado</td>
                                                        <td>Secretaria</td>
                                                        <td>Dora Aguilar Chávez</td>
                                                        <td>1510</td>
                                                        <td>upg.biologia@unmsm.edu.pe<br/>daguilarc_af@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>Mesa de Partes Virtual</td>
                                                        <td>Posgrado</td>
                                                        <td></td>
                                                        <td>mesadepartesupg.biologia@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Instituto de Investigación ICBAR</td>
                                                        <td>Directora</td>
                                                        <td>Irma Huamán del Águila</td>
                                                        <td>410</td>
                                                        <td>mesadepartes.biologia@unmsm.edu.pe<br/>ihuamand@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Instituto de Investigación ICBAR</td>
                                                        <td>Secretaría</td>
                                                        <td>Gisella Gonzáles Delgado</td>
                                                        <td>1506</td>
                                                        <td>dadaministrativa.biologia@unmsm.edu.pe<br/>dadaministrativa.biologia@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Unidad de Posgrado</td>
                                                        <td>Secretaría</td>
                                                        <td>Dora Aguilar Chávez</td>
                                                        <td>1510</td>
                                                        <td>upg.biologia@unmsm.edu.pe<br/>daguilarc_af@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Unidad de Servicios Generales, Operaciones y Mantenimiento</td>
                                                        <td>Jefa</td>
                                                        <td>Diana Beraún Mora</td>
                                                        <td>1533</td>
                                                        <td>dadaministrativa.biologia@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dirección Administrativa</td>
                                                        <td>Directora</td>
                                                        <td>Liz Fabiola Elias Rolando</td>
                                                        <td>1532</td>
                                                        <td>leliasr@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dirección Administrativa</td>
                                                        <td>Secretaria</td>
                                                        <td>Natalia Aguado Méndez</td>
                                                        <td>1504</td>
                                                        <td>asistentediradministrativa.biologia@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Unidad de Posgrado</td>
                                                        <td>Director</td>
                                                        <td>César Augusto Aguilar Puntriano</td>
                                                        <td>1503</td>
                                                        <td>upg.biologia@unmsm.edu.pe<br/>caguilarp@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Unidad de Posgrado</td>
                                                        <td>Secretaria</td>
                                                        <td>Dora Aguilar Chávez</td>
                                                        <td>1510</td>
                                                        <td>upg.biologia@unmsm.edu.pe<br/>daguilarc_af@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>Mesa de Partes Virtual</td>
                                                        <td>Posgrado</td>
                                                        <td>1510</td>
                                                        <td>mesadepartesupg.biologia@unmsm.edu.pe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Unidad de Servicios Generales, Operaciones y Mantenimiento	</td>
                                                        <td>Jefa</td>
                                                        <td>Diana Beraún Mora</td>
                                                        <td>1533</td>
                                                        <td>dadaministrativa.biologia@unmsm.edu.pe</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
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

export default directorio
