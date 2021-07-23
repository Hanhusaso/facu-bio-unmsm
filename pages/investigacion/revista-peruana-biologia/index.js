import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb, Spinner} from 'react-bootstrap'
import Link from 'next/link'
import { size } from "lodash";
import { getRevistasApi } from '../../api/revista-peruana-biologia';
import NoticiasExtra from "../../../components/NoticiasExtra"

const revistas = () => {

    const [revistas, setRevistas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sinResultados, setSinResultados] = useState(false);

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    useEffect(() => {
        (async () => {
            setLoading(true);
            setSinResultados(false);
          
            const response = await getRevistasApi();
            setRevistas(response);
            setLoading(false);
            if(size(response) == 0){
                setSinResultados(true);
            }
            else{
                setSinResultados(false);
            }
          window.scrollTo(0, 0);
        })();
    }, []);

    return (
        <>
            <Layout title="Revista Peruana de Biología - Investigación">
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
                                        {/* <li className="breadcrumb-item">Investigación</li> */}
                                        <Breadcrumb.Item active>Investigación: Revista peruana de Biología</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Revista peruana de Biología</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="7" lg="8">
                                    <div className="mb-4">
                                        <p>
                                            La REVISTA PERUANA DE BIOLOGÍA es una publicación científica arbitrada producida por el Instituto de Investigaciones de Ciencias Biológicas Antonio Raimondi, Facultad de Ciencias Biológicas, Universidad Nacional Mayor de San Marcos, Lima, Perú; es publicada en febrero, mayo, agosto y noviembre, en su versión Online.
                                        </p>
                                        <p>
                                            La REVISTA PERUANA DE BIOLOGÍA publica artículos completos, originales e inéditos que contribuyan al conocimiento científico en los temas de biodiversidad, biotecnología, ecología, manejo ambiental elaborados según las normas indicadas en las siguientes normas para envio.
                                        </p>
                                        <a className="btn-green-bright" href="https://revistasinvestigacion.unmsm.edu.pe/index.php/rpb" target="_blank">
                                            Visitar en el portal de revistas UNMSM
                                        </a>
                                    </div>
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
                                        <div className="grid-custom mb-3">
                                            {revistas.map((revista, index) => (
                                                <div key={index}>
                                                    <a href={revista.link_revista} target="_blank" className="book-hover">
                                                        <img className="w-100 img-fluid" src={revista.imagen.url} alt="" />
                                                        <div className="caption-hover">
                                                            <div>
                                                                <div className="font-weight-bold mb-2">
                                                                    {revista.nombre}
                                                                </div>
                                                                <div>
                                                                    {months[new Date(revista.fecha).getMonth()]} {new Date(revista.fecha).getFullYear()}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            ))}  
                                        </div>
                                        ) : (
                                            // <SinResultados />
                                            'No se encontraron registros'
                                            )
                                    }
                                    {/* <div className="grid-custom mb-3">
                                        <div>
                                            <a href="#" className="book-hover">
                                                <img className="w-100 img-fluid" src="/assets/img/investigacion/revista/libro1.png" alt="" />
                                                <div className="caption-hover">
                                                    <div>
                                                        <div className="font-weight-bold mb-2">
                                                            Revista Peruana de Biología Vol. 23
                                                        </div>
                                                        <div>
                                                            Agosto 2020
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div> */}
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
            </Layout>
        </>
    )
}

export default revistas
