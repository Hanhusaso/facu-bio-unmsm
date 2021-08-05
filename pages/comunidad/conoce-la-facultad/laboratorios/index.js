import React , { useEffect } from 'react'
import Layout from "../../../../components/Layout"
import NoticiasExtra from '../../../../components/NoticiasExtra'

import {Row, Col, Container, Breadcrumb, Tabs, Tab} from 'react-bootstrap'
import Link from 'next/link'

import { useWindowSize } from '../../../../utils/useWindowSize'

const index = () => {

    const { width, height } = useWindowSize();

    return (
        <>
            <Layout title="Laboratorios">
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
                                        <li className="breadcrumb-item">
                                            <Link href="/comunidad/conoce-la-facultad">
                                                <a role="button">Comunidad: Conoce la facultad</a>
                                            </Link>
                                        </li>
                                        <Breadcrumb.Item active>Laboratorios</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Laboratorios</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                    </div>
                    {/* IMAGE */}
                    <div className="mb-4">
                        <img className="w-100" src="/assets/img/comunidad/laboratorios/labortorio-banner-biologia-ciencias.png" alt="" />
                    </div>

                    <div>
                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="7" lg="8">
                                    <div className="mb-3">
                                        <p>
                                            Uno de los motivos por el que la Facultad de Ciencias Biológicas (FCB) se encuentra muy bien posicionada en investigación es la cantidad de laboratorios con los que cuenta y el uso diario que se le da para diversos proyectos de investigación.
                                        </p>
                                        <p>
                                            Incluso, durante la supervisión que realizó la Superintendencia (Sunedu) previo a la entrega del licenciamiento institucional, nuestros laboratorios fueron reconocidos por dicha entidad en su video de saludo a San Marcos.
                                        </p>
                                        <p>
                                            A continuación les presentamos la lista de estos:
                                        </p>
                                        <Tabs className="mb-3" defaultActiveKey="biologia" id="laboratorios-tab">
                                            <Tab className="pt-2" eventKey="biologia" title="Sección Biología Celular y Genética">
                                                <div>
                                                    <ul className="chevron-green-dark">
                                                        <li>Laboratorio de Biología Acuática y Acuicultura (LABAA)</li>
                                                        <li>Laboratorio de Genética Humana</li>
                                                        <li>Laboratorio de Bioquímica de Toxinas Naturales</li>
                                                        <li>Laboratorio de Recursos Genéticos y Biotecnología</li>
                                                        <li>Laboratorio de Citogenética “Luis Alberto Tellería Cáceres”</li>
                                                        <li>Laboratorio de Genética</li>
                                                        <li>Laboratorio de Química de los Alimentos</li>
                                                        <li>Laboratorio de Radiobiología</li>
                                                        <li>Laboratorio de Genética de las Enfermedades Metabólicas</li>
                                                        <li>Laboratorio de Biología Celular</li>
                                                        <li>Laboratorio de Genética Evolutiva</li>
                                                        <li>Laboratorio de Bioquímica</li>
                                                        <li>Laboratorio de Biología Molecular</li>
                                                    </ul>
                                                </div>
                                            </Tab>
                                            <Tab className="pt-2" eventKey="botanica" title="Sección Botánica">
                                                <div>
                                                    <ul className="chevron-green-dark">
                                                        <li>Laboratorio de Taxonomía Vegetal</li>
                                                        <li>Laboratorio de Ficología Marina</li>
                                                        <li>Laboratorio de Plantas Medicinales y Alimenticias</li>
                                                        <li>Laboratorio de Fitología Aplicada</li>
                                                        <li>Laboratorio de Anatomía y Farmacognosia Vegetal</li>
                                                        <li>Laboratorio de Fisiología Vegetal</li>
                                                        <li>Laboratorio de Sistemática de Macroalgas</li>
                                                        <li>Laboratorio de Etnobotánica y Botánica Económica</li>
                                                        <li>Laboratorio de Florística Departamento de Dicotiledóneas</li>
                                                        <li>Laboratorio de Gimnospermas y Monocotiledoneas</li>
                                                    </ul>
                                                </div>
                                            </Tab>
                                            <Tab className="pt-2" eventKey="microbiologia" title="Sección de Microbiología y Parasitología">
                                                <div>
                                                    <ul className="chevron-green-dark">
                                                        <li>Laboratorio de Bioprocesos Industriales</li>
                                                        <li>Laboratorio de Inmunología</li>
                                                        <li>Laboratorio de Micología Aplicada</li>
                                                        <li>Laboratorio de Control de Artrópodos y Vectores (lcav)</li>
                                                        <li>Laboratorio de Microbiología Ambiental y Biotecnología (Limab)</li>
                                                        <li>Laboratorio de Parasitología Humana y Animal (Lapha)</li>
                                                        <li>Laboratorio de Ecología Microbiana</li>
                                                        <li>Laboratorio de Parasitología en Fauna Silvestre y Zoonosis</li>
                                                        <li>Laboratorio de Virología Clínica Molecular</li>
                                                        <li>Laboratorio de Micología</li>
                                                        <li>Laboratorio de Microbiología y Biotecnología Microbiana</li>
                                                        <li>Laboratorio de Microbiología Industrial y Biotecnología Alimentaria</li>
                                                        <li>Laboratorio de Microbiología Molecular y Biotecnología (Labmmb)</li>
                                                        <li>Laboratorio de Fagotipia</li>
                                                        <li>Laboratorio de Control de Calidad de Alimentos, Aguas y Ambientes</li>
                                                    </ul>
                                                </div>
                                            </Tab>
                                            <Tab className="pt-2" eventKey="hidrobiologia" title="Sección Hidrobiología y Pesquería">
                                                <div>
                                                    <ul className="chevron-green-dark">
                                                        <li>Laboratorio de Ecología Molecular y Biodiversidad Acuática</li>
                                                        <li>Laboratorio de Acuicultura y Nutrición de los Organismos Acuáticos</li>
                                                        <li>Laboratorio de Ecología Marina</li>
                                                        <li>Laboratorio de Ictiología</li>
                                                        <li>Laboratorio de Limnología</li>
                                                    </ul>
                                                </div>
                                            </Tab>
                                            <Tab className="pt-2" eventKey="zoologia" title="Sección Zoología">
                                                <div>
                                                    <ul className="chevron-green-dark mb-3">
                                                        <li>Laboratorio de biología de anélidos poliquetos</li>
                                                        <li>Laboratorio de biología y sistemática de invertebrados marinos (Labsim)</li>
                                                        <li>Laboratorio de ecología</li>
                                                        <li>Laboratorio de entomología médica y veterinaria</li>
                                                        <li>Laboratorio de investigaciones dulceacuícolas y de cordados</li>
                                                        <li>Laboratorio de entomología</li>
                                                        <li>Laboratorio de reproducción y biología del desarrollo</li>
                                                        <li>Laboratorio de sistemática molecular y filogeografía</li>
                                                        <li>Servicio de consultoría en áreas marinas someras– Laboratorio de Ecología Intermareal</li>
                                                        <li>Laboratorio de Zoología de Invertebrados</li>
                                                        <li>Laboratorio de Fisiología de la Reproducción Animal (Lfra)</li>
                                                        <li>Laboratorio de Manejo y Conservación de Mamíferos Amazónicos</li>
                                                        <li>Laboratorio de Mastozoología</li>
                                                    </ul>
                                                    <p className="title-dark">
                                                        También contamos con otras dos sedes:
                                                    </p>
                                                    <p>
                                                        Museo de Historia Natural
                                                    </p>
                                                    <p>
                                                        Ivita - Iquitos
                                                    </p>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                        <a className="btn-green-bright" href="/assets/archivos/otros/Brochure_Labs_FCB-ICBAR.pdf" target="_blank">
                                            Ver Brochure
                                        </a>
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

export default index
