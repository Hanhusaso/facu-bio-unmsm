import React, { useState, useEffect } from "react";
import { Pagination, Loader } from 'semantic-ui-react'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import { registerLocale } from "react-datepicker";
// import es from "date-fns/locale/es"; // the locale you want
// registerLocale("es", es); // register it with the name you want
// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from "../../components/Layout"
import {Row, Col, Container, Breadcrumb, Spinner} from 'react-bootstrap'
import { AiFillContainer } from 'react-icons/ai'
import { size } from "lodash";
import {countNoticiasApi, getNoticiasApi, getNoticiasSubcategoriasApi} from '../api/noticias';
import j from "jquery";
// import 'jquery-ui';

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

    const [date, setDate] = useState("");

    var dia_seleccionado = "";
    var anio = "";
    var mes = "";
    var dia = "";
    var anio2 = "";
    var mes2 = "";
    var dia2 = "";

    // const months1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    // const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    // const locale = {
    //     localize: {
    //       month: n => months[n],
    //       day: n => days[n]
    //     },
    //     formatLong: {}
    //   }
    //   registerLocale ( 'es' ,  es );

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
        setTimeout(function(){ 
            j("input[type=checkbox]").prop("checked", false);
        }, 10);
        (async () => {
            const response_subcategorias = await getNoticiasSubcategoriasApi();
            setNoticiasSubcategorias(response_subcategorias);
        })();
    }, [])

    useEffect(() => {
        (async () => {
            if(palabra == ''){
                const response1 = await countNoticiasApi(palabra, categorias, date);
                setPaginador('');
                setPaginador(<Pagination defaultActivePage={numberPage} totalPages={Math.ceil(response1/5.0)} onPageChange={onPageChange} />);
                setLoading(true);
                setSinResultados(false);
                if(response1 != 0){
                    if(palabra == ''){
                        const response = await getNoticiasApi(limitPerPage, page, palabra, categorias, date);
                        setNoticias(response);
                    }
                    else{
                        const response = await getNoticiasApi(limitPerPage, page, palabra, [], '');
                        setNoticias(response);
                    }
                    setLoading(false);
                }
                else{
                    setLoading(false);
                    setSinResultados(true);
                }
                window.scrollTo(0, 0);
            }
            else{
                const response1 = await countNoticiasApi(palabra, [], '');
                setPaginador('');
                setPaginador(<Pagination defaultActivePage={numberPage} totalPages={Math.ceil(response1/5.0)} onPageChange={onPageChange} />);
                setLoading(true);
                setSinResultados(false);
                if(response1 != 0){
                    if(palabra == ''){
                        const response = await getNoticiasApi(limitPerPage, page, palabra, categorias, date);
                        setNoticias(response);
                        // const response_subcategorias = await getNoticiasSubcategoriasApi();
                        // setNoticiasSubcategorias(response_subcategorias);
                        // setLoading(false);
                        // if(size(response) == 0){
                        //   setSinResultados(true);
                        // }
                        // else{
                        //   setSinResultados(false);
                        // }
                        // window.scrollTo(0, 0);
                    }
                    else{
                        const response = await getNoticiasApi(limitPerPage, page, palabra, [], '');
                        setNoticias(response);
                        // const response_subcategorias = await getNoticiasSubcategoriasApi();
                        // setNoticiasSubcategorias(response_subcategorias);
                        // setLoading(false);
                        // if(size(response) == 0){
                        //   setSinResultados(true);
                        // }
                        // else{
                        //   setSinResultados(false);
                        // }
                        // window.scrollTo(0, 0);
                    }
                    setLoading(false);
                }
                else{
                    setLoading(false);
                    setSinResultados(true);
                }
                window.scrollTo(0, 0);
            }
        })();
        // (async () => {
        //   setLoading(true);
        //   setSinResultados(false);
        //   if(palabra == ''){
        //     const response = await getNoticiasApi(limitPerPage, page, palabra, categorias, date);
        //     setNoticias(response);
        //     // const response_subcategorias = await getNoticiasSubcategoriasApi();
        //     // setNoticiasSubcategorias(response_subcategorias);
        //     setLoading(false);
        //     if(size(response) == 0){
        //       setSinResultados(true);
        //     }
        //     else{
        //       setSinResultados(false);
        //     }
        //     window.scrollTo(0, 0);
        //   }
        //   else{
        //     const response = await getNoticiasApi(limitPerPage, page, palabra, [], '');
        //     setNoticias(response);
        //     // const response_subcategorias = await getNoticiasSubcategoriasApi();
        //     // setNoticiasSubcategorias(response_subcategorias);
        //     setLoading(false);
        //     if(size(response) == 0){
        //       setSinResultados(true);
        //     }
        //     else{
        //       setSinResultados(false);
        //     }
        //     window.scrollTo(0, 0);
        //   }
        // })();
    }, [page, palabra, categoria, date]);

    useEffect(() => {
        $(function(){
            $('#datepicker').datepicker({
              inline: true,
              firstDay: 1,
              maxDate: new Date(),
              dateFormat: "yy-mm-dd",
              showOtherMonths: false,
              dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
              monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
              onSelect: function(dateText) {
                // sombrearDiasSinEventos();
                // console.log("Selected date: " + dateText + "; input's current value: " + this.value);
                if(dia_seleccionado != this.value){
                    dia_seleccionado = this.value;
                    var hoy_1 = new Date();
                    var anio_1; var mes_1; var dia_1;
                    anio_1 = hoy_1.getFullYear();
                    mes_1 = hoy_1.getMonth()+1;
                    dia_1 = hoy_1.getDate();
                    if(mes_1 < 10){
                        mes_1 = '0' + mes_1;
                    }
                    if(dia_1 < 10){
                        dia_1 = '0' + dia_1;
                    }
                    var fecha_1 = anio_1 + "-" + mes_1 + "-" +dia_1;
                    if(dia_seleccionado == fecha_1){
                        $("style#calendar").append(`
                            a.ui-state-active{
                                border: none !important;
                                background: #48DC57 !important;
                                opacity: 80% !important;
                                font-weight: normal !important;
                                color: #ffffff !important;
                                text-align: center !important;
                            }
                            
                            .ui-state-default{
                                border: none !important;
                                background: none !important;
                                text-align: center !important;
                                color: #454545 !important;
                            }
                            .ui-state-hover{
                                border: 0px solid #cccccc !important;
                                background: #ededed !important;
                                color: #2b2b2b !important;
                                text-align: center !important;
                            }
                        `);
                    }
                    else{
                        $("style#calendar").append(`
                            a.ui-state-active{
                                border: none !important;
                                background: #48DC57 !important;
                                opacity: 80% !important;
                                font-weight: normal !important;
                                color: #ffffff !important;
                                text-align: center !important;
                            }
                            
                            .ui-state-default{
                                border: none !important;
                                background: none !important;
                                text-align: center !important;
                                color: #454545 !important;
                            }
                            .ui-state-hover{
                                border: 0px solid #cccccc !important;
                                background: #ededed !important;
                                color: #2b2b2b !important;
                                text-align: center !important;
                            }
                            .ui-state-highlight{
                                border: 1px solid #48DC57 !important;
                                border-radius: 6px;
                                background: none !important;
                                opacity: 80% !important;
                                font-weight: normal !important;
                                color: #454545 !important;
                                text-align: center !important;
                            }
                        `);
                    }
                    setDate(this.value);
                    anio = this.value.split("-")[0];
                    mes = this.value.split("-")[1];
                    dia = this.value.split("-")[2];
                }
                else{
                    //console.log($(".ui-state-active")[0]);
                    //$(".ui-state-active")[0].className = '';
                    $("style#calendar").append(`
                        a.ui-state-active{
                            border: 1px solid #48DC57 !important;
                            border-radius: 6px;
                            background: none !important;
                            opacity: 80% !important;
                            font-weight: normal !important;
                            color: #454545 !important;
                            text-align: center !important;
                        }
                    
                        .ui-state-default{
                            border: none !important;
                            background: none !important;
                            text-align: center !important;
                            color: #454545 !important;
                        }
                        .ui-state-hover{
                            border: 0px solid #cccccc !important;
                            background: #ededed !important;
                            color: #2b2b2b !important;
                            text-align: center !important;
                        }
                    `);
                    $('#datepicker').datepicker('setDate', null);
                    anio = ""; mes = ""; dia = ""; dia_seleccionado = "";
                    setDate("");
                }
    
                // buscarEventosPorFiltros(tipo, area, dirigidoA, tipo_otros);
                anio2 = anio; mes2 = mes; dia2 = dia;
                // sombrearDiasSinEventos();
              }
            });
            // $('#datepicker').attr("style", "display: none");
        });
    }, []);

    return (
        <>
            <style id="calendar">
                {`
                    a.ui-state-active{
                        border: 1px solid #48DC57 !important;
                        border-radius: 6px;
                        background: none !important;
                        opacity: 80% !important;
                        font-weight: normal !important;
                        color: #454545 !important;
                        text-align: center !important;
                    }

                    .ui-state-highlight{
                        border: 1px solid #48DC57 !important;
                        border-radius: 6px;
                        background: none !important;
                        opacity: 80% !important;
                        font-weight: normal !important;
                        color: #454545 !important;
                        text-align: center !important;
                    }
                    
                    .ui-state-default{
                        border: none !important;
                        background: none !important;
                        text-align: center !important;
                    }
                    .ui-state-hover{
                        border: 0px solid #cccccc !important;
                        background: #ededed !important;
                        color: #2b2b2b !important;
                        text-align: center !important;
                    }
                    .ui-datepicker-inline{
                        width: 100% !important;
                    }
                    thead{
                        color: #56756B !important;
                        background: #ffffff !important;
                    }
                    .ui-datepicker-title{
                        color: #56756B !important;
                    }
                `}
            </style>
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
                                <div id="datepicker" class="mb-4"></div>
                                    {/* <DatePicker
                                        selected={startDate}
                                        formatWeekDay={nameOfDay => nameOfDay.substr(0,1).toLocaleUpperCase()}
                                        maxDate={new Date()}
                                        onChange={(date) => {setStartDate(date)}}
                                        inline
                                        locale="es"
                                    /> */}
                                    {/* <style>
                                        {`
                                            a.ui-state-active{
                                                border: 1px solid #48DC57 !important;
                                                border-radius: 6px;
                                                background: none !important;
                                                opacity: 80% !important;
                                                font-weight: normal !important;
                                                color: #454545 !important;
                                                text-align: center !important;
                                            }
                                            
                                            .ui-state-default{
                                                border: none !important;
                                                background: none !important;
                                                text-align: center !important;
                                            }
                                            .ui-state-hover{
                                                border: 0px solid #cccccc !important;
                                                background: #ededed !important;
                                                color: #2b2b2b !important;
                                                text-align: center !important;
                                            }
                                            .ui-datepicker-inline{
                                                width: 100% !important;
                                            }
                                            thead{
                                                color: #56756B !important;
                                                background: #ffffff !important;
                                            }
                                            .ui-datepicker-title{
                                                color: #56756B !important;
                                            }
                                        `}
                                    </style> */}
                                    
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
                                                <div className="divisor my-3 mt-md-0"></div>

                                                {noticias.map((noticia, index) =>(
                                                    <div key={index}>
                                                        <div className="grid-img-txt-2 no-reverse">
                                                            <a className="mb-2 mb-md-0" href={`noticias/noticia?titulo=${noticia.url_titulo}`}>
                                                                <div className="part-img position-relative">
                                                                    <img className="w-100 img-fluid" src={noticia.imagen_previsualizacion ? noticia.imagen_previsualizacion[0].url : ''} alt="" />
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
                                                {paginador}
                                            </div>
                                        ) : (
                                            // <SinResultados />
                                            'No se encontraron registros'
                                            )
                                        }
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

export default noticias
