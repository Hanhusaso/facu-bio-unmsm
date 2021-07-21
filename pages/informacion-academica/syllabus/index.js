import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb, Spinner} from 'react-bootstrap'
import { size } from "lodash";
import {getSyllabusByIdInformacionAcademicaApi, getInformacionAcademicaByUrlApi} from '../../api/informacion-academica';

const syllabus = () => {

    const { query } = useRouter();

    const currentUrlInformacionAcademica = query.nombre;
    const [syllabus, setSyllabus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sinResultados, setSinResultados] = useState(false);
    const [informacionAcademica, setInformacionAcademica] = useState(false);
    const [palabra, setPalabra] = useState("");

    const onChangePalabra = (event) => {
        setPalabra(event.target.value);
    };

    useEffect(() => {
        if (!query) {
            return;
        }
        (async () => {
          setLoading(true);
          setSinResultados(false);
          const response = await getInformacionAcademicaByUrlApi(currentUrlInformacionAcademica);
          if(size(response) == 0){
            // setSinResultados(true);
          }
          else{
            setInformacionAcademica(response[0]);
            const response1 = await getSyllabusByIdInformacionAcademicaApi(response[0].id, palabra);
            setSyllabus(response1);
            setLoading(false);
            if(size(response1) == 0){
              setSinResultados(true);
            }
            else{
              setSinResultados(false);
            }
          }
          window.scrollTo(0, 0);
        })();
    }, [query, palabra]);


    return (
        <>
            <Layout title="Syllabus">
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
                                        <Breadcrumb.Item active>{informacionAcademica.nombre}</Breadcrumb.Item>
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
                                    <div className="title-page text-center">{informacionAcademica.nombre}</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4">
                            <Row>
                                <Col md="3"></Col>
                                <Col md="6">
                                    <div>
                                        <input className="search-input" placeholder="Busca por un curso o docente" type="text" onChange={onChangePalabra} />
                                    </div>
                                </Col>
                                <Col md="3"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="7" lg="8">
                                    {loading ? (
                                            <>
                                            <div className="d-flex align-items-center justify-content-center my-5">
                                                <div className="d-inline-flex flex-column justify-content-center align-items-center">
                                                    <Spinner animation="border" role="status" className="mb-2"/>
                                                    <span>Buscando registros...</span>
                                                </div>
                                            </div>
                                            </>
                                    ) : !sinResultados ? (
                                        <div>
                                            <div className="divisor my-3"></div>
                                                {syllabus.map((syllabu, index) => (
                                                    <div key={index} className="block-divider mb-3 position-relative">
                                                        <Link href={`/informacion-academica/syllabus/curso/?nombre=${syllabu.url_nombre}`}>
                                                            <a>
                                                                <h3 className="title">{syllabu.nombre}</h3>
                                                            </a>
                                                        </Link>
                                                        
                                                        <p className="mb-3">Docente: {syllabu.docente}</p>
                                                        <div className="wrapper-icon-download">
                                                            <div>
                                                                <Link href={syllabu.url_documento}>
                                                                    <a target="_blank">
                                                                        <img src="/assets/img/iconos/descarga.svg" alt=""/>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            // <SinResultados />
                                            'No se encontraron registros'
                                            )
                                    }
                                    {/* <div>
                                        <div className="divisor my-3"></div>
                                        <div className="block-divider mb-3 position-relative">
                                            <h3 className="title">Biología y parasitología I</h3>
                                            <p className="mb-3">Docente: Julio Galarza Perez</p>
                                            <div className="wrapper-icon-download">
                                                <div>
                                                    <img src="/assets/img/iconos/descarga.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </Col>
                                <Col md="3" lg="2">
                                    <aside>
                                        <div className="d-flex mb-3">
                                            <h2 className="subtitle-green mr-1 mb-0">Noticias</h2>
                                            <a href="#" className="d-inline-block">
                                                <img src="/assets/img/iconos/boton_vermas.png"/>
                                            </a>
                                        </div>
                                        <div>
                                            <div className="card-bio mb-3">
                                                <div className="part-img position-relative">
                                                    <div className="position-relative">
                                                        <img className="w-100 img-fluid" src="/assets/img/noticias/noticia2.png"></img>
                                                        <div className="dark-filter"></div>
                                                    </div>
                                                    <div className="badge-tag">
                                                        Tecnologia
                                                    </div>
                                                </div>
                                                <div className="part-text">
                                                    <p className="title-card mb-0">
                                                        Dos científicas ganan el Premio Nobel de Química 2020 por “tijeras genéticas” CRISPR-Cas9
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card-bio mb-3">
                                                <div className="part-img position-relative">
                                                    <div className="position-relative">
                                                        <img className="w-100 img-fluid" src="/assets/img/noticias/noticia3.png"></img>
                                                        <div className="dark-filter"></div>
                                                    </div>
                                                    <div className="badge-tag">
                                                        Ciencia
                                                    </div>
                                                </div>
                                                <div className="part-text">
                                                    <p className="title-card mb-0">
                                                        El objetivo de nuestro proyecto es ir en camino a producir clones de alpacas
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card-bio mb-3">
                                                <div className="part-img position-relative">
                                                    <div className="position-relative">
                                                        <img className="w-100 img-fluid" src="/assets/img/noticias/noticia4.png"></img>
                                                        <div className="dark-filter"></div>
                                                    </div>
                                                    <div className="badge-tag">
                                                        Facultad
                                                    </div>
                                                </div>
                                                <div className="part-text">
                                                    <p className="title-card mb-0">
                                                        ¡La FCB ya cuenta oficialmente con un nuevo y moderno pabellón!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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

export default syllabus
