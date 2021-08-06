import React , { useEffect } from 'react'
import Layout from "../../../../components/Layout"
import NoticiasExtra from '../../../../components/NoticiasExtra'

import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'

import { useWindowSize } from '../../../../utils/useWindowSize'

const index = () => {

    const { width, height } = useWindowSize();

    return (
        <>
            <Layout title="Laboratorio de Equipamiento Especializado">
                <div>
                    <div>
                        <Container>
                            <Row>
                                <Col md="1"></Col>
                                <Col>
                                    <Breadcrumb>
                                        <li className="breadcrumb-item">
                                            <Link href="/">
                                                <a role="button">Inicio</a>
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link href="/comunidad/conoce-la-facultad">
                                                <a role="button">Comunidad: Conoce la facultad</a>
                                            </Link>
                                        </li>
                                        <Breadcrumb.Item active>Laboratorio de Equipamiento Especializado</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Laboratorio de Equipamiento Especializado</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                    </div>
                    {/* IMAGE */}
                    <div className="mb-4">
                        <img className="w-100" src="/assets/img/comunidad/laboratorio-especializado/banner-laboratorio-equipos-especializados-ciencias-biologicas-unmsm.png" alt="" />
                    </div>

                    <div>
                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="7" lg="8">
                                    <div className="mb-3">
                                        <p>
                                            Bienvenidos al Laboratorio de Equipamiento Especializado, es un laboratorio dedicado a la innovación, aplicación y tecnología ubicado en la Facultad de Ciencias Biológicas de la Universidad Nacional Mayor de San Marcos. Este Laboratorio brinda servicios de Microscopía Electrónica de Barrido, Microscopia de Epifluorescencia, Cromatografía Líquida de alto performance/rendimiento, Liofilización, Metalización, desecado a punto crítico, esterilización por sonicador y producción de agua ultrapura tipo III (para lavar materiales de vidrio, para baño María) y tipo I (la mejor calidad de agua para dilución de reactivos). El agua tipo I pasa a través de un filtro con poros de 0.22um.
                                        </p>
                                        <p>
                                            Todos están invitados a echar un vistazo este Laboratorio y solicitar la información que necesite, precios cotizaciones o información en general.
                                        </p>
                                        <a href="https://www.facebook.com/LEE.FCB.UNMSM" target="_blank">
                                            https://www.facebook.com/LEE.FCB.UNMSM
                                        </a>
                                    </div>
                                </Col>
                                <Col md="3" lg="2">
                                    <aside>
                                        <div className="block-interest-links mb-3">
                                            <p className="font-weight-bold mb-2 text-center">
                                                ¿Te gustaría participar en un grupo de investigación?
                                            </p>
                                            <ul className="nav flex-column">
                                                <li className="mb-2 text-center font-weight-bold">
                                                    <Link href="/investigacion/grupos-investigacion">
                                                        <a>
                                                            Infórmate aquí
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <NoticiasExtra 
                                            idNoticiaDetalle = {""} 
                                        />
                                    </aside>
                                </Col>
                                <Col md="1" lg="1"></Col>
                            </Row>
                        </Container>
                    </div>


                    
                </div>

            </Layout>
        </>
    )
}

export default index
