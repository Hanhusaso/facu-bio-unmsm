import React from 'react'

const InformacionAcademica = () => {
    return (
        <div className="block-interest-links mb-3">
            <p className="font-weight-bold mb-2">Información académica</p>
            <ul className="nav flex-column">
                <li className="mb-2">
                    <a href="/informacion-academica?recurso=malla-curricular" target="_blank">
                        Plan de estudios
                    </a>
                </li>
                {/* <li className="mb-2">
                    <Link href="/informacion-academica?recurso=informacion-de-docentes">
                        <a>
                            Plana docente
                        </a>
                    </Link>
                </li> */}
                <li className="mb-2">
                    <a href="/informacion-academica?recurso=syllabus" target="_blank">
                        Syllabus
                    </a>
                </li>
                <li className="mb-0">
                    <a href="/informacion-academica?recurso=horarios" target="_blank">
                        Horarios
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default InformacionAcademica
