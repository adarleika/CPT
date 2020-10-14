import React from 'react'
import './PortalColaboradores.css'
import flechaHeader from '../../img/flechaHeader.svg'



const PortalColaboradores = () => {
    return (

        <div className="portalColaboradores px-lg-2 pt-2 pb-2">
            <div className="portalColaborador px-lg-5 pt-5 pb-5 mb-5">
                <div className="row">
                    <div className="tituloColaboradores col-md-6 col-sm-6">
                        <h3 className="tituloChicoColaboradores">Colaboradores</h3>
                        <div className="msjColaboradores">
                                <h1>
                                    Contamos con una red de <strong>colaboradores</strong> <br />
                                    que hacen posible nuestro sueño día a día <br />
                                    <strong>Únete a nuestra alianza</strong> 
                            </h1>
                        </div>
                    </div>
                    
            
                </div>
                <div className="flechaHeader">
            <img 
            src={flechaHeader}
            alt="flecha"
            />
            </div>
            </div>
        </div>

    )
}

export default PortalColaboradores
