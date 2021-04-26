import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import {Row, Col, Container, Carousel} from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facultad de Ciencias Biológicas</title>
        <small>test</small>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/c9ebd31bd0.js" crossorigin="anonymous"></script>
      </Head>

      <main>
        <section className="section-principal-home section-eventos">
          <video className="bg-home-video" loop autoplay="true" muted>
            <source src="/assets/video/flower.mp4" type="video/mp4"/>
          </video>
          <div className="wrapper-title-home">
            <Container fluid>
              <Row>
                {/* <Col></Col> */}
                <Col md={{ span: 11, offset: 1 }}>
                  <div className="d-flex align-items-center">
                    <img className="logo-unmsm mr-2" src="/assets/img/iconos/escudo_sanmarcos.png" />
                    <div className="title-letters pl-2">
                      <p className="mb-0">
                        UNMSM
                        <br/>
                        Facultad de
                        <br/>
                        Ciencias Biológicas
                      </p>
                      <div className="wrapper-social">
                        <a href="#" className="mr-3">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="mr-3">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            
          </div>
          <div className="wrapper-eventos">
            <Container fluid>
              <Row>
                <Col md={{ span: 11, offset: 1 }} className="pr-0">
                  <div className="ml-2 pad-extra-left">
                    <div className="d-flex">
                      <h2 className="subtitle-green mr-1 mb-0">Eventos</h2>
                      <a href="#" className="d-inline-block">
                        <img src="/assets/img/iconos/boton_vermas.png"/>
                      </a>
                    </div>
                    <div className="wrapper-just-events">
                      <Container fluid className="px-0">
                        <Row>
                          <Col>
                            <p className="fecha-evento">
                              <span>03 marzo</span>
                              <span className="divisor-text mx-2"></span>
                              <span>3 p.m.</span>
                            </p>
                            <p className="titulo-evento">
                              Conferencia “Microrganismos de la selva central del Perú, un estudio de descubrimiento”
                            </p>
                            <p className="lugar-evento mb-0">
                              Auditorio Tomas Romero-Facultad 3 piso
                            </p>
                          </Col>
                          <Col>
                            <p className="fecha-evento">
                              <span>03 marzo</span>
                              <span className="divisor-text mx-2"></span>
                              <span>3 p.m.</span>
                            </p>
                            <p className="titulo-evento">
                              Conferencia “Microrganismos de la selva central del Perú, un estudio de descubrimiento”
                            </p>
                            <p className="lugar-evento mb-0">
                              Auditorio Tomas Romero-Facultad 3 piso
                            </p>
                          </Col>
                          <Col>
                            <p className="fecha-evento">
                              <span>03 marzo</span>
                              <span className="divisor-text mx-2"></span>
                              <span>3 p.m.</span>
                            </p>
                            <p className="titulo-evento">
                              Conferencia “Microrganismos de la selva central del Perú, un estudio de descubrimiento”
                            </p>
                            <p className="lugar-evento mb-0">
                              Auditorio Tomas Romero-Facultad 3 piso
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <div className="bg-green-png">
          <section className="section-noticias pt-5 mb-5">
            <div>
              <div className="mb-3">
                <Container fluid>
                  <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                      <div className="d-flex justify-content-end">
                        <h2 className="subtitle-green mr-1 mb-0">Noticias</h2>
                        <a href="#" className="d-inline-block">
                          <img src="/assets/img/iconos/boton_vermas.png"/>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <Container fluid>
                <Row>
                  <Col md={{ span: 4, offset: 1 }}>
                    <p className="mb-0">
                      Entérate de las últimas novedades
                    </p>
                    <div className="position-relative box-shadow">
                      <div className="position-relative">
                        <img className="w-100 img-fluid" src="/assets/img/noticias/ejemplo_noticia_1.png"></img>
                        <div className="dark-filter"></div>
                      </div>
                      <div className="caption-img">
                        Max Hidalgo sobre su paso por la FCB: "Aprendí a crear en función de la naturaleza"
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="card-bio">
                      <div className="part-img position-relative">
                        <div className="position-relative">
                          <img className="w-100 img-fluid" src="/assets/img/noticias/noticia2.png"></img>
                          <div className="dark-filter"></div>
                        </div>
                        <div className="badge-tag">
                          Tecnologia
                        </div>
                      </div>
                      <div className="part-text">
                        <p className="title-card">
                          Dos científicas ganan el Premio Nobel de Química 2020 por “tijeras genéticas” CRISPR-Cas9
                        </p>
                        <p className="desc-card mb-0">
                          La francesa Emmanuelle Charpentier y la estadounidense Jennifer Doudna “han reescrito un artículo muy interesante sobre la estructura del...
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="card-bio">
                      <div className="part-img position-relative">
                        <div className="position-relative">
                          <img className="w-100 img-fluid" src="/assets/img/noticias/noticia3.png"></img>
                          <div className="dark-filter"></div>
                        </div>
                        <div className="badge-tag">
                          Ciencia
                        </div>
                      </div>
                      <div className="part-text">
                        <p className="title-card">
                          El objetivo de nuestro proyecto es ir en camino a producir clones de alpacas
                        </p>
                        <p className="desc-card mb-0">
                          La Dra. Martha Valdivia explicó que con su proyecto también se busca ayudar a otras especies peruanas que viven a grandes alturas en nuestro país. El proyecto busca...
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="card-bio">
                      <div className="part-img position-relative">
                        <div className="position-relative">
                          <img className="w-100 img-fluid" src="/assets/img/noticias/noticia4.png"></img>
                          <div className="dark-filter"></div>
                        </div>
                        <div className="badge-tag">
                          Facultad
                        </div>
                      </div>
                      <div className="part-text">
                        <p className="title-card">
                          ¡La FCB ya cuenta oficialmente con un nuevo y moderno pabellón!
                        </p>
                        <p className="desc-card mb-0">
                          La francesa Emmanuelle Charpentier y la estadounidense Jennifer Doudna “han reescrito un artículo muy interesante sobre la estructura del ADN en situaciones de...
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="1"></Col>
                </Row>
              </Container>
            </div>
          </section>
          <section className="section-carreras">
            <div className="mb-2">
              <Container fluid>
                <Row>
                  <Col md={{ span: 10, offset: 1 }}>
                    <div className="big-text text-right">
                      Encuentra tu vocación
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="mb-4">
              <Container fluid>
                <Row>
                  <Col md={{ span: 10, offset: 1 }}>
                    <div className="d-flex">
                      <h2 className="subtitle-green mr-1 mb-0">Carreras</h2>
                      <a href="#" className="d-inline-block">
                        <img src="/assets/img/iconos/boton_vermas.png"/>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div>
              <Container fluid>
                <Row>
                  <Col md={{ span: 10, offset: 1 }}>
                    <div className="wrapper-carreras">
                      <div>
                        <a className="d-block" href="#">
                          <img className="w-100 img-fluid" src="/assets/img/carreras/home/microbiologia_parasitologia_color.png"></img>
                        </a>
                      </div>
                      <div>
                        <a className="d-block" href="#">
                          <img className="w-100 img-fluid" src="/assets/img/carreras/home/genetica_biotecnologia_color.png"></img>
                        </a>
                      </div>
                      <div>
                        <a className="d-block" href="#">
                          <img className="w-100 img-fluid" src="/assets/img/carreras/home/ciencias_biologicas_color.png"></img>
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>
          <section className="section-proyectos">
            <h2 className="mb-0">PROYECTOS</h2>
          </section>
          <section className="section-mision-vision">
            <Container fluid>
                <Row>
                  <Col md={{ span: 6, offset: 1 }}>
                    parte 1
                  </Col>
                  <Col md={{ span: 4 }}>
                    <Carousel fade controls={false}>
                      <Carousel.Item>
                        <h3>Nuestra misión</h3>
                        <p>
                          Formamos profesionales e investigadores líderes en la generación y difusión del conocimiento científico de nuestra diversidad biológica, con valores respetuosos de la diversidad cultural, promotores de la identidad  nacional basada en una cultura de calidad y responsabilidad social para contribuir al desarrollo sostenible del país y la sociedad.
                        </p>
                      </Carousel.Item>
                      <Carousel>
                        <h3>Nuestra visión</h3>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                      </Carousel>
                    </Carousel>
                  </Col>
                </Row>
            </Container>
          </section>
        </div>
      </main>
      <footer>
        <h2 className="mb-0">FOOTER</h2>
      </footer>

    </div>
  )
}
