import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout"
// import Tabs from "../../../components/Tabs/vanillaTabs"
import {Row, Col, Container, Breadcrumb, Accordion, Spinner } from 'react-bootstrap'
import Link from 'next/link'
import { size } from "lodash";
import { getPreguntasFrecuentesApi } from '../../api/preguntas-frecuentes';
import {getNoticiasUltimas2Api, getNoticiasSubcategoriasApi} from '../../api/noticias';

const preguntasFrecuentes = () => {

    const [preguntasFrecuentes, setPreguntasFrecuentes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sinResultados, setSinResultados] = useState(false);
    const [palabra, setPalabra] = useState("");
    const [noticiasUltimas, setNoticiasUltimas] = useState([]);
    const [noticiasSubcategorias, setNoticiasSubcategorias] = useState([]);

    const onChangePalabra = (event) => {
        setPalabra(event.target.value);
    };

    useEffect(() => {
        (async () => {
            setLoading(true);
            setSinResultados(false);
          
            const response = await getPreguntasFrecuentesApi(palabra);
            setPreguntasFrecuentes(response);
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
        })();
    }, [palabra]);

    return (
        <>
            <Layout title="Preguntas Frecuentes">
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
                                        {/* <Breadcrumb.Item active>Formación académica</Breadcrumb.Item> */}
                                        <li className="breadcrumb-item">
                                            <Link href="/tramites-y-procesos">
                                                <a role="button">Trámites y procesos</a>
                                            </Link>
                                        </li>
                                        <Breadcrumb.Item active>Preguntas frecuentes</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Preguntas frecuentes</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4">
                            <Row>
                                <Col md="3"></Col>
                                <Col md="6" className="">
                                    <div>
                                        <input className="search-input" placeholder="Busca por palabra clave" type="text" onChange={onChangePalabra} />
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
                                        <Accordion>
                                            {preguntasFrecuentes.map((pregunta_frecuente, index) => (
                                                <div key={index} className="mb-3">
                                                    <Accordion.Toggle className="toggle-accordion" eventKey={index+1}>
                                                        {pregunta_frecuente.nombre}
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey={index+1}>
                                                        <div className="pt-3">
                                                            <p className="mb-0">
                                                                {pregunta_frecuente.descripcion}
                                                            </p>
                                                        </div>
                                                    </Accordion.Collapse>
                                                </div>
                                            ))}  
                                            {/* <div className="mb-3">
                                                <Accordion.Toggle className="toggle-accordion" eventKey="1">
                                                    ¿Hasta cuando tiempo después del inicio de clases puedo anular mi matrícula?
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="1">
                                                    <div className="pt-3">
                                                        <p className="mb-0">
                                                            La anulación procede para quitar tu matrícula, luego de hacer este trámite Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur velit convallis enim, in orci vestibulum mauris. Duis arcu arcu adipiscing urna pulvinar congue nisi, maecenas. Malesuada et, in faucibus dignissim leo. Rhoncus scelerisque sed tempor porttitor at vel eu eget.maecenas. Malesuada et, in faucibus dignissim leo. Rhoncus scelerisque sed tempor porttitor at vel eu eget.maecenas. Malesuada et, in faucibus dignissim leo. Rhoncus scelerisque sed tempor porttitor at vel eu eget.maecenas. Malesuada et, in faucibus dignissim leo. Rhoncus scelerisque sed tempor porttitor at vel eu eget.maecenas. Malesuada et, in faucibus dignissim leo. Rhoncus scelerisque sed tempor porttitor at vel eu eget.
                                                        </p>
                                                    </div>
                                                </Accordion.Collapse>
                                            </div> */}
                                        </Accordion>
                                        ) : (
                                            // <SinResultados />
                                            'No se encontraron registros'
                                            )
                                    }
                                </Col>
                                <Col md="3" lg="2">
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
                                <Col md="1" lg="1"></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default preguntasFrecuentes
