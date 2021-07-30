import React, { useState, useEffect } from "react";
import Layout from '../../../../components/Layout'
import { useRouter } from "next/router";
import {Row, Col, Container, Breadcrumb, Spinner} from 'react-bootstrap'
import Link from 'next/link'
import { size } from "lodash";
import {getProyectoByUrlApi} from '../../../api/proyectos';
import ProyectosExtra from "../../../../components/ProyectosExtra"

const index = () => {

    const { query } = useRouter();

    const currentUrlProyecto = query.nombre;
    const [loading, setLoading] = useState(true);
    const [sinResultados, setSinResultados] = useState(false);
    const [proyecto, setProyecto] = useState(false);

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

    useEffect(() => {
        if (!query) {
            return;
        }
        (async () => {
          setLoading(true);
          setSinResultados(false);
          const response = await getProyectoByUrlApi(currentUrlProyecto);
          if(size(response) == 0){
            // setSinResultados(true);
          }
          else{
            setProyecto(response[0]);
            setLoading(false);
            // setSinResultados(false);
          }

        //   const response_noticias_ultimas = await getNoticiasUltimasApi();

          window.scrollTo(0, 0);
        })();
    }, [query]);

    return (
        <>
            <Layout title="Proyecto">
            {loading ? (
                    <>
                    <div className="d-flex align-items-center justify-content-center my-5">
                        <div className="d-inline-flex flex-column justify-content-center align-items-center">
                            <Spinner animation="border" role="status" className="mb-2"/>
                            <span>Buscando formación...</span>
                        </div>
                    </div>
                    </>
                ) : !sinResultados ? (
                    <div>
                        <div>
                            <Container>
                                <Row>
                                    <Col md="1"></Col>
                                    <Col>
                                        <Breadcrumb>
                                            <li className="breadcrumb-item">
                                                <Link href="/">
                                                    <a role="button">Inicio</a>
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link href="/investigacion/proyectos">
                                                    <a role="button">Investigación: Producción científica de la facultad</a>
                                                </Link>
                                            </li>
                                            {/* <li className="breadcrumb-item">Investigación: Producción científica de la facultad</li> */}
                                            <Breadcrumb.Item active>{proyecto.nombre}</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </Col>
                                    <Col md="1"></Col>
                                </Row>
                            </Container>
                        </div>
                        <div>
                            <Container className="mb-3">
                                <Row>
                                    <Col md="1" lg="1"></Col>
                                    <Col md="7" lg="8">
                                        <div className="title-page mb-2">
                                        {proyecto.nombre}
                                        </div>
                                    </Col>
                                    <Col md="3" lg="2"></Col>
                                    <Col md="1" lg="1"></Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col md="1" lg="1"></Col>
                                    <Col md="7" lg="8">
                                        <p className="img-info">{proyecto.responsable == null || proyecto.responsable == '' ? obtenerNombreGrupoInvestigacion(proyecto.grupo_investigacion) : 'Responsable: '+proyecto.responsable}</p>
                                        <div className="img-float-left mb-3 mr-3">
                                            <img className="w-100 img-fluid" src={proyecto.imagen ? proyecto.imagen.url : ""} alt="" />
                                        </div>
                                        <p dangerouslySetInnerHTML={{ __html: proyecto.descripcion }} />
                                        <div className="section-compartir mb-3">
                                            <div className="d-inline-block font-weight-bold mr-3">
                                                Compartir vía:
                                            </div>
                                            <div className="icons">
                                                <a href="#" className="d-inline-block">
                                                    <img src="/assets/img/iconos/email.svg"/>
                                                </a>
                                                <a href="#" className="d-inline-block">
                                                    <img src="/assets/img/iconos/whatsapp.svg"/>
                                                </a>
                                                <a href="#" className="d-inline-block">
                                                    <img src="/assets/img/iconos/facebook.svg"/>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="3" lg="2">
                                        <aside>
                                            <div className="block-interest-links mb-3">
                                                <p className="font-weight-bold mb-2 text-center">
                                                    ¿Te gustaría participar en un grupo de investigación?
                                                </p>
                                                <ul className="nav flex-column">
                                                    <li className="mb-2 text-center font-weight-bold">
                                                        <Link href="/investigacion/grupos-investigacion">
                                                            <a>
                                                                Infórmate aquí
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <ProyectosExtra 
                                                idProyectoDetalle = {""} 
                                            />
                                        </aside>
                                    </Col>
                                    <Col md="1" lg="1"></Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                ) : (
                    ''
                )
            }
            </Layout>
        </>
    )
}

export default index
