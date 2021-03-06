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
                                            Uno de los motivos por el que la Facultad de Ciencias Biol??gicas (FCB) se encuentra muy bien posicionada en investigaci??n es la cantidad de laboratorios con los que cuenta y el uso diario que se le da para diversos proyectos de investigaci??n.
                                        </p>
                                        <p>
                                            Incluso, durante la supervisi??n que realiz?? la Superintendencia (Sunedu) previo a la entrega del licenciamiento institucional, nuestros laboratorios fueron reconocidos por dicha entidad en su video de saludo a San Marcos.
                                        </p>
                                        <p>
                                            A continuaci??n les presentamos la lista de estos:
                                        </p>
                                        <Tabs className="mb-3" defaultActiveKey="biologia" id="laboratorios-tab">
                                            <Tab className="pt-2" eventKey="biologia" title="Secci??n Biolog??a Celular y Gen??tica">
                                                <div>
                                                    <ul className="chevron-green-dark">
                                                        <li>Laboratorio de Biolog??a Acu??tica y Acuicultura (LABAA)</li>
                                                        <li>Laboratorio de Gen??tica Humana</li>
                                                        <li>Laboratorio de Bioqu??mica de Toxinas Naturales</li>
                                                        <li>Laboratorio de Recursos Gen??ticos y Biotecnolog??a</li>
                                                        <li>Laboratorio de Citogen??tica ???Luis Alberto Teller??a C??ceres???</li>
                                                        <li>Laboratorio de Gen??tica</li>
                                                        <li>Laboratorio de Qu??mica de los Alimentos</li>
                                                        <li>Laboratorio de Radiobiolog??a</li>
                                                        <li>Laboratorio de Gen??tica de las Enfermedades Metab??licas</li>
                                                        <li>Laboratorio de Biolog??a Celular</li>
                                                        <li>Laboratorio de Gen??tica Evolutiva</li>
                                                        <li>Laboratorio de Bioqu??mica</li>
                                                        <li>Laboratorio de Biolog??a Molecular</li>
                                                    </ul>
                                                </div>
                                            </Tab>
                                            <Tab className="pt-2" eventKey="botanica" title="Secci??n Bot??nica">
                                                <div>
                                                    <ul className="chevron-green-dark">
                                                        <li>Laboratorio de Taxonom??a Vegetal</li>
                                                        <li>Laboratorio de Ficolog??a Marina</li>
                                                        <li>Laboratorio de Plantas Medicinales y Alimenticias</li>
                                                        <li>Laboratorio de Fitolog??a Aplicada</li>
                                                        <li>Laboratorio de Anatom??a y Farmacognosia Vegetal</li>
                                                        <li>Laboratorio de Fisiolog??a Vegetal</li>
                                                        <li>Laboratorio de Sistem??tica de Macroalgas</li>
                                                        <li>Laboratorio de Etnobot??nica y Bot??nica Econ??mica</li>
                                                        <li>Laboratorio de Flor??stica Departamento de Dicotiled??neas</li>
                                                        <li>Laboratorio de Gimnospermas y Monocotiledoneas</li>
                                                    </ul>
                                                </div>
                                            </Tab>
                                            <Tab className="pt-2" eventKey="microbiologia" title="Secci??n de Microbiolog??a y Parasitolog??a">
                                                <div>
                                                    <ul className="chevron-green-dark">
                                                        <li>Laboratorio de Bioprocesos Industriales</li>
                                                        <li>Laboratorio de Inmunolog??a</li>
                                                        <li>Laboratorio de Micolog??a Aplicada</li>
                                                        <li>Laboratorio de Control de Artr??podos y Vectores (lcav)</li>
                                                        <li>Laboratorio de Microbiolog??a Ambiental y Biotecnolog??a (Limab)</li>
                                                        <li>Laboratorio de Parasitolog??a Humana y Animal (Lapha)</li>
                                                        <li>Laboratorio de Ecolog??a Microbiana</li>
                                                        <li>Laboratorio de Parasitolog??a en Fauna Silvestre y Zoonosis</li>
                                                        <li>Laboratorio de Virolog??a Cl??nica Molecular</li>
                                                        <li>Laboratorio de Micolog??a</li>
                                                        <li>Laboratorio de Microbiolog??a y Biotecnolog??a Microbiana</li>
                                                        <li>Laboratorio de Microbiolog??a Industrial y Biotecnolog??a Alimentaria</li>
                                                        <li>Laboratorio de Microbiolog??a Molecular y Biotecnolog??a (Labmmb)</li>
                                                        <li>Laboratorio de Fagotipia</li>
                                                        <li>Laboratorio de Control de Calidad de Alimentos, Aguas y Ambientes</li>
                                                    </ul>
                                                </div>
                                            </Tab>
                                            <Tab className="pt-2" eventKey="hidrobiologia" title="Secci??n Hidrobiolog??a y Pesquer??a">
                                                <div>
                                                    <ul className="chevron-green-dark">
                                                        <li>Laboratorio de Ecolog??a Molecular y Biodiversidad Acu??tica</li>
                                                        <li>Laboratorio de Acuicultura y Nutrici??n de los Organismos Acu??ticos</li>
                                                        <li>Laboratorio de Ecolog??a Marina</li>
                                                        <li>Laboratorio de Ictiolog??a</li>
                                                        <li>Laboratorio de Limnolog??a</li>
                                                    </ul>
                                                </div>
                                            </Tab>
                                            <Tab className="pt-2" eventKey="zoologia" title="Secci??n Zoolog??a">
                                                <div>
                                                    <ul className="chevron-green-dark mb-3">
                                                        <li>Laboratorio de biolog??a de an??lidos poliquetos</li>
                                                        <li>Laboratorio de biolog??a y sistem??tica de invertebrados marinos (Labsim)</li>
                                                        <li>Laboratorio de ecolog??a</li>
                                                        <li>Laboratorio de entomolog??a m??dica y veterinaria</li>
                                                        <li>Laboratorio de investigaciones dulceacu??colas y de cordados</li>
                                                        <li>Laboratorio de entomolog??a</li>
                                                        <li>Laboratorio de reproducci??n y biolog??a del desarrollo</li>
                                                        <li>Laboratorio de sistem??tica molecular y filogeograf??a</li>
                                                        <li>Servicio de consultor??a en ??reas marinas someras??? Laboratorio de Ecolog??a Intermareal</li>
                                                        <li>Laboratorio de Zoolog??a de Invertebrados</li>
                                                        <li>Laboratorio de Fisiolog??a de la Reproducci??n Animal (Lfra)</li>
                                                        <li>Laboratorio de Manejo y Conservaci??n de Mam??feros Amaz??nicos</li>
                                                        <li>Laboratorio de Mastozoolog??a</li>
                                                    </ul>
                                                    <p className="title-dark">
                                                        Tambi??n contamos con otras dos sedes:
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
                                                ??Te gustar??a participar en un grupo de investigaci??n?
                                            </p>
                                            <ul className="nav flex-column">
                                                <li className="mb-2 text-center font-weight-bold">
                                                    <Link href="/investigacion/grupos-investigacion">
                                                        <a>
                                                            Inf??rmate aqu??
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
