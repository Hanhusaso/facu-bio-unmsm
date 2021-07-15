import React, { useState, useEffect } from "react";
import { Pagination, Loader } from 'semantic-ui-react'
// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from "../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import { AiFillContainer } from 'react-icons/ai'
import { size } from "lodash";
import { BASE_PATH_S3 } from "../../utils/constants";
import {countNoticiasApi, getNoticiasApi, getNoticiasSubcategoriasApi} from '../api/noticias';

const limitPerPage = 5;

const noticias = () => {

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
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sinResultados, setSinResultados] = useState(false);
    const [palabra, setPalabra] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState("");

    const [noticiasSubcategorias, setNoticiasSubcategorias] = useState([]);

    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    function removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
        arr.splice( i, 1 );
      }

    const onPageChange = (event, data) => {
        setPage((data.activePage-1)*5);
        setNumberPage(data.activePage);
    };

    const onChangePalabra = (event) => {
        setPalabra(event.target.value);
        setPage(0);
        setNumberPage(1);
    };

    const onChangeCategoria = (event) => {
        var encontrado = false;
        for(var i=0; i<categorias.length; i++){
            if(categorias[i] == event.target.value){
                encontrado = true;
            }
        }
        if(encontrado){
            removeItemFromArr(categorias, event.target.value);
        }
        else{
            categorias.push(event.target.value);
        }
        
        setCategoria(Math.random());
        setPage(0);
        setNumberPage(1);
    };


    useEffect(() => {
        (async () => {
            const response1 = await countNoticiasApi(palabra, categorias);
            setPaginador('');
            setPaginador(<Pagination defaultActivePage={numberPage} totalPages={response1/5} onPageChange={onPageChange} />); 
          })();
        (async () => {
          setLoading(true);
          setSinResultados(false);
          const response = await getNoticiasApi(limitPerPage, page, palabra, categorias);
          setNoticias(response);
          const response_subcategorias = await getNoticiasSubcategoriasApi();
          setNoticiasSubcategorias(response_subcategorias);
          setLoading(false);
          if(size(response) == 0){
            setSinResultados(true);
          }
          else{
            setSinResultados(false);
          }
          window.scrollTo(0, 0);
        })();
    }, [page, palabra, categoria]);

    return (
        <>
            <Layout title="Noticias">
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
                                        <Breadcrumb.Item active>Noticias</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Noticias</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>

                        <Container className="mb-4">
                            <Row>
                                <Col md="3"></Col>
                                <Col md="6">
                                    <div>
                                        <input className="search-input" placeholder="Buscar por palabra clave" type="text" onChange={onChangePalabra} />
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
                                        <div className="">
                                            <div className="font-weight-bold mb-2">Categorías</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-campus" name="categorias-campus" value="1" onChange={onChangeCategoria} />
                                                    <label className="mb-0" for="categorias-campus"><span className="checkmark"></span> Campus y comunidad</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-arte" name="categorias-arte" value="2" onChange={onChangeCategoria} />
                                                    <label className="mb-0" for="categorias-arte"><span className="checkmark"></span> Arte, cultura y humanidades</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-ciencia" name="categorias-ciencia" value="3" onChange={onChangeCategoria} />
                                                    <label className="mb-0" for="categorias-ciencia"><span className="checkmark"></span> Ciencia, tecnología y salud</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-negocios" name="categorias-negocios" value="4" onChange={onChangeCategoria} />
                                                    <label className="mb-0" for="categorias-negocios"><span className="checkmark"></span> Negocios, derecho y sociedad</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-investigacion" name="categorias-investigacion" value="5" onChange={onChangeCategoria} />
                                                    <label className="mb-0" for="categorias-investigacion"><span className="checkmark"></span> Investigación</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-comunicados" name="categorias-comunicados" value="6" onChange={onChangeCategoria} />
                                                    <label className="mb-0" for="categorias-comunicados"><span className="checkmark"></span> Comunicados</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-articulos" name="categorias-articulos" value="7" onChange={onChangeCategoria} />
                                                    <label className="mb-0" for="categorias-articulos"><span className="checkmark"></span> Artículos de opinión</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-editoriales" name="categorias-editoriales" value="8" onChange={onChangeCategoria} />
                                                    <label className="mb-0" for="categorias-editoriales"><span className="checkmark"></span> Editoriales</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="7" lg="8">
                                        {loading ? (
                                            <Loader
                                                active
                                                inline="centered"
                                                style={{
                                                    color: "#39556f",
                                                    fontFamily: "Calibri",
                                                    fontWeight: "bold",
                                                    fontSize: "15px",
                                                    marginTop: "3rem",
                                                }}
                                                className="mt-5"
                                            >
                                                Buscando registros...
                                            </Loader>
                                        ) : !sinResultados ? (
                                            <div>
                                                <div className="divisor my-3 mt-md-0"></div>

                                                { noticias.map((noticia, index) =>(
                                                    <div key={index}>
                                                        <div className="grid-img-txt-2 no-reverse">
                                                            <a className="mb-2 mb-md-0" href={`noticias/noticia?titulo=${noticia.url_titulo}`}>
                                                                <div className="part-img position-relative">
                                                                    <img className="w-100 img-fluid" src={BASE_PATH_S3+noticia?.imagen_previsualizacion[0].url} alt="" />
                                                                    <div className="badge-tag">{noticiasSubcategorias[noticia?.id_categoria_subcategoria.id_subcategoria-1].nombre}</div>
                                                                </div>
                                                            </a>
                                                            <div>
                                                                <p className="mb-1 date">
                                                                    <span>
                                                                        <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                                    </span>
                                                                    <span>{new Date(noticia.fecha).getDate()} de {months[new Date(noticia.fecha).getMonth()]} de {new Date(noticia.fecha).getFullYear()}</span>
                                                                </p>
                                                                <a href={`noticias/noticia?titulo=${noticia.url_titulo}`} className="mb-1 title line-clamp-2">
                                                                    {noticia?.titulo}
                                                                </a>
                                                                <p className="mb-0 line-clamp-4">
                                                                    {noticia?.sintesis}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="divisor"></div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            // <SinResultados />
                                            'No se encontraron registros'
                                        )}
                                </Col>
                                <Col md="1" lg="1"></Col>
                            </Row>
                            {paginador}
                        </Container>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default noticias
