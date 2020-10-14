import React from 'react'
import cava from '../../img/cava.png';
import aurora from '../../img/aurora.png';
import comedor from '../../img/comedor.png';
import foodies from '../../img/foodies.png';
import restaurante from '../../img/99restaurante.jpg'
import ambrosiaBistro from '../../img/ambrosiaBistro.jpg'
import boa from '../../img/boa.png'
import cafeSanJuan from '../../img/cafeSanJuan.png'
import caperucitaLobo from '../../img/caperucitaLobo.png'
import colab from '../../img/colab.png'
import cultiva from '../../img/cultiva.png'
import elContenedor from '../../img/elContenedor.jpg'
import estudioEnoki from '../../img/estudioEnoki.jpg'
import fundacionGastronomiaSocial from '../../img/fundacionGastronomiaSocial.png'
import laChimba from '../../img/laChimba.png'
import land from '../../img/land.jpeg'
import lasCondenadas from '../../img/lasCondenadas.jpeg'
import manoChef from '../../img/manoChef.jpg'
import muniAntofagasta from '../../img/muniAntofagasta.png'
import niam from '../../img/niam.png'
import nossoPrato from '../../img/nossoPrato.jpeg'
import pebre from '../../img/pebre.png'
import puertoClaro from '../../img/puertoClaro.png'
import rossoNero from '../../img/rossoNero.png'
import socialGastronomy from '../../img/socialGastronomy.png'
import tallerMacera from '../../img/tallerMacera.png'
import tele13 from '../../img/tele13.jpg'

import './ColaboradoresPortal.css'


const ColaboradoresPortal = () => {
    return (

        <div className="contenedorColaboradores pt-5">

            <div className="main-container px-lg-5 pt-5 pb-5 mb-5">
                <div className="row">
                    <div className="mensajeColaboradores">
                        <h1> Nuestros <strong> Colaboradores</strong></h1>
                        <p>
                            Más de 20 emprendimientos se han unido a la familia de Comida <br />
                            Para Todos, apoyando desde distintas áreas: <strong>la comunicación, la <br />
                            organización</strong> y <strong>la gastronomía.</strong>
                            </p>
                    </div>

                </div>

            </div>
            <div className="losColaboradores">
                <img src={cava} alt="" width="110px" height="110px" />
                <img src={aurora} alt="" width="110px" height="110px" />
                <img src={comedor} alt="" width="110px" height="110px" />
                <img src={foodies} alt="" width="110px" height="110px" />
                <img src={restaurante} alt="" width="110px" height="110px" />
                <img src={ambrosiaBistro} alt="" width="110px" height="110px" />
                <img src={boa} alt="" width="110px" height="110px" />
                <img src={cafeSanJuan} alt="" width="110px" height="110px" />
                <img src={colab} alt="" width="110px" height="110px" />
                <img src={caperucitaLobo} alt="" width="110px" height="110px" />
            </div>
            <div className="losColaboradores">
                <img src={cultiva} alt="" width="110px" height="110px" />
                <img src={elContenedor} alt="" width="110px" height="110px" />
                <img src={land} alt="" width="110px" height="110px" />
                <img src={laChimba} alt="" width="110px" height="110px" />
                <img src={lasCondenadas} alt="" width="110px" height="110px" />
                <img src={manoChef} alt="" width="110px" height="110px" />
                <img src={muniAntofagasta} alt="" width="110px" height="110px" />
                <img src={niam} alt="" width="110px" height="110px" />
                <img src={nossoPrato} alt="" width="110px" height="110px" />
                <img src={pebre} alt="" width="110px" height="110px" />
            </div>
            <div className="losColaboradoresDos">

                <img src={rossoNero} alt="" width="110px" height="110px" />
                <img src={puertoClaro} alt="" width="110px" height="110px" />
                <img src={socialGastronomy} alt="" width="110px" height="110px" />
                <img src={tallerMacera} alt="" width="110px" height="110px" />
                <img src={tele13} alt="" width="110px" height="110px" />
                <img src={estudioEnoki} alt="" width="110px" height="110px" />
                <img src={fundacionGastronomiaSocial} alt="" width="110px" height="110px" />

            </div>

        </div>

    )
}

export default ColaboradoresPortal
