import React , { useState , useEffect } from 'react'
import { Loader } from 'semantic-ui-react'
import { useRouter } from "next/router";
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb, Spinner} from 'react-bootstrap'
import Link from 'next/link';
import { size } from "lodash";
import {getNoticiaByUrlApi, updateVisitasNoticiaApi} from '../../api/noticias';
import NoticiasExtra from "../../../components/NoticiasExtra"

const noticia = () => {

    const { query } = useRouter();

    const currentUrlNoticia = query.titulo;
    const [loading, setLoading] = useState(true);
    const [sinResultados, setSinResultados] = useState(false);
    const [noticia, setNoticia] = useState(false);

    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    function getCookie(cname) {
        var name = cname + "=";
        // console.log(document.cookie);
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }

    useEffect(() => {
        if (!query) {
            return;
        }
        (async () => {
          setLoading(true);
          setSinResultados(false);
          const response = await getNoticiaByUrlApi(currentUrlNoticia);
          if(size(response) == 0){
            // setSinResultados(true);
          }
          else{
            setNoticia(response[0]);
            var cnoticia = getCookie("noticia"+response[0].id);

            if(cnoticia == ""){
                document.cookie = "noticia"+response[0].id+"="+response[0].id;
                const response_update_visitas = await updateVisitasNoticiaApi(response[0].id, response[0].visitas);
            }
            setLoading(false);
            // setSinResultados(false);
          }

        //   const response_noticias_ultimas = await getNoticiasUltimasApi();

          window.scrollTo(0, 0);
        })();
    }, [query]);

    return (
        <>
            <Layout title="Noticia">
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
                                            {/* <Breadcrumb.Item> */}
                                            <li className="breadcrumb-item">
                                                <Link href="/">
                                                    <a role="button">Inicio</a>
                                                </Link>
                                            </li>
                                            {/* </Breadcrumb.Item> */}
                                            {/* <Breadcrumb.Item active>Formación académica</Breadcrumb.Item> */}
                                            <li className="breadcrumb-item">
                                                <Link href="/noticias">
                                                    <a role="button">Noticias</a>
                                                </Link>
                                            </li>
                                            <Breadcrumb.Item active>{noticia.titulo}</Breadcrumb.Item>
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
                                        <div className="title-page mb-2">{noticia.titulo}</div>
                                        {/* <div className="sub-title text-center">Egresada de la E.P. Microbiología y Parasitología </div> */}
                                        <div className="d-flex justify-content-between">
                                            <div className="date">
                                                <span>
                                                    <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                </span>
                                                <span>{new Date(noticia.fecha).getDate()} de {months[new Date(noticia.fecha).getMonth()]} de {new Date(noticia.fecha).getFullYear()}</span>
                                            </div>
                                            <div className="date">
                                                <span>
                                                    <img width="22px" className="mr-2" src="/assets/img/iconos/vistas.svg" alt="" />
                                                </span>
                                                <span>{noticia.visitas} vistas</span>
                                            </div>
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
                                        <div className="d-flex justify-content-center mb-4">
                                            <img className="img-fluid" src={noticia.imagen_detalle ? noticia.imagen_detalle[0].url : ''} alt="" />
                                        </div>
                                        
                                        <div dangerouslySetInnerHTML={{ __html: noticia.cuerpo }} />

                                        {/* <p>
                                            Una comitiva de investigadores en neurociencias cognitivas de Bolivia visitó la tarde de este martes 22 de octubre, la escuela profesional de Genética y Biotecnología de la Facultad de Ciencias Biológicas (FCB) de la UNMSM, para conocer los proyectos que se vienen realizando en los laboratorios relacionados a Genética Humana.
                                        </p>
                                        <p>
                                            La Dra. Ninoska Ocampo Barba, directora del Instituto de Neurociencias Cognitivas de la Universidad Autónoma Gabriel René Moreno de Bolivia presidió dicha comitiva integrada por más de 30 profesionales e investigadores.​
                                        </p>
                                        <p>
                                            “Estamos muy interesados en la parte de la genética humana porque las neurociencias no van a desarrollar si nosotros solo nos ocupamos de la parte visible que es el comportamiento y dejamos de lado la parte dura que es la ciencia fundamental y tiene que ver con la biología del ser humano”, manifestó Ocampo Barba, tras precisar que en Bolivia no existe una carrera de Genética, solo una mención en ella desde la carrera de Bioquímica de la Universidad Mayor de San Andrés (La Paz).
                                        </p>
                                        <p>
                                            La doctora Ninoska señaló que tenían una férrea intención de conocer lo que se viene realizando en la escuela de Genética de nuestra facultad, “consideramos que la mejor manera en Latinoamérica de avanzar es aplaudiendo, imitando y sumándonos a las buenas cosas que ya se están haciendo para que nuestra mirada sea primero al vecino más próximo y de una manera fortalecida comenzar a mirar más allá de América Latina”, acotó.
                                        </p>
                                        <p>
                                            De otro lado, dijo que América Latina tiene mucha potencialidad porque aquí hay posibilidades aún de hacer estudios vírgenes, ya que en el Viejo Mundo hay muy poco que se pueda hacer por primera vez. Ello luego de explicar una reunión de decanos que tuvo en su país con representantes de universidades españolas.
                                        </p>
                                        <p>
                                            “Hoy los latinoamericanos tenemos la gran posibilidad de comenzar a realizar cosas innovadoras y este es el propósito de esta visita a su prestigiosa Facultad, imitar todas esas cosas buenas que ustedes vienen haciendo para tener la posibilidad de realizar un trabajo en conjunto”, precisó.
                                        </p>
                                        <p>
                                            Por su parte, el profesor Alberto López Sotomayor, director (e) de la Escuela Profesional de Genética y Biotecnología, expresó su agradecimiento a los investigadores bolivianos por haber elegido la escuela de nuestra Facultad para llevar a cabo esta visita académica.
                                        </p>
                                        <div class="title mb-3">Datos</div>
                                        <ul class="chevron-green mb-3">
                                            <li>El 4 de octubre último, la Facultad de Ciencias Biológicas de la UNMSM superó con éxito el proceso de auditoría externa con Bureau Veritas, quedando expedita para su acreditación internacional con ABET.</li>
                                            <li>El alcance de la certificación es: planificación, enseñanza, formación, evaluación, promoción de la investigación y de la responsabilidad social en pregrado para otorgar el título como Biólogo con mención en Botánica, Hidrobiología y Pesquería, Zoología; Biólogo Genetista y Biotecnólogo y Biólogo Microbiólogo Parasitólogo.</li>
                                        </ul> */}
                                        
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
                                            <NoticiasExtra 
                                                idNoticiaDetalle = {noticia.id} 
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
                    // <div style={{
                    //     color: "#39556f",
                    //     fontFamily: "Calibri",
                    //     fontWeight: "bold",
                    //     fontSize: "15px",
                    //     marginTop: "27rem",
                    //     marginLeft: "80rem",
                    // }}>
                    //     No se encontró resultados
                    //     {/* <SinResultados /> */}
                    // </div>
                )}
            </Layout>
        </>
    )
}

export default noticia
