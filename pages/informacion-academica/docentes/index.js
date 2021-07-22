import React, { useState, useEffect } from "react";
import { Pagination, Loader } from 'semantic-ui-react'
import { useRouter } from "next/router";
// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb, Spinner} from 'react-bootstrap'
import { size } from "lodash";
import {getDocenteByIdInformacionAcademicaApi, getInformacionAcademicaByUrlApi, countDocenteByIdInformacionAcademicaApi} from '../../api/informacion-academica';
import {getNoticiasUltimas2Api, getNoticiasSubcategoriasApi} from '../../api/noticias';
import * as HiIcons from "react-icons/hi";

const limitPerPage = 10;

const docentes = () => {

    const { query } = useRouter();

    const currentUrlInformacionAcademica = query.nombre;
    const [paginador, setPaginador] = useState("");
    const [page, setPage] = useState(0);
    const [numberPage, setNumberPage] = useState(1);
    const [docentes, setDocentes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sinResultados, setSinResultados] = useState(false);
    const [informacionAcademica, setInformacionAcademica] = useState(false);
    const [palabra, setPalabra] = useState("");
    const [noticiasUltimas, setNoticiasUltimas] = useState([]);
    const [noticiasSubcategorias, setNoticiasSubcategorias] = useState([]);

    const onPageChange = (event, data) => {
        setPage((data.activePage-1)*10);
        setNumberPage(data.activePage);
    };

    const onChangePalabra = (event) => {
        setPalabra(event.target.value);
        setPage(0);
        setNumberPage(1);
    };

    useEffect(() => {
        if (!query) {
            return;
        }
        (async () => {
            const response3 = await getInformacionAcademicaByUrlApi(currentUrlInformacionAcademica);
            if(size(response3) == 0){
                // setSinResultados(true);
                setPaginador('');
            }
            else{
                const response1 = await countDocenteByIdInformacionAcademicaApi(response3[0].id, palabra);
                setPaginador('');
                setPaginador(<Pagination defaultActivePage={numberPage} totalPages={Math.ceil(response1/10.0)} onPageChange={onPageChange} />);   
            }    
        })();
        (async () => {
          setLoading(true);
          setSinResultados(false);
          const response = await getInformacionAcademicaByUrlApi(currentUrlInformacionAcademica);
          if(size(response) == 0){
            // setSinResultados(true);
          }
          else{
            setInformacionAcademica(response[0]);
            const response2 = await getDocenteByIdInformacionAcademicaApi(limitPerPage, page, response[0].id, palabra);
            setDocentes(response2);
            const response_subcategorias = await getNoticiasSubcategoriasApi();
            setNoticiasSubcategorias(response_subcategorias);
            const response_noticias_ultimas = await getNoticiasUltimas2Api();
            setNoticiasUltimas(response_noticias_ultimas);
            setLoading(false);
            if(size(response2) == 0){
              setSinResultados(true);
            }
            else{
              setSinResultados(false);
            }
          }
          window.scrollTo(0, 0);
        })();
    }, [page, query, palabra]);

    return (
        <>
            <Layout title="Docentes">
                <div>
                    <div>
                        <Container>
                            <Row>
                                <Col sm="1"></Col>
                                <Col className="">
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
                                <Col sm="1"></Col>
                            </Row>
                        </Container>
                    </div>
                    <div>
                        <Container className="mb-3">
                            <Row>
                                <Col sm="1"></Col>
                                <Col className="">
                                    <div className="title-page text-center">{informacionAcademica.nombre}</div>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4">
                            <Row>
                                <Col sm="3"></Col>
                                <Col>
                                    <div>
                                        <input className="search-input" placeholder="Busca por un docente por nombre" type="text" onChange={onChangePalabra} />
                                    </div>
                                </Col>
                                <Col sm="3"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col sm="1"></Col>
                                <Col sm="8">
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
                                                {docentes.map((docente, index) => (
                                                    <div key={index} className="block-divider mb-3 pb-2 position-relative">
                                                        <h3 className="title">{docente.nombre}</h3>
                                                        <p className="mb-2">
                                                            <span className="mr-2">Documentación:</span>
                                                            <a href={docente.link_resolucion_rectoral} target="_blank" className="d-inline-block color-inherit mr-3">
                                                                <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                                <span className="">Resolución rectoral</span>
                                                            </a>
                                                            <a href={docente.link_hoja_vida} target="_blank" className="d-inline-block color-inherit mr-3">
                                                                <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                                <span className="">Hoja de vida</span>
                                                            </a>
                                                        </p>
                                                        <p className="mb-2">
                                                            <span className="mr-2">Investigación:</span>
                                                            <a href={docente.link_rais} target="_blank" className="d-inline-block color-inherit mr-2">
                                                                <span className="mr-1">RAIS</span>
                                                                <HiIcons.HiExternalLink  className="mb-1 icon"/>
                                                            </a>
                                                            <a href={docente.link_siis} target="_blank" className="d-inline-block color-inherit mr-2">
                                                                <span className="mr-1">SIIS</span>
                                                                <HiIcons.HiExternalLink  className="mb-1 icon"/>
                                                            </a>
                                                        </p>
                                                        <p className="mb-2">
                                                            <span className="mr-2">Contacto:</span>
                                                            <img className="icon mr-2" src="/assets/img/iconos/correo.svg" alt=""/>
                                                            <span className="text-break">{docente.contacto}</span>
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
                                        <div className="block-divider mb-3 pb-2 position-relative">
                                            <h3 className="title">Mg. Julio  Montero Cáceres | Docente principal   </h3>
                                            <p className="mb-2">
                                                <span className="mr-2">Documentación:</span>
                                                <a href="#" className="d-inline-block color-inherit mr-3">
                                                    <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                    <span className="">Resolución rectoral</span>
                                                </a>
                                                <a href="#" className="d-inline-block color-inherit mr-3">
                                                    <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                    <span className="">Hoja de vida</span>
                                                </a>
                                            </p>
                                            <p className="mb-2">
                                                <span className="mr-2">Investigación:</span>
                                                <a href="#" className="d-inline-block color-inherit mr-2">
                                                    <span className="mr-1">RAIS</span>
                                                    <HiIcons.HiExternalLink  className="mb-1 icon"/>
                                                </a>
                                                <a href="#" className="d-inline-block color-inherit mr-2">
                                                    <span className="mr-1">SIIS</span>
                                                    <HiIcons.HiExternalLink  className="mb-1 icon"/>
                                                </a>
                                            </p>
                                            <p className="mb-2">
                                                <span className="mr-2">Contacto:</span>
                                                <img className="icon mr-2" src="/assets/img/iconos/correo.svg" alt=""/>
                                                <span className="text-break">laucastivas@unmsm.edu.pe</span>
                                            </p>
                                        </div>
                                    </div> */}
                                </Col>
                                <Col sm="2">
                                    <aside>
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
                                <Col sm="1"></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default docentes
