import React, { useState, useEffect } from "react";
import { Pagination, Loader } from 'semantic-ui-react'

// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from "../../components/Layout"
import {Row, Col, Container, Breadcrumb, Spinner} from 'react-bootstrap'
import { AiFillContainer } from 'react-icons/ai'
import { size } from "lodash";
import {countEventosApi, getEventosApi} from '../api/eventos';
import j from "jquery";

const limitPerPage = 5;

const eventos = () => {

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
    const [eventos, setEventos] = useState([]);
    const [countEventos, setCountEventos] = useState(0);
    const [loading, setLoading] = useState(true);
    const [sinResultados, setSinResultados] = useState(false);
    const [palabra, setPalabra] = useState("");
    const [tipos, setTipos] = useState([]);
    const [tipo, setTipo] = useState("");

    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const [startDate, setStartDate] = useState("");

    var dia_seleccionado = "";
    var anio = "";
    var mes = "";
    var dia = "";
    var anio2 = "";
    var mes2 = "";
    var dia2 = "";

    function removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
        arr.splice( i, 1 );
    }

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'p.m.' : 'a.m.';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
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

    const onChangeTipo = (event) => {
        var encontrado = false;
        for(var i=0; i<tipos.length; i++){
            if(tipos[i] == event.target.value){
                encontrado = true;
            }
        }
        if(encontrado){
            removeItemFromArr(tipos, event.target.value);
        }
        else{
            tipos.push(event.target.value);
        }
        
        setTipo(Math.random());
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
                const response1 = await countEventosApi(palabra, tipos, startDate);
                setCountEventos(response1);
                setPaginador('');
                setPaginador(<Pagination defaultActivePage={numberPage} totalPages={Math.ceil(response1/5.0)} onPageChange={onPageChange} />);
                setLoading(true);
                setSinResultados(false);
                if(response1 != 0){
                    if(palabra == ''){
                        const response = await getEventosApi(limitPerPage, page, palabra, tipos, startDate);
                        setEventos(response);
                    }
                    else{
                    const response = await getEventosApi(limitPerPage, page, palabra, [], '');
                    setEventos(response);
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
                const response1 = await countEventosApi(palabra, [], '');
                setCountEventos(response1);
                setPaginador('');
                setPaginador(<Pagination defaultActivePage={numberPage} totalPages={Math.ceil(response1/5.0)} onPageChange={onPageChange} />);
                setLoading(true);
                setSinResultados(false);
                if(response1 != 0){
                    if(palabra == ''){
                        const response = await getEventosApi(limitPerPage, page, palabra, tipos, startDate);
                        setEventos(response);
                    }
                    else{
                    const response = await getEventosApi(limitPerPage, page, palabra, [], '');
                    setEventos(response);
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
        $(function(){
            $('#datepicker').datepicker({
              inline: true,
              firstDay: 1,
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
                    setStartDate(this.value);
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
                    setStartDate("");
                }
    
                // buscarEventosPorFiltros(tipo, area, dirigidoA, tipo_otros);
                anio2 = anio; mes2 = mes; dia2 = dia;
                // sombrearDiasSinEventos();
              }
            });
            // $('#datepicker').attr("style", "display: none");
        });
    }, [page, palabra, tipo, startDate]);

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
            <Layout title="Eventos">
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
                                        <Breadcrumb.Item active>Eventos</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Eventos</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>

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
                                <Col md="1" lg="1"></Col>
                                <Col md="3" lg="2">
                                    <div id="datepicker" class="mb-4"></div>
                                    <div className="filters-wrapper">
                                        <div className="">
                                            <div className="font-weight-bold mb-2">Tipos</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="tipos-conferencias" name="tipos-conferencias" value="conferencia" onChange={onChangeTipo} />
                                                    <label className="mb-0" for="tipos-conferencias"><span className="checkmark"></span> Conferencias</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="tipos-seminarios" name="tipos-seminarios" value="seminario" onChange={onChangeTipo} />
                                                    <label className="mb-0" for="tipos-seminarios"><span className="checkmark"></span> Seminarios</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="tipos-charlas" name="tipos-charlas" value="charla" onChange={onChangeTipo} />
                                                    <label className="mb-0" for="tipos-charlas"><span className="checkmark"></span> Charlas</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="tipos-otros" name="tipos-otros" value="otros" onChange={onChangeTipo} />
                                                    <label className="mb-0" for="tipos-otros"><span className="checkmark"></span> Otros</label>
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
                                                <div className="mb-2">{countEventos} {countEventos == 1 ? 'resultado' : 'resultados'}</div> 
                                                <div className="divisor my-3 mt-md-0"></div>

                                                {eventos.map((evento, index) => (
                                                    <div key={index}>
                                                        <div className="grid-img-txt-2 no-reverse">
                                                            <a href={`eventos/evento?nombre=${evento?.url_nombre}`} className="mb-3 title line-clamp-2 d-block d-md-none">
                                                                {evento?.tipo} | {evento?.nombre}
                                                            </a>
                                                            <a href={`eventos/evento?nombre=${evento?.url_nombre}`}>
                                                                <div className="part-img position-relative mb-2 mb-md-0">
                                                                    <img className="w-100 img-fluid" src={evento.imagen ? evento.imagen[0].url : ''} alt="" />
                                                                </div>
                                                            </a>
                                                            <div>
                                                                <div className="mb-1 d-block d-md-flex">
                                                                    <div className="date mr-4 mb-1">
                                                                        <span>
                                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                                        </span>
                                                                        <span>{new Date(evento.fechaInicio).getDate()} de {months[new Date(evento.fechaInicio).getMonth()]} de {new Date(evento.fechaInicio).getFullYear()}</span>
                                                                    </div>
                                                                    <div className="date mr-4 mb-1">
                                                                        <span>
                                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/reloj.svg" alt="" />
                                                                        </span>
                                                                        <span>{formatAMPM(new Date(evento.fechaInicio))}</span>
                                                                    </div>
                                                                    <div className="date mb-1">
                                                                        <span>
                                                                            <img width="13px" className="mr-2" src="/assets/img/iconos/lugar.svg" alt="" />
                                                                        </span>
                                                                        <span>{evento.lugar}</span>
                                                                    </div>
                                                                </div>
                                                                <a href={`eventos/evento?nombre=${evento?.url_nombre}`} className="mb-1 title line-clamp-2 d-none d-md-block">
                                                                    {evento?.tipo} | {evento?.nombre}
                                                                </a>
                                                                <p className="mb-0 line-clamp-4" dangerouslySetInnerHTML={{ __html: evento.descripcion }} />
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
                                    {/* <div>
                                        <div className="divisor my-3 mt-md-0"></div>

                                        <div className="grid-img-txt-2 no-reverse">
                                            <a href="eventos/evento" className="mb-3 title line-clamp-2 d-block d-md-none">
                                                Conferencia | Google’s software development process
                                            </a>
                                            <a href="eventos/evento">
                                                <div className="part-img position-relative mb-2 mb-md-0">
                                                    <img className="w-100 img-fluid" src="/assets/img/eventos/eventos1.png" alt="" />
                                                </div>
                                            </a>
                                            <div>
                                                <div className="mb-1 d-block d-md-flex">
                                                    <div className="date mr-4 mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                        </span>
                                                        <span>23 de marzo de 2021</span>
                                                    </div>
                                                    <div className="date mr-4 mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/reloj.svg" alt="" />
                                                        </span>
                                                        <span>5:00 pm</span>
                                                    </div>
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="13px" className="mr-2" src="/assets/img/iconos/lugar.svg" alt="" />
                                                        </span>
                                                        <span>Zoom meetings</span>
                                                    </div>
                                                </div>
                                                <a href="eventos/evento" className="mb-1 title line-clamp-2 d-none d-md-block">
                                                    Conferencia | Google’s software development process
                                                </a>
                                                <p className="mb-0 line-clamp-4">
                                                    Para reforzar el trabajo solidario y altruista de los voluntarios sanmarquinos, la Universidad Nacional Mayor de San Marcos (UNMSM) elaboró el Reglamento Interno del Sistema de Voluntariado (SV-UNMSM) con el propósito de establecer.Para reforzar el trabajo solidario y altruista de los voluntarios sanmarquinos, la Universidad Nacional Mayor de San Marcos Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at est nam quisquam, illo expedita numquam. Hic velit eum quia, commodi cumque, odit quos ad alias mollitia distinctio expedita error.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="divisor"></div>

                                    </div> */}
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

export default eventos
