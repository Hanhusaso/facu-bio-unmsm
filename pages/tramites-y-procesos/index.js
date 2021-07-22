import React, { useState, useEffect } from "react";
import { Pagination, Loader } from 'semantic-ui-react'

// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from "../../components/Layout"
import {Row, Col, Container, Breadcrumb, Spinner} from 'react-bootstrap'
import { AiFillContainer } from 'react-icons/ai'
import { size } from "lodash";
import {countTramitesProcesosApi, getTramitesProcesosApi} from '../api/tramites-procesos';
import {getNoticiasUltimas2Api, getNoticiasSubcategoriasApi} from '../api/noticias';
import j from "jquery";

const limitPerPage = 6;

const TramitesProcesos = () => {

    const [pages, setPages] = useState([
        "pag1",
        "pag2",
        "pag3",
        "pag3",
        "pag3",
        "pag3",
        "pag3",
        "pag3",
    ])

    const [paginador, setPaginador] = useState("");
    const [page, setPage] = useState(0);
    const [numberPage, setNumberPage] = useState(1);
    const [tramitesProcesos, setTramitesProcesos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sinResultados, setSinResultados] = useState(false);
    const [palabra, setPalabra] = useState("");
    const [dirigidosA, setDirigidosA] = useState([]);
    const [dirigidoA, setDirigidoA] = useState("");
    const [frecuentes, setFrecuentes] = useState([]);
    const [frecuente, setFrecuente] = useState("");
    const [noticiasUltimas, setNoticiasUltimas] = useState([]);
    const [noticiasSubcategorias, setNoticiasSubcategorias] = useState([]);

    function removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
        arr.splice( i, 1 );
    }

    function capitalizarPrimeraLetra(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const onPageChange = (event, data) => {
        setPage((data.activePage-1)*6);
        setNumberPage(data.activePage);
    };

    const onChangePalabra = (event) => {
        setPalabra(event.target.value);
        setPage(0);
        setNumberPage(1);
    };

    const onChangeDirigidoA = (event) => {
        var encontrado = false;
        for(var i=0; i<dirigidosA.length; i++){
            if(dirigidosA[i] == event.target.value){
                encontrado = true;
            }
        }
        if(encontrado){
            removeItemFromArr(dirigidosA, event.target.value);
        }
        else{
            dirigidosA.push(event.target.value);
        }
        
        setDirigidoA(Math.random());
        setPage(0);
        setNumberPage(1);
    };

    const onChangeFrecuente = (event) => {
        var encontrado = false;
        for(var i=0; i<frecuentes.length; i++){
            if(frecuentes[i] == event.target.value){
                encontrado = true;
            }
        }
        if(encontrado){
            removeItemFromArr(frecuentes, event.target.value);
        }
        else{
            frecuentes.push(event.target.value);
        }
        
        setFrecuente(Math.random());
        setPage(0);
        setNumberPage(1);
    };

    useEffect(() => {
        setTimeout(function(){ 
            j("input[type=checkbox]").prop("checked", false);
        }, 10);
    }, [])

    useEffect(() => {
        (async () => {
            if(palabra == ''){
                const response1 = await countTramitesProcesosApi(palabra, dirigidosA, frecuentes);
                setPaginador('');
                setPaginador(<Pagination defaultActivePage={numberPage} totalPages={Math.ceil(response1/6.0)} onPageChange={onPageChange} />); 
            }
            else{
                const response1 = await countTramitesProcesosApi(palabra, [], []);
                setPaginador('');
                setPaginador(<Pagination defaultActivePage={numberPage} totalPages={Math.ceil(response1/6.0)} onPageChange={onPageChange} />);
            }
        })();
        (async () => {
          setLoading(true);
          setSinResultados(false);
          if(palabra == ''){
            const response = await getTramitesProcesosApi(limitPerPage, page, palabra, dirigidosA, frecuentes);
            setTramitesProcesos(response);
            const response_subcategorias = await getNoticiasSubcategoriasApi();
            setNoticiasSubcategorias(response_subcategorias);
            const response_noticias_ultimas = await getNoticiasUltimas2Api();
            setNoticiasUltimas(response_noticias_ultimas);
            setLoading(false);
            if(size(response) == 0){
              setSinResultados(true);
            }
            else{
              setSinResultados(false);
            }
            window.scrollTo(0, 0);
          }
          else{
            const response = await getTramitesProcesosApi(limitPerPage, page, palabra, [], []);
            setTramitesProcesos(response);
            const response_subcategorias = await getNoticiasSubcategoriasApi();
            setNoticiasSubcategorias(response_subcategorias);
            const response_noticias_ultimas = await getNoticiasUltimas2Api();
            setNoticiasUltimas(response_noticias_ultimas);
            setLoading(false);
            if(size(response) == 0){
              setSinResultados(true);
            }
            else{
              setSinResultados(false);
            }
            window.scrollTo(0, 0);
          }
        })();
    }, [page, palabra, dirigidoA, frecuente]);

    return (
        <>
            <Layout title="Trámites y procesos">
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
                                        <Breadcrumb.Item active>Trámites y procesos</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Trámites y procesos</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>

                        <Container className="mb-4">
                            <Row>
                                <Col md="3"></Col>
                                <Col md="6">
                                    <div>
                                        <input className="search-input" placeholder="Matrícula, bachiller, sustentación de tesis, etc..." type="text" onChange={onChangePalabra} />
                                    </div>
                                </Col>
                                <Col md="3"></Col>
                            </Row>
                        </Container>

                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="3" lg="2">
                                    <div className="filters-wrapper">
                                        <div className="mb-3">
                                            <div className="font-weight-bold mb-2">Dirigido a:</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="dirigido-ingresantes" name="dirigido-ingresantes" value="ingresantes" onChange={onChangeDirigidoA} />
                                                    <label className="mb-0" for="dirigido-ingresantes"><span className="checkmark"></span> Ingresantes</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="dirigido-pregrado" name="dirigido-pregrado" value="pregrado" onChange={onChangeDirigidoA} />
                                                    <label className="mb-0" for="dirigido-pregrado"><span className="checkmark"></span> Pregrado</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="dirigido-posgrado" name="dirigido-posgrado" value="posgrado" onChange={onChangeDirigidoA} />
                                                    <label className="mb-0" for="dirigido-posgrado"><span className="checkmark"></span> Posgrado</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="dirigido-egresados" name="dirigido-egresados" value="egresados" onChange={onChangeDirigidoA} />
                                                    <label className="mb-0" for="dirigido-egresados"><span className="checkmark"></span> Egresados</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="dirigido-docentes" name="dirigido-docentes" value="docentes" onChange={onChangeDirigidoA} />
                                                    <label className="mb-0" for="dirigido-docentes"><span className="checkmark"></span> Docentes</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-weight-bold mb-2">Frecuentes:</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="frecuentes-matricula" name="frecuentes-matricula" value="matricula" onChange={onChangeFrecuente} />
                                                    <label className="mb-0" for="frecuentes-matricula"><span className="checkmark"></span> Matrícula</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="frecuentes-titulos-grados" name="frecuentes-titulos-grados" value="titulos y grados" onChange={onChangeFrecuente} />
                                                    <label className="mb-0" for="frecuentes-titulos-grados"><span className="checkmark"></span> Títulos y grados</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="frecuentes-constancias" name="frecuentes-constancias" value="constancias" onChange={onChangeFrecuente} />
                                                    <label className="mb-0" for="frecuentes-constancias"><span className="checkmark"></span> Constancias</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
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
                                    ) : !sinResultados ? (
                                        <div>
                                            <div className="divisor my-3"></div>
                                                {tramitesProcesos.map((tramites_procesos, index) => (
                                                    <div key={index} className="block-divider mb-3">
                                                        <Link href={`/tramites-y-procesos/tramite-proceso/?nombre=${tramites_procesos.url_tramite}`}>
                                                            <a className="title">{tramites_procesos.nombre_tramite} 
                                                                {tramites_procesos.dirigido_a.split(" || ").map((dirigido_a, index) => (
                                                                    <span key={index} style={{color: '#56756B'}}> | {capitalizarPrimeraLetra(dirigido_a)}</span>
                                                                ))}
                                                            </a>
                                                        </Link>
                                                        <p className="mb-3">
                                                            {tramites_procesos.descripcion}
                                                        </p>
                                                    </div>
                                                ))}
                                                {paginador}
                                            </div>
                                        ) : (
                                            // <SinResultados />
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
                                <Col md="3" lg="2">
                                    <aside>
                                        <div className="block-interest-links mb-4">
                                            <p className="font-weight-bold mb-2 text-center">
                                                ¿Tienes dudas sobre algún trámite o no encuentras la información que necesitas?
                                            </p>
                                            <ul className="nav flex-column">
                                                <li className="mb-2 text-center font-weight-bold">
                                                    <Link href="/tramites-y-procesos/preguntas-frecuentes">
                                                        <a>
                                                            Ir a preguntas frecuentes
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-flex mb-3">
                                            <h2 className="subtitle-green mr-1 mb-0">Noticias</h2>
                                            <a href="/noticias" className="d-inline-block">
                                                <img src="/assets/img/iconos/boton_vermas.png"/>
                                            </a>
                                        </div>
                                        <div>
                                            {noticiasUltimas.map((noticia_ultima, index) =>(
                                                <div key={index} className="card-bio mb-3">
                                                    <a href={`/noticias/noticia?titulo=${noticia_ultima.url_titulo}`} style={{color: '#56756B'}}>
                                                        <div className="part-img position-relative">
                                                            <div className="position-relative">
                                                                <img className="w-100 img-fluid" src={noticia_ultima.imagen_previsualizacion ? noticia_ultima.imagen_previsualizacion[0].url : ''}></img>
                                                                <div className="dark-filter"></div>
                                                            </div>
                                                            <div className="badge-tag">
                                                            {noticiasSubcategorias[noticia_ultima.id_categoria_subcategoria.id_subcategoria-1].nombre}
                                                            </div>
                                                        </div>
                                                        <div className="part-text">
                                                            <p className="title-card mb-0">
                                                                {noticia_ultima.titulo}
                                                            </p>
                                                        </div>
                                                    </a>
                                                </div> 
                                            ))}
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

export default TramitesProcesos
