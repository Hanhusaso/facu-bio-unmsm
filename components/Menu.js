import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Accordion from 'react-bootstrap/Accordion'
// import { IconName } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as Io5Icons from "react-icons/io5";
import * as HiIcons from "react-icons/hi";



const Menu = () => {

    const [sidebar, setSidebar] = useState(false)
    const [sectionSideBar, setSectionSideBar] = useState("SectionMenu")

    // const showSidebar = () => setSidebar(!sidebar)

    const removeClassBody = () => {
        document.body.classList.remove('menu-open');
    }

    const showSidebar = () => {
        setSidebar(true)
        // document.body.classList.add('menu-open');
    }
    const hideSidebar = () => {
        setSidebar(false)
        // document.body.classList.remove('menu-open');
    }
    const toogleSidebar = () => {
        setSidebar(!sidebar)
        setSectionSideBar("SectionMenu")
    }

    const showSectionMenu = () => {
        showSidebar()
        setSectionSideBar("SectionMenu")
    }

    const showSectionSearch = () => {
        showSidebar()
        setSectionSideBar("SectionSearch")
    }

    const showSectionIntranet = () => {
        showSidebar()
        setSectionSideBar("SectionIntranet")
    }

    useEffect(() => {
        if (sidebar) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    },[sidebar]);

    // Componentes - secciones del sidebar

    const SectionMenu = () => {
        return (
            <>
                <div className="d-flex align-items-center justify-content-between text-white nav-link">
                    <h3 className="title-menu mb-0">MENÚ</h3>
                    <button className="btn-menu-close btn-transparent p-0" onClick={hideSidebar}>
                        <Io5Icons.IoClose className="close-icon icon"/>
                    </button>
                </div>
                <div className="nav-link search-responsive">
                    <input className="search-input" placeholder="Buscar por palabra clave" type="text" />
                </div>
                <div>
                    <Accordion>
                        <div>
                            <div>
                                <Accordion.Toggle className="btn-transparent btn-accordion-nav nav-link" variant="link" eventKey="0">
                                    Formación académica
                                </Accordion.Toggle>
                            </div>
                            <Accordion.Collapse className="wrapper-collapse" eventKey="0">
                                <div>
                                    <ul className="nav flex-column main-sub-navs">
                                        <li className="nav-item">
                                            {/* <Link href="/formacion-academica/admision"> */}
                                                {/* <a className="nav-link">Admisión</a> */}
                                                <a href="/formacion-academica/admision" className="nav-link">Admisión</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/formacion-academica/pregrado"> */}
                                                {/* <a className="nav-link">Pregrado</a> */}
                                                <a href="/formacion-academica/pregrado" className="nav-link">Pregrado</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/formacion-academica/posgrado"> */}
                                                {/* <a className="nav-link">Posgrado</a> */}
                                                <a href="/formacion-academica/posgrado" className="nav-link">Posgrado</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/formacion-academica/educacion-continua"> */}
                                                {/* <a className="nav-link">Eduación continua</a> */}
                                                <a href="/formacion-academica/educacion-continua" className="nav-link">Eduación continua</a>
                                            {/* </Link> */}
                                        </li>
                                    </ul>
                                    <div className="divider-green mx-3"></div>
                                    <div className="interes-links">
                                        <div className="nav-link d-flex align-items-center">
                                            <span className="mr-1">
                                                Enlaces de interés
                                            </span>
                                            <HiIcons.HiExternalLink />
                                        </div>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">SUM</a> */}
                                                    <a href="#" className="nav-link">SUM</a>
                                                {/* </Link> */}
                                            </li>
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">Sistema de bibliotecas</a> */}
                                                    <a href="#" className="nav-link">Sistema de bibliotecas</a>
                                                {/* </Link> */}
                                            </li>
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">Concytec</a> */}
                                                    <a href="#" className="nav-link">Concytec</a>
                                                {/* </Link> */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Accordion.Collapse>
                        </div>
                        <div>
                            <div>
                                <Accordion.Toggle className="btn-transparent btn-accordion-nav nav-link" variant="link" eventKey="1">
                                    Investigación
                                </Accordion.Toggle>
                            </div>
                            <Accordion.Collapse className="wrapper-collapse" eventKey="1">
                                <div>
                                    <ul className="nav flex-column main-sub-navs">
                                        <li className="nav-item">
                                            {/* <Link href="/investigacion/proyectos-investigacion"> */}
                                                {/* <a className="nav-link">Proyectos de la investigación</a> */}
                                                <a href="/investigacion/proyectos-investigacion" className="nav-link">Proyectos de la investigación</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/investigacion/recursos-investigacion"> */}
                                                {/* <a className="nav-link">Recursos para la investigación</a> */}
                                                <a href="/investigacion/recursos-investigacion" className="nav-link">Recursos para la investigación</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/investigacion/biblioteca"> */}
                                                {/* <a className="nav-link">Biblioteca</a> */}
                                                <a href="/investigacion/biblioteca" className="nav-link">Biblioteca</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/investigacion/grupos-investigacion"> */}
                                                {/* <a className="nav-link">Grupos de investigación</a> */}
                                                <a href="/investigacion/grupos-investigacion" className="nav-link">Grupos de investigación</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/investigacion/revista-peruana-biología"> */}
                                                {/* <a className="nav-link">Revista peruana de Biología</a> */}
                                                <a href="/investigacion/revista-peruana-biologia" className="nav-link">Revista peruana de Biología</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/investigacion/instituto-investigaciones-biologicas"> */}
                                                {/* <a className="nav-link">Instituto de investigaciones biológicas</a> */}
                                                <a href="/investigacion/instituto-investigaciones-biologicas" className="nav-link">Instituto de investigaciones biológicas</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/investigacion/instituto-investigaciones-biologicas"> */}
                                                {/* <a className="nav-link">Instituto de investigaciones biológicas</a> */}
                                                <a href="/investigacion/antonio-raimondi" className="nav-link">Instituto de Investigación de Ciencias Biológicas "Antonio Raimondi" - ICBAR</a>
                                            {/* </Link> */}
                                        </li>
                                    </ul>
                                    <div className="divider-green mx-3"></div>
                                    <div className="interes-links">
                                        <div className="nav-link d-flex align-items-center">
                                            <span className="mr-1">
                                                Enlaces de interés
                                            </span>
                                            <HiIcons.HiExternalLink />
                                        </div>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">Registro de actividades de investigación de San Marcos (RAIS)</a> */}
                                                    <a href="#" className="nav-link">Registro de actividades de investigación de San Marcos (RAIS)</a>
                                                {/* </Link> */}
                                            </li>
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">Sistema de información de la investigación en San Marcos (SII)</a> */}
                                                    <a href="#" className="nav-link">Sistema de información de la investigación en San Marcos (SII)</a>
                                                {/* </Link> */}
                                            </li>
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">Vicerrectorado de investigación de Posgrado</a> */}
                                                    <a href="#" className="nav-link">Vicerrectorado de investigación de Posgrado</a>
                                                {/* </Link> */}
                                            </li>
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">Museo de Historia Natural UNMSM</a> */}
                                                    <a href="#" className="nav-link">Museo de Historia Natural UNMSM</a>
                                                {/* </Link> */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Accordion.Collapse>
                        </div>
                        <div>
                            <div>
                                <Accordion.Toggle className="btn-transparent btn-accordion-nav nav-link" variant="link" eventKey="2">
                                    Noticias y eventos
                                </Accordion.Toggle>
                            </div>
                            <Accordion.Collapse className="wrapper-collapse" eventKey="2">
                                <div>
                                    <ul className="nav flex-column main-sub-navs">
                                        <li className="nav-item">
                                            {/* <Link href="/noticias-y-eventos/noticias"> */}
                                                {/* <a className="nav-link">Noticias</a> */}
                                                <a href="/noticias" className="nav-link">Noticias</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/eventos"> */}
                                                {/* <a className="nav-link">Eventos</a> */}
                                                <a href="/eventos" className="nav-link">Eventos</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/articulos"> */}
                                                {/* <a className="nav-link">Artículos</a> */}
                                                <a href="/articulos" className="nav-link">Artículos</a>
                                            {/* </Link> */}
                                        </li>
                                    </ul>
                                    <div className="divider-green mx-3"></div>
                                    <div className="interes-links">
                                        <div className="nav-link d-flex align-items-center">
                                            <span className="mr-1">
                                                Enlaces de interés
                                            </span>
                                            <HiIcons.HiExternalLink />
                                        </div>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">RTV San Marcos</a> */}
                                                    <a href="#" className="nav-link">RTV San Marcos</a>
                                                {/* </Link> */}
                                            </li>
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">San Marcos al Día</a> */}
                                                    <a href="#" className="nav-link">San Marcos al Día</a>
                                                {/* </Link> */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Accordion.Collapse>
                        </div>
                        <div>
                            <div>
                                <Accordion.Toggle className="btn-transparent btn-accordion-nav nav-link" variant="link" eventKey="3">
                                    Comunidad
                                </Accordion.Toggle>
                            </div>
                            <Accordion.Collapse className="wrapper-collapse" eventKey="3">
                                <div>
                                    <ul className="nav flex-column main-sub-navs">
                                        <li className="nav-item">
                                            {/* <Link href="/comunidad/conoce-la-facultad"> */}
                                                {/* <a className="nav-link">Conoce la facultad</a> */}
                                                <a href="/comunidad/conoce-la-facultad" className="nav-link">Conoce la facultad</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/comunidad/cerseus"> */}
                                                {/* <a className="nav-link">Cerseus</a> */}
                                                <a href="/comunidad/cerseus" className="nav-link">Cerseus</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/comunidad/testimonios"> */}
                                                {/* <a className="nav-link">Testimonios</a> */}
                                                <a href="/comunidad/testimonios" className="nav-link">Testimonios</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/comunidad/proyectos"> */}
                                                {/* <a className="nav-link">Proyectos de la comunidad</a> */}
                                                <a href="/comunidad/proyectos" className="nav-link">Proyectos de la comunidad</a>
                                            {/* </Link> */}
                                        </li>
                                    </ul>
                                    <div className="divider-green mx-3"></div>
                                    <div className="interes-links">
                                        <div className="nav-link d-flex align-items-center">
                                            <span className="mr-1">
                                                Enlaces de interés
                                            </span>
                                            <HiIcons.HiExternalLink />
                                        </div>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">Comunidad UNMSM</a> */}
                                                    <a href="#" className="nav-link">Comunidad UNMSM</a>
                                                {/* </Link> */}
                                            </li>
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">Dirección General de Responsabilidad social</a> */}
                                                    <a href="#" className="nav-link">Dirección General de Responsabilidad social</a>
                                                {/* </Link> */}
                                            </li>
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">Oficina General de Bienestar universitaria</a> */}
                                                    <a href="#" className="nav-link">Oficina General de Bienestar universitaria</a>
                                                {/* </Link> */}
                                            </li>
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">Centro de Producción Editorial e Imprenta (CEPREDIM)</a> */}
                                                    <a href="#" className="nav-link">Centro de Producción Editorial e Imprenta (CEPREDIM)</a>
                                                {/* </Link> */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Accordion.Collapse>
                        </div>
                        <div>
                            <div>
                                <Accordion.Toggle className="btn-transparent btn-accordion-nav nav-link" variant="link" eventKey="4">
                                    Nosotros
                                </Accordion.Toggle>
                            </div>
                            <Accordion.Collapse className="wrapper-collapse" eventKey="4">
                                <div>
                                    <ul className="nav flex-column main-sub-navs">
                                        <li className="nav-item">
                                            {/* <Link href="/nosotros/historia"> */}
                                                {/* <a className="nav-link">Historia</a> */}
                                                <a href="/nosotros/historia" className="nav-link">Historia</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/nosotros/autoridades-y-organos-de-gobierno"> */}
                                                {/* <a className="nav-link">Autoridades y órganos de gobierno</a> */}
                                                <a href="/nosotros/autoridades" className="nav-link">Autoridades y órganos de gobierno</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/nosotros/institucion-y-organizacion"> */}
                                                {/* <a className="nav-link">Institución y organización</a> */}
                                                <a href="/nosotros/institucion-y-organizacion" className="nav-link">Institución y organización</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/nosotros/oficinas"> */}
                                                {/* <a className="nav-link">Oficinas</a> */}
                                                <a href="/nosotros/oficinas" className="nav-link">Oficinas</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/nosotros/consejo-de-facultad"> */}
                                                {/* <a className="nav-link">Consejo de facultad</a> */}
                                                <a href="/nosotros/consejo-de-facultad" className="nav-link">Consejo de facultad</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/nosotros/normativa"> */}
                                                {/* <a className="nav-link">Normativa y documentos de interés</a> */}
                                                <a href="/nosotros/normativa" className="nav-link">Normativa y documentos de interés</a>
                                            {/* </Link> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Link href="/nosotros/transparencia"> */}
                                                {/* <a className="nav-link">Transparencia</a> */}
                                                <a href="/nosotros/transparencia" className="nav-link">Transparencia</a>
                                            {/* </Link> */}
                                        </li>
                                    </ul>
                                    <div className="divider-green mx-3"></div>
                                    <div className="interes-links">
                                        <div className="nav-link d-flex align-items-center">
                                            <span className="mr-1">
                                                Enlaces de interés
                                            </span>
                                            <HiIcons.HiExternalLink />
                                        </div>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">Oficina Central de la calidad académica y acreditación</a> */}
                                                    <a href="#" className="nav-link">Oficina Central de la calidad académica y acreditación</a>
                                                {/* </Link> */}
                                            </li>
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">Secretaría general</a> */}
                                                    <a href="#" className="nav-link">Secretaría general</a>
                                                {/* </Link> */}
                                            </li>
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">Comisión revisora del estatuto</a> */}
                                                    <a href="#" className="nav-link">Comisión revisora del estatuto</a>
                                                {/* </Link> */}
                                            </li>
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">Comité electoral</a> */}
                                                    <a href="#" className="nav-link">Comité electoral</a>
                                                {/* </Link> */}
                                            </li>
                                            <li className="nav-item">
                                                {/* <Link href="#"> */}
                                                    {/* <a className="nav-link">Sistema de Control interno</a> */}
                                                    <a href="#" className="nav-link">Sistema de Control interno</a>
                                                {/* </Link> */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Accordion.Collapse>
                        </div>
                    </Accordion>
                </div>
            </>
        )
    }
    
    const SectionSearch = () => {
        return (
            <>
                <div className="d-flex align-items-center justify-content-between text-white nav-link">
                    <h3 className="title-menu mb-0">BÚSQUEDA</h3>
                    <button className="btn-search-close btn-transparent p-0" onClick={hideSidebar}>
                        <Io5Icons.IoClose className="close-icon icon"/>
                    </button>
                </div>
                <div className="nav-link">
                    <input className="search-input" placeholder="Buscar por palabra clave" type="text" />
                </div>
            </>
        )
    }
    
    const SectionIntranet = () => {
        return (
            <>
                <div className="d-flex align-items-center justify-content-between text-white nav-link">
                    <h3 className="title-menu mb-0">INTRANET</h3>
                    <button className="btn-intranet-close btn-transparent p-0" onClick={hideSidebar}>
                        <Io5Icons.IoClose className="close-icon icon"/>
                    </button>
                </div>
                <div>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            {/* <Link href="#"> */}
                                {/* <a className="nav-link btn-accordion-nav">Correo institucional</a> */}
                                <a href="#" className="nav-link btn-accordion-nav">Correo institucional</a>
                            {/* </Link> */}
                        </li>
                        <li className="nav-item">
                            {/* <Link href="#"> */}
                                {/* <a className="nav-link btn-accordion-nav">Sistema único de matrícula (SUM)</a> */}
                                <a href="#" className="nav-link btn-accordion-nav">Sistema único de matrícula (SUM)</a>
                            {/* </Link> */}
                        </li>
                        <li className="nav-item">
                            {/* <Link href="#"> */}
                                {/* <a className="nav-link btn-accordion-nav">Aula Virtual (OEV)</a> */}
                                <a href="#" className="nav-link btn-accordion-nav">Aula Virtual (OEV)</a>
                            {/* </Link> */}
                        </li>
                    </ul>
                </div>
            </>
        )
    }

    return (
        <div className="">
            <div className="pos-toogle-btn">
                <button className={sidebar ? "toogle-btn-menu open menu-bars btn-transparent" : "toogle-btn-menu menu-bars btn-transparent"} onClick={toogleSidebar}>
                    {/* <FaIcons.FaBars className="icon"/> */}
                    {/* <img src="/assets/img/iconos/hamburguesa.png" alt="" /> */}
                    <div className="menu-btn-bars"></div>
                </button>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <div className="navbar-toogle">
                    <button className="menu-bars btn-transparent" onClick={showSectionMenu}>
                        {/* <FaIcons.FaBars className="icon"/> */}
                        <img src="/assets/img/iconos/hamburguesa.png" alt="" />
                    </button>
                    <button className="menu-search btn-transparent" onClick={showSectionSearch}>
                        {/* <FaIcons.FaSearch className="icon"/> */}
                        <img src="/assets/img/iconos/lupita_buscador.png" alt="" />
                    </button>
                    <button className="menu-user btn-transparent" onClick={showSectionIntranet}>
                        {/* <FaIcons.FaRegUser className="icon"/> */}
                        <img src="/assets/img/iconos/intranet.png" alt="" />
                    </button>
                </div>

                <div className="wrapper-navs">

                    <div className="wrapper-sections">
                        {sectionSideBar === "SectionMenu" && <SectionMenu />}
                        {sectionSideBar === "SectionSearch" && <SectionSearch />}
                        {sectionSideBar === "SectionIntranet" && <SectionIntranet />}
                    </div>

                    <div className="extra-links">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                {/* <Link href="/tramites-y-procesos"> */}
                                    {/* <a className="nav-link">Trámites y procesos</a> */}
                                    <a href="/tramites-y-procesos" className="d-flex align-items-center nav-link">
                                        <img className="mr-3" src="/assets/img/iconos/tramites_procesos.svg" alt="" />
                                        <span>
                                            Trámites y procesos
                                        </span>
                                    </a>
                                {/* </Link> */}
                            </li>
                            <li className="nav-item">
                                {/* <Link href="/informacion-academica"> */}
                                    {/* <a className="nav-link">Información académica</a> */}
                                    <a href="/informacion-academica" className="d-flex align-items-center nav-link">
                                        <img className="mr-3" src="/assets/img/iconos/informacion_academica.svg" alt="" />
                                        <span>
                                            Información académica
                                        </span>
                                    </a>
                                {/* </Link> */}
                            </li>
                            <li className="nav-item">
                                {/* <Link href="/revista-peruana-biologia"> */}
                                    {/* <a className="nav-link">Revista Peruana de biología</a> */}
                                    <a href="/investigacion/revista-peruana-biologia" className="d-flex align-items-center nav-link">
                                        <img className="mr-3" src="/assets/img/iconos/revista_peruana.svg" alt="" />
                                        <span>
                                            Revista Peruana de biología
                                        </span>
                                    </a>
                                {/* </Link> */}
                            </li>
                            <li className="nav-item">
                                {/* <Link href="/recursos-investigacion"> */}
                                    {/* <a className="nav-link">Recursos de investigación</a> */}
                                    <a href="/recursos-investigacion" className="d-flex align-items-center nav-link">
                                        <img className="mr-3" src="/assets/img/iconos/recursos_investigacion.svg" alt="" />
                                        <span>
                                            Recursos de investigación
                                        </span>
                                    </a>
                                {/* </Link> */}
                            </li>
                        </ul>
                    </div>

                    <div className="intranet-responsive">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Correo institucional</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sistema único de matrícula (SUM)</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Aula Virtual (OEV)</a>
                            </li>
                        </ul>
                    </div>

                    <div className="menu-social-media my-3">
                        <ul className="nav flex-row mx-4">
                            <li>
                                <a href="#">
                                    <FaIcons.FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaIcons.FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaIcons.FaYoutube />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <div className="menu-overlay"></div>
        </div>
    )
}

export default Menu
