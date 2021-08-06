import React, { useState, useEffect } from "react"
import Link from 'next/link'
import Layout from "../../components/Layout"
import {Row, Col, Container, Breadcrumb, Spinner} from 'react-bootstrap'
import { size } from "lodash"
import { getDirectoriosApi } from '../api/directorio'

const directorio = () => {

    const [directorios, setDirectorios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sinResultados, setSinResultados] = useState(false);
    const [palabra, setPalabra] = useState("");

    const onChangePalabra = (event) => {
        setPalabra(event.target.value);
    };

    useEffect(() => {
        (async () => {
            setLoading(true);
            setSinResultados(false);
          
            const response = await getDirectoriosApi(palabra);
            setDirectorios(response);
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

                        {/* BUSCADOR */}

                        <Container className="mb-4">
                            <Row>
                                <Col md="3"></Col>
                                <Col md="6" className="">
                                    <div>
                                        <input className="search-input" placeholder="Buscar por palabra clave" type="text" onChange={onChangePalabra} />
                                    </div>
                                </Col>
                                <Col md="3"></Col>
                            </Row>
                        </Container>

                        <Container>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="10">
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
                                                {directorios.length} {directorios.length == 1 ? 'resultado' : 'resultados'}
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
                                                        {directorios.map((directorio, index) => (
                                                            <tr key={index}>
                                                                <td dangerouslySetInnerHTML={{ __html: directorio.unidad }}></td>
                                                                <td dangerouslySetInnerHTML={{ __html: directorio.cargo }}></td>
                                                                <td dangerouslySetInnerHTML={{ __html: directorio.nombre }}></td>
                                                                <td dangerouslySetInnerHTML={{ __html: directorio.anexo }}></td>
                                                                <td dangerouslySetInnerHTML={{ __html: directorio.email }}></td>
                                                            </tr>
                                                        ))}  
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        ) : (
                                            // <SinResultados />
                                            'No se encontraron registros'
                                            )
                                    }
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
