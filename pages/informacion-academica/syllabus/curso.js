import React , { useState , useEffect } from 'react'
import { Loader } from 'semantic-ui-react'
import { useRouter } from "next/router";

// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb, Spinner} from 'react-bootstrap'
import { size } from "lodash";
import {getSyllabuByUrlApi} from '../../api/informacion-academica';
import NoticiasExtra from "../../../components/NoticiasExtra"

const curso = () => {

    const { query } = useRouter();

    const currentUrlSyllabu = query.nombre;
    const [loading, setLoading] = useState(true);
    const [sinResultados, setSinResultados] = useState(false);
    const [syllabu, setSyllabu] = useState(false);

    useEffect(() => {
        if (!query) {
            return;
        }
        (async () => {
          setLoading(true);
          setSinResultados(false);
          const response = await getSyllabuByUrlApi(currentUrlSyllabu);
          if(size(response) == 0){
            // setSinResultados(true);
          }
          else{
            setSyllabu(response[0]);
            setLoading(false);
            // setSinResultados(false);
          }
          window.scrollTo(0, 0);
        })();
    }, [query]);

    return (
        <>
            <Layout title={syllabu.nombre}>
                {loading ? (
                        <>
                        <div className="d-flex align-items-center justify-content-center my-5">
                            <div className="d-inline-flex flex-column justify-content-center align-items-center">
                                <Spinner animation="border" role="status" className="mb-2"/>
                                <span>Buscando formación...</span>
                            </div>
                        </div>
                        </>
                    ) : !sinResultados ? (
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
                                                <li className="breadcrumb-item">
                                                    <Link href="/informacion-academica">
                                                        <a role="button">Información académica</a>
                                                    </Link>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <Link href="/informacion-academica/syllabus">
                                                        <a role="button">Syllabus</a>
                                                    </Link>
                                                </li>
                                                <Breadcrumb.Item active>{syllabu.nombre}</Breadcrumb.Item>
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
                                            <div className="title-page text-center">{syllabu.nombre}</div>
                                        </Col>
                                        <Col md="1"></Col>
                                    </Row>
                                </Container>
                                <Container className="mb-3">
                                    <Row>
                                        <Col md="1" lg="1"></Col>
                                        <Col md="7" lg="8">
                                            <p className="mb-0">
                                                Docente: {syllabu.docente}
                                            </p>
                                        </Col>
                                        <Col md="4" lg="3"></Col>
                                    </Row>
                                </Container>
                                <Container>
                                    <Row>
                                        <Col md="1" lg="1"></Col>
                                        <Col md="7" lg="8">
                                            <div>
                                                <div className="mb-4">
                                                    {/* <embed src="/assets/archivos/malla_curricular_2020.pdf" width="100%" height="700px"/> */}
                                                    <object data={syllabu.url_documento} type="application/pdf" width="100%" height="700px"> 
                                                        <a href={syllabu.url_documento}>
                                                            <img className="mr-2" src="/assets/img/iconos/descarga.svg" alt=""/>
                                                            <span className="sub-title-dark">Descargar</span>
                                                        </a>
                                                    </object>
                                                </div>
                                                <div className="section-compartir d-none d-sm-block mb-3">
                                                    <div className="d-inline-block font-weight-bold mr-3">
                                                        Compartir vía:
                                                    </div>
                                                    <div className="icons">
                                                        <a href="#" className="d-inline-block">
                                                            <img src="/assets/img/iconos/email.svg"/>
                                                        </a>
                                                        <a href="#" className="d-inline-block">
                                                            <img src="/assets/img/iconos/whatsapp.svg"/>
                                                        </a>
                                                        <a href="#" className="d-inline-block">
                                                            <img src="/assets/img/iconos/facebook.svg"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="3" lg="2">
                                            <aside>
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
                    ) : (
                        ''
                )}
            </Layout>
        </>
    )
}

export default curso
