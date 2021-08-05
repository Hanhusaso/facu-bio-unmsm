import React from 'react'
import Layout from '../../../components/Layout'
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'

const pregrado = () => {
    return (
        <>
            <Layout title="Historia">
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
                                        {/* <li className="breadcrumb-item">Formación académica</li> */}
                                        <Breadcrumb.Item active>Nosotros: Historia</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Historia</div>
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
                                            Los antecedentes de la actual Facultad de Ciencias Biológicas han estado vinculados a los diferentes cambios en la historia de nuestra Universidad. Se señala como el antecedente más directo al establecimiento del Reglamento para la Universidad de San Marcos, el 28 de agosto de 1861, donde destaca la creación de la Facultad de Matemáticas y Ciencias Naturales, esta posteriormente se nominó Facultad de Ciencias (1876) y que contó entre sus catedráticos al naturalista don Antonio Raimondi Dell'Acqua. En esta época, la cátedra de Historia Natural estaba conformada por las áreas de Mineralogía, Geología, Botánica y Zoología. Siempre dentro de la Facultad de Ciencias, en 1934 fueron reconocidas las secciones de Ciencias Matemáticas, Ciencias Biológicas y Ciencias Físicas con las subsecciones de fisicogeología y fisicoquímica, esta sección de Ciencias Biológicas es la organización primordial de la actual facultad de biología. Llegando a los años 50, nos encontramos con la Escuela Instituto de Ciencias Biológicas (1947), que se encargaba de un plan de estudios de cuatro años de duración y que desarrollaba su actividad de docencia e investigación en los ambientes del Patio de Ciencias de la actual Casona de San Marcos y el Museo de Historia Natural Javier Prado (creado en 1918). Durante este periodo, la enseñanza que se daba estaba dirigida a diversas áreas como medicina, educación, geografía; pero ya a mediados de los años 40 se instauraron los procedimientos para la obtención del bachillerato y el título Profesional de Biólogo, lográndose la primera promoción de biólogos en 1951. En este mismo año, como conmemoración de los 400 años de fundación de la Universidad de San Marcos se adquiere un terreno para construir la nueva Ciudad Universitaria, y ese mismo año se inauguró el Estadio de la Universidad de San Marcos. Sin embargo, recién a mediados de la década de 1960, la Ciudad Universitaria ya construida termina de poblarse efectivamente con 17 facultades. Un conjunto de pabellones dispuestos como una “H” habían sido diseñados para la Facultad de Ciencias, uno de esos pabellones fue destinado a biología. Este pabellón fue poblado poco a poco y usado tanto como laboratorios para clases como para investigación, además de unas pocas y pequeñas oficinas. Cambios en el sistema universitario peruano en 1969 conllevaron a la desaparición de las facultades, las que fueron reorganizadas en Departamentos y Programas Académicos, entre ellos el PA de Ciencias Biológicas, vinculado estrechamente al Departamento de Biología. Los departamentos congregaban a especialistas, y por lo tanto podían estar conformados por diferentes disciplinas, por esto otros departamentos donde se encontraban biólogos también se vincularon de manera importante con el PA de Ciencias Biológicas, entre estos fueron trascendentales los de Bioquímica y Nutrición y Microbiología y Parasitología. Durante este periodo el PA de Ciencias Biológicas, en 1973 inició la formación de profesionales Biólogos con menciones en Genética, Botánica, Biología pesquera, Microbiología y parasitología y Zoología; estas menciones se debían a que entre los 3 y 4 últimos semestres los estudiantes elegían orientaciones con cursos de esas especialidades. A mediados de los 80, otro cambio en política universitaria instauró una nueva organización de facultad y con el Estatuto de la UNMSM de 1984 se estableció la actual Facultad de Ciencias Biológicas, conformada por la Escuela Académico Profesional de Ciencias Biológicas y que mantenía las menciones consideradas desde 1973. En esta nueva facultad se crearon los departamentos de Biología y genética, Botánica, Hidrobiología y pesquería, Microbiología y parasitología y Zoología. Es a principios de los años 2000 que se comienza a organizar nuevas escuelas en la Facultad. En el 2003 se establece la Escuela Académico Profesional de Ciencias Biológicas con las especialidades de Botánica, Zoología e Hidrobiología y pesquería, y poco tiempo después se crean las la EAP de Microbiología y parasitología y la EAP de Genética y biotecnología. Siendo esta la actual estructura organizativa de la Facultad de Ciencias Biológicas, con tres escuelas y cinco departamentos. Otros órganos de la Facultad son la Unidad de Posgrado que desde el año 2000 se encarga de un programa de doctorado y las maestrías, que en la actualidad suman seis. El Instituto de Investigación de Ciencias Biológicas Antonio Raimondi (ICBAR) que fue creado en 1977 y está a cargo de las actividades de investigación como las Reuniones científicas, que se vienen realizando desde 1991 y la Revista Peruana de Biología que se publica desde 1974. En la actualidad, el antiguo edificio que era parte de la desaparecida Facultad de Ciencias es el Pabellón de Investigación de la Facultad, en los años 80 se construyó lo que es el pabellón administrativo, mientras que en el 2005 se inauguró el Pabellón de Docencia, que recientemente (2020) ha sido remodelado y ampliado.
                                        </p>
                                    </div>

                                    {/* <p className="title-dark mb-4">
                                        Galería
                                    </p>

                                    <div className="grid-img-hover mb-4">
                                        <div className="wrapper-img mb-3">
                                            <img className="w-100 img-fluid mb-2" src="/assets/img/noticias/noticias_page_1.png" alt="" />
                                            <div className="name-img text-center">
                                                Galería 1
                                            </div>
                                        </div>
                                        <div className="wrapper-img mb-3">
                                            <img className="w-100 img-fluid mb-2" src="/assets/img/noticias/noticias_page_1.png" alt="" />
                                            <div className="name-img text-center">
                                                Galería 2
                                            </div>
                                        </div>
                                        <div className="wrapper-img mb-3">
                                            <img className="w-100 img-fluid mb-2" src="/assets/img/noticias/noticias_page_1.png" alt="" />
                                            <div className="name-img text-center">
                                                Galería 3
                                            </div>
                                        </div>
                                    </div> */}
                                </Col>
                                <Col md="3" lg="2">
                                    <aside>
                                        <div className="contacto-wrapper mb-3">
                                            <p className="title-dark mb-2">Contacto:</p>
                                            <div className="grid-contacto">
                                                <div>
                                                    <img className="icon mr-2" src="/assets/img/iconos/telefono.svg" alt=""/>
                                                </div>
                                                <div>
                                                    <span>
                                                        +(51) 619 7000 anexo 1501
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mb-0 grid-contacto">
                                                <div>
                                                    <img className="icon mr-2" src="/assets/img/iconos/correo.svg" alt=""/>
                                                </div>
                                                <div>
                                                    <span>
                                                        decanobio@unmsm.edu.pe
                                                    </span>
                                                </div>
                                            </div>
                                            {/* <p className="font-weight-bold mb-1">Horario de atención:</p>
                                            <p className="mb-0">8:00 a.m. - 5:00 p.m.</p> */}
                                        </div>
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
                                        <div className="d-flex mb-3">
                                            <h2 className="subtitle-green mr-1 mb-0">Proyectos</h2>
                                            <a href="/eventos" className="d-inline-block">
                                                <img src="/assets/img/iconos/boton_vermas.png"/>
                                            </a>
                                        </div>
                                        <div>
                                            <div className="card-bio no-grid mb-3">
                                                <div className="part-img position-relative d-none d-md-block">
                                                    <div className="position-relative">
                                                        <img className="w-100 img-fluid" src="/assets/img/noticias/noticia2.png"></img>
                                                        <div className="dark-filter"></div>
                                                    </div>
                                                </div>
                                                <div className="part-text">
                                                    <p className="title-card title mb-0">
                                                        Dos científicas ganan el Premio Nobel de Química 2020 por “tijeras genéticas” CRISPR-Cas9
                                                    </p>
                                                </div>
                                                <div className="part-info">
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                        </span>
                                                        <span>7 de abril de 2021</span>
                                                    </div>
                                                    <div className="date mb-1">
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
                                            </div>
                                            <div className="card-bio no-grid mb-3">
                                                <div className="part-img position-relative d-none d-md-block">
                                                    <div className="position-relative">
                                                        <img className="w-100 img-fluid" src="/assets/img/noticias/noticia3.png"></img>
                                                        <div className="dark-filter"></div>
                                                    </div>
                                                </div>
                                                <div className="part-text">
                                                    <p className="title-card title mb-0">
                                                        El objetivo de nuestro proyecto es ir en camino a producir clones de alpacas
                                                    </p>
                                                </div>
                                                <div className="part-info">
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                        </span>
                                                        <span>7 de abril de 2021</span>
                                                    </div>
                                                    <div className="date mb-1">
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
                                            </div>
                                            <div className="card-bio no-grid mb-3">
                                                <div className="part-img position-relative d-none d-md-block">
                                                    <div className="position-relative">
                                                        <img className="w-100 img-fluid" src="/assets/img/noticias/noticia4.png"></img>
                                                        <div className="dark-filter"></div>
                                                    </div>
                                                </div>
                                                <div className="part-text">
                                                    <p className="title-card title mb-0">
                                                        ¡La FCB ya cuenta oficialmente con un nuevo y moderno pabellón!
                                                    </p>
                                                </div>
                                                <div className="part-info">
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                        </span>
                                                        <span>7 de abril de 2021</span>
                                                    </div>
                                                    <div className="date mb-1">
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
                                            </div>
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

export default pregrado
