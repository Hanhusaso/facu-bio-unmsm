import React from 'react'

const LoaderPage = () => {
    return (
        <div className="wrapper-loader-page">
            <div>
                <div className="mb-3 text-center">
                    <img src="/assets/img/fondo-carga/logo_biologia.svg" alt="" />
                </div>
                <div className="text-white text-center mb-3">
                    Bienvenidos a la
                    <br/>
                    <b>
                        Facultad de
                        <br/>
                        Ciencias Biológicas
                    </b>
                    <br/>
                    {/* <b>Universidad Nacional Mayor de San Marcos</b> */}
                    {/* <b> de la UNMSM</b> */}
                    <b>UNMSM</b>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="ball-pulse">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoaderPage
