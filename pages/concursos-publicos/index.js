import React, { useState, useEffect } from "react";
import { Pagination, Loader } from 'semantic-ui-react'

import Link from 'next/link'
import Layout from "../../components/Layout"
import {Row, Col, Container, Breadcrumb, Spinner} from 'react-bootstrap'
import {countTramitesProcesosApi, getTramitesProcesosApi} from '../api/tramites-procesos';

import concursos_publicos from '../../data/concursos-publicos.json';

const limitPerPage = 6;

const ConcursosPublicos = () => {

    // const [paginador, setPaginador] = useState("");
    // const [page, setPage] = useState(0);
    // const [numberPage, setNumberPage] = useState(1);
    // const [tramitesProcesos, setTramitesProcesos] = useState([]);
    // const [countTramitesProcesos, setCountTramitesProcesos] = useState(0);
    const [loading, setLoading] = useState(false);
    // const [sinResultados, setSinResultados] = useState(false);
    // const [palabra, setPalabra] = useState("");

    const [pagina, setPagina] = useState(1);
    const concursosPorPagina = 5;
    const indiceUltimoConcurso = pagina * concursosPorPagina;
    const indicePrimerConcurso = indiceUltimoConcurso - concursosPorPagina;
    const concursosActuales = concursos_publicos.slice(indicePrimerConcurso, indiceUltimoConcurso);
    const totalPaginas = Math.ceil(concursos_publicos.length / concursosPorPagina);
    const totalResultados = concursos_publicos.length;

    const onPageChange = (event, data) => {
        setPagina(data.activePage);
    };

    function capitalizarPrimeraLetra(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const onChangePalabra = (event) => {
        setPalabra(event.target.value);
        setPage(0);
        setNumberPage(1);
    };

    return (
        <>
            <Layout title="Concursos públicos">
                <div>
                    <div>
                        <Container>
                            <Row>
                                <Col md="1"></Col>
                                <Col className="">
                                    <Breadcrumb>
                                        {/* <Breadcrumb.Item> */}
                                        <li className="breadcrumb-item">
                                            <Link href="/">
                                                <a role="button">Inicio</a>
                                            </Link>
                                        </li>
                                        {/* </Breadcrumb.Item> */}
                                        <Breadcrumb.Item active>Concursos públicos</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Concursos públicos</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>

                        {/* <Container className="mb-4">
                            <Row>
                                <Col md="3"></Col>
                                <Col md="6">
                                    <div>
                                        <input className="search-input" placeholder="Matrícula, bachiller, sustentación de tesis, etc..." type="text" onChange={onChangePalabra} />
                                    </div>
                                </Col>
                                <Col md="3"></Col>
                            </Row>
                        </Container> */}

                        <Container>
                            <Row>
                                <Col md="4" lg="3"></Col>
                                <Col md="4" lg="6">
                                    {loading ? (
                                            <>
                                            <div className="d-flex align-items-center justify-content-center my-5">
                                                <div className="d-inline-flex flex-column justify-content-center align-items-center">
                                                    <Spinner animation="border" role="status" className="mb-2"/>
                                                    <span>Buscando registros...</span>
                                                </div>
                                            </div>
                                            </>
                                    ) : concursosActuales ? (
                                        <div>
                                            <div className="mb-2">{totalResultados} {totalResultados == 1 ? 'resultado' : 'resultados'}</div> 
                                            <div className="divisor my-3"></div>
                                                {concursosActuales.map((concurso, index) => (
                                                    <div key={index} className="block-divider mb-3">
                                                            <a className="title mb-1 d-block" href={concurso.link} target="_blank" rel="noopener noreferrer">
                                                                {capitalizarPrimeraLetra(concurso.titulo)}
                                                            </a>
                                                        <p className="mb-3">
                                                            Última actualización: {concurso.ultima_actualizacion}
                                                        </p>
                                                    </div>
                                                ))}
                                                <Pagination
                                                    defaultActivePage={pagina}
                                                    totalPages={totalPaginas}
                                                    onPageChange={onPageChange}
                                                />
                                        </div>
                                        ) : (
                                            'No se encontraron registros'
                                            )
                                    }
                                    {/* <div>
                                        <div className="divisor my-3"></div>
                                        {pages.map(post => (
                                            <div className="block-divider mb-3">
                                                <Link href="/tramites-y-procesos/anulacion-matricula">
                                                    <a className="title">Anulación de matrícula | Pregrado</a>
                                                </Link>
                                                <p className="mb-3">
                                                    obortis quam placerat lobortis tristique aliquet netus. Bibendum blandit morbi tristique metus.Eu suspendisse cras magna scelerisque penatibus viverra aliquam. Risus morbi in facilisi est leo eget ullamcorper. Amet tempus fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper purus ue aliquet netus. Bibendum blandit morbi tristique metus..
                                                </p>
                                            </div>
                                        ))}
                                    </div> */}
                                </Col>
                                <Col md="4" lg="3"></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ConcursosPublicos
