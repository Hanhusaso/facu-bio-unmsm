import React, { useState, useEffect } from "react";
import { Pagination, Loader, Modal, Button } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css';

// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from '../../../components/Layout'
import {Row, Col, Container, Breadcrumb, Spinner} from 'react-bootstrap'
import { AiFillContainer } from 'react-icons/ai'
import {countProyectosApi, getProyectosApi, countProyectosByGrupoInvestigacionApi} from '../../api/proyectos';
import j from "jquery";
import NoticiasExtra from "../../../components/NoticiasExtra"

const limitPerPage = 4;

export default function Proyectos() {

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
    const [proyectos, setProyectos] = useState([]);
    const [countProyectos, setCountProyectos] = useState(0);
    const [loading, setLoading] = useState(true);
    const [sinResultados, setSinResultados] = useState(false);
    const [palabra, setPalabra] = useState("");
    const [gruposInvestigacion, setGruposInvestigacion] = useState([]);
    const [grupoInvestigacion, setGrupoInvestigacion] = useState("");
    const [tipos, setTipos] = useState([]);
    const [tipo, setTipo] = useState("");
    const [fechas, setFechas] = useState([]);
    const [fecha, setFecha] = useState("");
    const [countGrupo1, setCountGrupo1] = useState(null);
    const [countGrupo2, setCountGrupo2] = useState(null);
    const [countGrupo3, setCountGrupo3] = useState(null);
    const [countGrupo4, setCountGrupo4] = useState(null);
    const [countGrupo5, setCountGrupo5] = useState(null);

    const [showModal, setShowModal] = useState(false);

    function removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
        arr.splice( i, 1 );
    }

    function obtenerNombreGrupoInvestigacion(grupo_investigacion){
		switch(grupo_investigacion){
			case 'aplicacion_clinica_de_recursos_naturales' : return 'Aplicación clínica de recursos naturales';
			case 'acuicultura_y_nutricion_de_organismos_acuaticos' : return 'Acuicultura y nutrición de organismos acuáticos';
			case 'biologia_ecologia_y_cultivo_hacia_el_aprovechamiento_sostenible_del_recurso_alga' : return 'Biología, ecología y cultivo, hacia el aprovechamiento sostenible del recurso alga';
			case 'biologia_molecular_y_biotecnologia' : return 'Biología molecular y biotecnología';
			case 'biologia_molecular_de_parasitos_y_de_recursos_pesqueros' : return 'Biología molecular de parásitos y de recursos pesqueros';
			case 'biodiversidad_y_ecologia_de_ambientes_acuaticos_continentales' : return 'Biodiversidad y ecología de ambientes acuáticos continentales';
			case 'grupo_de_investigacion_en_bioeconomia' : return 'Grupo de investigación en bioeconomía';
			case 'biodiversidad_de_ecosistemas_neotropicales' : return 'Biodiversidad de ecosistemas neotropicales';
			case 'biotecnologia_para_la_remediacion' : return 'Biotecnología para la remediación';
			case 'biodiversidad_y_taxonomia_de_invertebrados_marinos_para_conservacion_y_manejo_de_ambientes_marinos' : return 'Biodiversidad y taxonomía de invertebrados marinos para conservación y manejo de ambientes marinos';
			case 'reproduccion_biologia_del_desarrollo_y_ecotoxicologia' : return 'Reproducción, biología del desarrollo y ecotoxicología';
			case 'biotecnologia_reproductiva_para_la_conservacion_y_mejora_genetica_animal' : return 'Biotecnología reproductiva para la conservación y mejora genética animal';
			case 'calidad_biologica_y_fisico_quimica_de_alimentos_aguas_y_ambientes' : return 'Calidad biológica y físico-química de alimentos, aguas y ambientes';
			case 'citogenetica_y_sistemas_modelo_de_drosophila' : return 'Citogenética y sistemas modelo de drosophila';
			case 'delimitacion_de_la_biodiversidad_de_especies_y_macroevolucion' : return 'Delimitación de la biodiversidad de especies y macroevolución';
			case 'diversidad_de_mamiferos_y_sus_parasitos_y_su_implicancia_en_enfermedades_zoonoticas_emergentes' : return 'Diversidad de mamíferos y sus parásitos y su implicancia en enfermedades zoonóticas emergentes';
			case 'diversidad_sistematica_de_artropodos_neotropicales' : return 'Diversidad y sistemática de artrópodos neotropicales';
			case 'grupo_de_investigacion_en_ecosistemas_marinos_y_costeros' : return 'Grupo de investigación en ecosistemas marinos y costeros';
			case 'ecologia_y_genetica_de_virus_emergentes_y_reemergentes' : return 'Ecología y genética de virus emergentes y reemergentes';
			case 'evolucion_molecular_de_la_biota_en_el_peru' : return 'Evolución molecular de la biota en el Perú';
			case 'estudio_de_las_poblaciones_amenazadas_de_la_flora' : return 'Estudio de las poblaciones amenazadas de la flora';
			case 'genes_cromosomas_y_genomas_de_mamiferos' : return 'Genes, cromosomas y genomas de mamíferos';
			case 'genetica_de_enfermedades_metabolicas' : return 'Genética de enfermedades metabólicas';
			case 'grupo_de_investigacion_en_bioinformatica_y_biologia_estructural' : return 'Grupo de investigación en bioinformática y biología estructural';
			case 'genomica_funcional_de_microorganismos_y_biorremediacion' : return 'Genómica funcional de microorganismos y biorremediación';
			case 'inmunomoduladores_y_antitumorales_de_origen_natural_y_sintetico' : return 'Inmunomoduladores y antitumorales de origen natural y sintético';
			case 'investigacion_y_desarrollo_de_procesos_biotecnologicos_agroindustriales_y_ambientales' : return 'Investigación y desarrollo de procesos biotecnológicos agroindustriales y ambientales';
			case 'grupo_de_investigacion_en_recursos_geneticos' : return 'Grupo de investigación en recursos genéticos';
			case 'recursos_naturales_y_bioactivos' : return 'Recursos naturales y bioactivos';
			case 'restauracion_ecologica_de_ecosistemas_terrestres_y_acuaticas_del_peru' : return 'Restauración ecológica de ecosistemas terrestres y acuáticas del Perú';
			case 'grupo_de_investigacion_en_toxinas_de_origen_animal_y_sus_antivenenos' : return 'Grupo de investigación en toxinas de origen animal y sus antivenenos';
			case 'inmunologia_parasitaria_en_humanos_y_animales_de_importancia_en_salud_publica' : return 'Inmunología parasitaria en humanos y animales de importancia en salud pública';
			case 'virologia_clinica_molecular_inmunopatogenesis_y_antivirales' : return 'Virología clínica molecular inmunopatogénesis y antivirales';
			case 'biota_acuatica' : return 'Biota acuática';
			default : return '';
		}
	}

    const onPageChange = (event, data) => {
        setPage((data.activePage-1)*4);
        setNumberPage(data.activePage);
    };

    const onChangePalabra = (event) => {
        setPalabra(event.target.value);
        setPage(0);
        setNumberPage(1);
    };

    const onChangeGrupoInvestigacion = (event) => {
        var encontrado = false;
        for(var i=0; i<gruposInvestigacion.length; i++){
            if(gruposInvestigacion[i] == event.target.value){
                encontrado = true;
            }
        }
        if(encontrado){
            removeItemFromArr(gruposInvestigacion, event.target.value);
        }
        else{
            gruposInvestigacion.push(event.target.value);
        }
        
        setGrupoInvestigacion(Math.random());
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

    const onChangeFecha = (event) => {
        var encontrado = false;
        for(var i=0; i<fechas.length; i++){
            if(fechas[i] == event.target.value){
                encontrado = true;
            }
        }
        if(encontrado){
            removeItemFromArr(fechas, event.target.value);
        }
        else{
            fechas.push(event.target.value);
        }
        
        setFecha(Math.random());
        setPage(0);
        setNumberPage(1);
    };

    useEffect(() => {
        setTimeout(function(){ 
            j("input[type=checkbox]").prop("checked", false);
        }, 10);
        (async () => {
            const count_grupo_1 = await countProyectosByGrupoInvestigacionApi('biologia_molecular_y_biotecnologia');
            setCountGrupo1(count_grupo_1);
            const count_grupo_2 = await countProyectosByGrupoInvestigacionApi('biotecnologia_para_la_remediacion');
            setCountGrupo2(count_grupo_2);
            const count_grupo_3 = await countProyectosByGrupoInvestigacionApi('reproduccion_biologia_del_desarrollo_y_ecotoxicologia');
            setCountGrupo3(count_grupo_3);
            const count_grupo_4 = await countProyectosByGrupoInvestigacionApi('citogenetica_y_sistemas_modelo_de_drosophila');
            setCountGrupo4(count_grupo_4);
            const count_grupo_5 = await countProyectosByGrupoInvestigacionApi('con-responsable');
            setCountGrupo5(count_grupo_5);
        })();
    }, [])

    useEffect(() => {
        (async () => {
            if(palabra == ''){
                const response1 = await countProyectosApi(palabra, gruposInvestigacion, tipos, fechas);
                setCountProyectos(response1);
                setPaginador('');
                setPaginador(<Pagination defaultActivePage={numberPage} totalPages={Math.ceil(response1/4.0)} onPageChange={onPageChange} />);
                setLoading(true);
                setSinResultados(false);
                if(response1 != 0){
                    const response = await getProyectosApi(limitPerPage, page, palabra, gruposInvestigacion, tipos, fechas);
                    setProyectos(response);
                    setLoading(false);
                }
                else{
                    setLoading(false);
                    setSinResultados(true);
                }
                window.scrollTo(0, 0);
            }
            else{
                const response1 = await countProyectosApi(palabra, [], [], []);
                setCountProyectos(response1);
                setPaginador('');
                setPaginador(<Pagination defaultActivePage={numberPage} totalPages={Math.ceil(response1/4.0)} onPageChange={onPageChange} />);
                setLoading(true);
                setSinResultados(false);
                if(response1 != 0){
                    const response = await getProyectosApi(limitPerPage, page, palabra, [], [], []);
                    setProyectos(response);
                    setLoading(false);
                }
                else{
                    setLoading(false);
                    setSinResultados(true);
                }
                window.scrollTo(0, 0);
            }
        })();
    }, [page, palabra, grupoInvestigacion, tipo, fecha]);

    return (
        <>

            <Layout title="Proyectos">
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
                                        <Breadcrumb.Item active>Investigación: Producción científica de la facultad</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Producción científica de la Facultad</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-3">
                            <Row>
                                <Col md="1"></Col>
                                <Col>
                                    Estamos orgullos del trabajo que hacen nuestros estudiantes, docentes y egresados de la facultad para generar conocimiento e impacto en la sociedad. Ponemos a disposición el resultado de su esfuerzo, esperando visibilizar soluciones a los problemas actuales y motivar a futuros investigadores. Puedes publicar tu proyecto o saber más sobre los grupos de investigación.
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4">
                            <Row>
                                <Col md="4"></Col>
                                <Col md="4">
                                    <div>
                                        <input className="search-input" placeholder="Buscar por palabra clave" type="text" onChange={onChangePalabra} />
                                    </div>
                                </Col>
                                <Col md="4"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="3" lg="2">
                                    <div className="filters-wrapper">
                                        <div className="mb-3">
                                            <div className="font-weight-bold mb-2">Grupos de investigación</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="biologia_molecular_y_biotecnologia_1" name="biologia_molecular_y_biotecnologia" value="biologia_molecular_y_biotecnologia" onChange={onChangeGrupoInvestigacion} />
                                                    <label className="mb-0" for="biologia_molecular_y_biotecnologia_1"><span className="checkmark"></span>Biología molecular y biotecnología {countGrupo1 != null ? '('+countGrupo1+')' : ''}</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="biotecnologia_para_la_remediacion_1" name="biotecnologia_para_la_remediacion" value="biotecnologia_para_la_remediacion" onChange={onChangeGrupoInvestigacion} />
                                                    <label className="mb-0" for="biotecnologia_para_la_remediacion_1"><span className="checkmark"></span>Biotecnología para la remediación {countGrupo2 != null ? '('+countGrupo2+')' : ''}</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="reproduccion_biologia_del_desarrollo_y_ecotoxicologia_1" name="reproduccion_biologia_del_desarrollo_y_ecotoxicologia" value="reproduccion_biologia_del_desarrollo_y_ecotoxicologia" onChange={onChangeGrupoInvestigacion} />
                                                    <label className="mb-0" for="reproduccion_biologia_del_desarrollo_y_ecotoxicologia_1"><span className="checkmark"></span>Reproducción, biología del desarrollo y ecotoxicología {countGrupo3 != null ? '('+countGrupo3+')' : ''}</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="citogenetica_y_sistemas_modelo_de_drosophila_1" name="citogenetica_y_sistemas_modelo_de_drosophila" value="citogenetica_y_sistemas_modelo_de_drosophila" onChange={onChangeGrupoInvestigacion} />
                                                    <label className="mb-0" for="citogenetica_y_sistemas_modelo_de_drosophila_1"><span className="checkmark"></span>Citogenética y sistemas modelo de drosophila {countGrupo4 != null ? '('+countGrupo4+')' : ''}</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="con-responsable" name="con-responsable" value="con-responsable" onChange={onChangeGrupoInvestigacion} />
                                                    <label className="mb-0" for="con-responsable"><span className="checkmark"></span>Con responsable {countGrupo5 != null ? '('+countGrupo5+')' : ''}</label>
                                                </div>
                                            </div>
                                            <div className="mt-3 mb-3" style={{color: "#27A87D", cursor: "pointer"}} 
                                                onClick={() => {
                                                    setShowModal(true); 
                                                    setTimeout(
                                                        function(){ 
                                                            for(var i=0; i<gruposInvestigacion.length; i++){
                                                                j("#"+gruposInvestigacion[i]).prop("checked", true);
                                                            }
                                                        }, 
                                                    50);
                                                }}
                                            >Ver todos</div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="font-weight-bold mb-2">Tipo</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="tesis" name="tesis" value="tesis" onChange={onChangeTipo} />
                                                    <label className="mb-0" for="tesis"><span className="checkmark"></span>Tesis</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="patentes" name="patentes" value="patentes" onChange={onChangeTipo} />
                                                    <label className="mb-0" for="patentes"><span className="checkmark"></span>Patentes</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="articulos_cientificos" name="articulos_cientificos" value="articulos_cientificos" onChange={onChangeTipo} />
                                                    <label className="mb-0" for="articulos_cientificos"><span className="checkmark"></span>Artículos científicos</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-weight-bold mb-2">Fecha</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="2021-2015" name="2021-2015" value="2021-2015" onChange={onChangeFecha} />
                                                    <label className="mb-0" for="2021-2015"><span className="checkmark"></span>2021 - 2015</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="2014-2010" name="2014-2010" value="2014-2010" onChange={onChangeFecha} />
                                                    <label className="mb-0" for="2014-2010"><span className="checkmark"></span>2014 - 2010</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="2009-2005" name="2009-2005" value="2009-2005" onChange={onChangeFecha} />
                                                    <label className="mb-0" for="2009-2005"><span className="checkmark"></span>2009 - 2005</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="2004-2000" name="2004-2000" value="2004-2000" onChange={onChangeFecha} />
                                                    <label className="mb-0" for="2004-2000"><span className="checkmark"></span>2004 - 2000</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="1999-1995" name="1999-1995" value="1999-1995" onChange={onChangeFecha} />
                                                    <label className="mb-0" for="1999-1995"><span className="checkmark"></span>1999 - 1995</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="1994-1990" name="1994-1990" value="1994-1990" onChange={onChangeFecha} />
                                                    <label className="mb-0" for="1994-1990"><span className="checkmark"></span>1994 - 1990</label>
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
                                            <div className="mb-2">
                                                {countProyectos} {countProyectos == 1 ? 'resultado' : 'resultados'}
                                            </div>
    
                                            <div className="divisor my-3 mt-md-0"></div>

                                                {proyectos.map((proyecto, index) =>(
                                                    <div key={index}>
                                                        <div className="grid-img-txt-2 no-reverse">
                                                            <a className="mb-2 mb-md-0" href={`proyectos/proyecto?nombre=${proyecto.url_nombre}`}>
                                                                <div className="part-img position-relative">
                                                                    <img className="w-100 img-fluid" src={proyecto.imagen ? proyecto.imagen.url : ""} alt="" />
                                                                </div>
                                                            </a>
                                                            <div>
                                                                <p className="mb-2">
                                                                    <i>{proyecto.responsable == null || proyecto.responsable == '' ? obtenerNombreGrupoInvestigacion(proyecto.grupo_investigacion) : proyecto.responsable}</i>
                                                                </p>
                                                                <a href={`proyectos/proyecto?nombre=${proyecto.url_nombre}`} className="mb-2 title line-clamp-2">
                                                                    {proyecto.nombre}
                                                                </a>
                                                                <p className="mb-0 line-clamp-4" dangerouslySetInnerHTML={{ __html: proyecto.descripcion }} />
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
                                <Col md="3" lg="2">
                                    <aside>
                                        <div className="block-interest-links mb-3">
                                            <p className="font-weight-bold mb-2 text-center">
                                                ¿Te gustaría participar en un grupo de investigación?
                                            </p>
                                            <ul className="nav flex-column">
                                                <li className="mb-2 text-center font-weight-bold">
                                                    <Link href="#">
                                                        <a>
                                                            Infórmate aquí
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
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

            <Modal className="basic-modal" open={showModal}  dimmer='blurring' size='large' onClose={() => setShowModal(false)} >
                    <style>
                        {`
                            // .modals {
                            //     padding-bottom: 130px !important;
                            // }
                            .modal {
                                left: 20% !important;
                                top: 70px;
                            }
                            .ui.large.modal {
                                width: 1080px !important;
                                height: 870px !important;
                                margin: 0;
                            }
                        `}
                    </style> 
                    <Modal.Header>
                        <style>
                            {`
                                .header {
                                    border-radius: 15px !important;
                                    padding: 0rem !important;
                            `}
                        </style> 
                            <div className="position-relative">
                                    
                            </div>
                        </Modal.Header>           
                    <style>
                        {/* {`
                            .basic-modal {
                                border-radius: 15px !important;
                            }
                        `} */}
                    </style>
                <Modal.Content>
                    <Button 
                        onClick={() => {
                            setShowModal(false);
                            setTimeout(
                                function(){ 
                                    $("#biologia_molecular_y_biotecnologia_1").prop("checked", false);
                                    $("#biotecnologia_para_la_remediacion_1").prop("checked", false);
                                    $("#reproduccion_biologia_del_desarrollo_y_ecotoxicologia_1").prop("checked", false);
                                    $("#citogenetica_y_sistemas_modelo_de_drosophila_1").prop("checked", false);
                                    for(var i=0; i<gruposInvestigacion.length; i++){
                                        j("#"+gruposInvestigacion[i]+"_1").prop("checked", true);
                                    }
                                }, 
                            50);
                        }}
                    >
                    Cerrar</Button>
                    <div>
                        <div className="text-center" style={{fontSize: "16px", color: "#56756B", fontWeight: "bold"}}>Grupos de Investigación</div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="aplicacion_clinica_de_recursos_naturales" name="aplicacion_clinica_de_recursos_naturales" value="aplicacion_clinica_de_recursos_naturales" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="aplicacion_clinica_de_recursos_naturales"><span className="checkmark"></span>Aplicación clínica de recursos naturales</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="acuicultura_y_nutricion_de_organismos_acuaticos" name="acuicultura_y_nutricion_de_organismos_acuaticos" value="acuicultura_y_nutricion_de_organismos_acuaticos" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="acuicultura_y_nutricion_de_organismos_acuaticos"><span className="checkmark"></span>Acuicultura y nutrición de organismos acuáticos</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="biologia_ecologia_y_cultivo_hacia_el_aprovechamiento_sostenible_del_recurso_alga" name="biologia_ecologia_y_cultivo_hacia_el_aprovechamiento_sostenible_del_recurso_alga" value="biologia_ecologia_y_cultivo_hacia_el_aprovechamiento_sostenible_del_recurso_alga" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="biologia_ecologia_y_cultivo_hacia_el_aprovechamiento_sostenible_del_recurso_alga"><span className="checkmark"></span>Biología, ecología y cultivo, hacia el aprovechamiento sostenible del recurso alga</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="biologia_molecular_y_biotecnologia" name="biologia_molecular_y_biotecnologia" value="biologia_molecular_y_biotecnologia" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="biologia_molecular_y_biotecnologia"><span className="checkmark"></span>Biología molecular y biotecnología</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="biologia_molecular_de_parasitos_y_de_recursos_pesqueros" name="biologia_molecular_de_parasitos_y_de_recursos_pesqueros" value="biologia_molecular_de_parasitos_y_de_recursos_pesqueros" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="biologia_molecular_de_parasitos_y_de_recursos_pesqueros"><span className="checkmark"></span>Biología molecular de parásitos y de recursos pesqueros</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="biodiversidad_y_ecologia_de_ambientes_acuaticos_continentales" name="biodiversidad_y_ecologia_de_ambientes_acuaticos_continentales" value="biodiversidad_y_ecologia_de_ambientes_acuaticos_continentales" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="biodiversidad_y_ecologia_de_ambientes_acuaticos_continentales"><span className="checkmark"></span>Biodiversidad y ecología de ambientes acuáticos continentales</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="grupo_de_investigacion_en_bioeconomia" name="grupo_de_investigacion_en_bioeconomia" value="grupo_de_investigacion_en_bioeconomia" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="grupo_de_investigacion_en_bioeconomia"><span className="checkmark"></span>Grupo de investigación en bioeconomía</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="biodiversidad_de_ecosistemas_neotropicales" name="biodiversidad_de_ecosistemas_neotropicales" value="biodiversidad_de_ecosistemas_neotropicales" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="biodiversidad_de_ecosistemas_neotropicales"><span className="checkmark"></span>Biodiversidad de ecosistemas neotropicales</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="biotecnologia_para_la_remediacion" name="biotecnologia_para_la_remediacion" value="biotecnologia_para_la_remediacion" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="biotecnologia_para_la_remediacion"><span className="checkmark"></span>Biotecnología para la remediación</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="biodiversidad_y_taxonomia_de_invertebrados_marinos_para_conservacion_y_manejo_de_ambientes_marinos" name="biodiversidad_y_taxonomia_de_invertebrados_marinos_para_conservacion_y_manejo_de_ambientes_marinos" value="biodiversidad_y_taxonomia_de_invertebrados_marinos_para_conservacion_y_manejo_de_ambientes_marinos" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="biodiversidad_y_taxonomia_de_invertebrados_marinos_para_conservacion_y_manejo_de_ambientes_marinos"><span className="checkmark"></span>Biodiversidad y taxonomía de invertebrados marinos para conservación y manejo de ambientes marinos</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="reproduccion_biologia_del_desarrollo_y_ecotoxicologia" name="reproduccion_biologia_del_desarrollo_y_ecotoxicologia" value="reproduccion_biologia_del_desarrollo_y_ecotoxicologia" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="reproduccion_biologia_del_desarrollo_y_ecotoxicologia"><span className="checkmark"></span>Reproducción, biología del desarrollo y ecotoxicología</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="biotecnologia_reproductiva_para_la_conservacion_y_mejora_genetica_animal" name="biotecnologia_reproductiva_para_la_conservacion_y_mejora_genetica_animal" value="biotecnologia_reproductiva_para_la_conservacion_y_mejora_genetica_animal" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="biotecnologia_reproductiva_para_la_conservacion_y_mejora_genetica_animal"><span className="checkmark"></span>Biotecnología reproductiva para la conservación y mejora genética animal</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="calidad_biologica_y_fisico_quimica_de_alimentos_aguas_y_ambientes" name="calidad_biologica_y_fisico_quimica_de_alimentos_aguas_y_ambientes" value="calidad_biologica_y_fisico_quimica_de_alimentos_aguas_y_ambientes" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="calidad_biologica_y_fisico_quimica_de_alimentos_aguas_y_ambientes"><span className="checkmark"></span>Calidad biológica y físico-química de alimentos, aguas y ambientes</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="citogenetica_y_sistemas_modelo_de_drosophila" name="citogenetica_y_sistemas_modelo_de_drosophila" value="citogenetica_y_sistemas_modelo_de_drosophila" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="citogenetica_y_sistemas_modelo_de_drosophila"><span className="checkmark"></span>Citogenética y sistemas modelo de drosophila</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="delimitacion_de_la_biodiversidad_de_especies_y_macroevolucion" name="delimitacion_de_la_biodiversidad_de_especies_y_macroevolucion" value="delimitacion_de_la_biodiversidad_de_especies_y_macroevolucion" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="delimitacion_de_la_biodiversidad_de_especies_y_macroevolucion"><span className="checkmark"></span>Delimitación de la biodiversidad de especies y macroevolución</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="diversidad_de_mamiferos_y_sus_parasitos_y_su_implicancia_en_enfermedades_zoonoticas_emergentes" name="diversidad_de_mamiferos_y_sus_parasitos_y_su_implicancia_en_enfermedades_zoonoticas_emergentes" value="diversidad_de_mamiferos_y_sus_parasitos_y_su_implicancia_en_enfermedades_zoonoticas_emergentes" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="diversidad_de_mamiferos_y_sus_parasitos_y_su_implicancia_en_enfermedades_zoonoticas_emergentes"><span className="checkmark"></span>Diversidad de mamíferos y sus parásitos y su implicancia en enfermedades zoonóticas emergentes</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="diversidad_sistematica_de_artropodos_neotropicales" name="diversidad_sistematica_de_artropodos_neotropicales" value="diversidad_sistematica_de_artropodos_neotropicales" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="diversidad_sistematica_de_artropodos_neotropicales"><span className="checkmark"></span>Diversidad y sistemática de artrópodos neotropicales</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="grupo_de_investigacion_en_ecosistemas_marinos_y_costeros" name="grupo_de_investigacion_en_ecosistemas_marinos_y_costeros" value="grupo_de_investigacion_en_ecosistemas_marinos_y_costeros" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="grupo_de_investigacion_en_ecosistemas_marinos_y_costeros"><span className="checkmark"></span>Grupo de investigación en ecosistemas marinos y costeros</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="ecologia_y_genetica_de_virus_emergentes_y_reemergentes" name="ecologia_y_genetica_de_virus_emergentes_y_reemergentes" value="ecologia_y_genetica_de_virus_emergentes_y_reemergentes" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="ecologia_y_genetica_de_virus_emergentes_y_reemergentes"><span className="checkmark"></span>Ecología y genética de virus emergentes y reemergentes</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="evolucion_molecular_de_la_biota_en_el_peru" name="evolucion_molecular_de_la_biota_en_el_peru" value="evolucion_molecular_de_la_biota_en_el_peru" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="evolucion_molecular_de_la_biota_en_el_peru"><span className="checkmark"></span>Evolución molecular de la biota en el Perú</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="estudio_de_las_poblaciones_amenazadas_de_la_flora" name="estudio_de_las_poblaciones_amenazadas_de_la_flora" value="estudio_de_las_poblaciones_amenazadas_de_la_flora" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="estudio_de_las_poblaciones_amenazadas_de_la_flora"><span className="checkmark"></span>Estudio de las poblaciones amenazadas de la flora</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="genes_cromosomas_y_genomas_de_mamiferos" name="genes_cromosomas_y_genomas_de_mamiferos" value="genes_cromosomas_y_genomas_de_mamiferos" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="genes_cromosomas_y_genomas_de_mamiferos"><span className="checkmark"></span>Genes, cromosomas y genomas de mamíferos</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="genetica_de_enfermedades_metabolicas" name="genetica_de_enfermedades_metabolicas" value="genetica_de_enfermedades_metabolicas" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="genetica_de_enfermedades_metabolicas"><span className="checkmark"></span>Genética de enfermedades metabólicas</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="grupo_de_investigacion_en_bioinformatica_y_biologia_estructural" name="grupo_de_investigacion_en_bioinformatica_y_biologia_estructural" value="grupo_de_investigacion_en_bioinformatica_y_biologia_estructural" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="grupo_de_investigacion_en_bioinformatica_y_biologia_estructural"><span className="checkmark"></span>Grupo de investigación en bioinformática y biología estructural</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="genomica_funcional_de_microorganismos_y_biorremediacion" name="genomica_funcional_de_microorganismos_y_biorremediacion" value="genomica_funcional_de_microorganismos_y_biorremediacion" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="genomica_funcional_de_microorganismos_y_biorremediacion"><span className="checkmark"></span>Genómica funcional de microorganismos y biorremediación</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="inmunomoduladores_y_antitumorales_de_origen_natural_y_sintetico" name="inmunomoduladores_y_antitumorales_de_origen_natural_y_sintetico" value="inmunomoduladores_y_antitumorales_de_origen_natural_y_sintetico" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="inmunomoduladores_y_antitumorales_de_origen_natural_y_sintetico"><span className="checkmark"></span>Inmunomoduladores y antitumorales de origen natural y sintético</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="investigacion_y_desarrollo_de_procesos_biotecnologicos_agroindustriales_y_ambientales" name="investigacion_y_desarrollo_de_procesos_biotecnologicos_agroindustriales_y_ambientales" value="investigacion_y_desarrollo_de_procesos_biotecnologicos_agroindustriales_y_ambientales" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="investigacion_y_desarrollo_de_procesos_biotecnologicos_agroindustriales_y_ambientales"><span className="checkmark"></span>Investigación y desarrollo de procesos biotecnológicos agroindustriales y ambientales</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="grupo_de_investigacion_en_recursos_geneticos" name="grupo_de_investigacion_en_recursos_geneticos" value="grupo_de_investigacion_en_recursos_geneticos" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="grupo_de_investigacion_en_recursos_geneticos"><span className="checkmark"></span>Grupo de investigación en recursos genéticos</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="recursos_naturales_y_bioactivos" name="recursos_naturales_y_bioactivos" value="recursos_naturales_y_bioactivos" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="recursos_naturales_y_bioactivos"><span className="checkmark"></span>Recursos naturales y bioactivos</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="restauracion_ecologica_de_ecosistemas_terrestres_y_acuaticas_del_peru" name="restauracion_ecologica_de_ecosistemas_terrestres_y_acuaticas_del_peru" value="restauracion_ecologica_de_ecosistemas_terrestres_y_acuaticas_del_peru" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="restauracion_ecologica_de_ecosistemas_terrestres_y_acuaticas_del_peru"><span className="checkmark"></span>Restauración ecológica de ecosistemas terrestres y acuáticas del Perú</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="grupo_de_investigacion_en_toxinas_de_origen_animal_y_sus_antivenenos" name="grupo_de_investigacion_en_toxinas_de_origen_animal_y_sus_antivenenos" value="grupo_de_investigacion_en_toxinas_de_origen_animal_y_sus_antivenenos" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="grupo_de_investigacion_en_toxinas_de_origen_animal_y_sus_antivenenos"><span className="checkmark"></span>Grupo de investigación en toxinas de origen animal y sus antivenenos</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="inmunologia_parasitaria_en_humanos_y_animales_de_importancia_en_salud_publica" name="inmunologia_parasitaria_en_humanos_y_animales_de_importancia_en_salud_publica" value="inmunologia_parasitaria_en_humanos_y_animales_de_importancia_en_salud_publica" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="inmunologia_parasitaria_en_humanos_y_animales_de_importancia_en_salud_publica"><span className="checkmark"></span>Inmunología parasitaria en humanos y animales de importancia en salud pública</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="virologia_clinica_molecular_inmunopatogenesis_y_antivirales" name="virologia_clinica_molecular_inmunopatogenesis_y_antivirales" value="virologia_clinica_molecular_inmunopatogenesis_y_antivirales" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="virologia_clinica_molecular_inmunopatogenesis_y_antivirales"><span className="checkmark"></span>Virología clínica molecular inmunopatogénesis y antivirales</label>
                        </div>
                        <div className="input-group mb-1">
                            <input type="checkbox" id="biota_acuatica" name="biota_acuatica" value="biota_acuatica" onChange={onChangeGrupoInvestigacion} />
                            <label className="mb-0" for="biota_acuatica"><span className="checkmark"></span>Biota acuática</label>
                        </div>
                    </div>
                    {/* <style>
                        {`
                            .modals > .modal > .content {
                                height: 537px;
                                width: 100% !important;
                                padding-top: 50px !important;
                                border-radius: 15px !important;
                            }
                            // .scrolling .content {
                            //     height: 537px;
                            //     width: 100% !important;
                            //     padding-top: 50px !important;
                            //     border-radius: 15px !important;
                            // }
                            // ::-webkit-scrollbar-track {
                            //     margin-top: 35px;
                            //     margin-bottom: 35px;
                            //     margin-right: 200px !important;
                            // }
                        `}
                    
                    </style> */}
                    
        
                </Modal.Content>
            </Modal>

        </>
    )
}