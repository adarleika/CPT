import React from 'react'
import { Carousel } from 'react-bootstrap';
import carousel from '../../img/carousel.jpg';
import './Carrusel.css';
import ComidaParaTodosGif3 from '../../img/ComidaParaTodosGif3.gif';
import flechaHeader from '../../img/flechaHeader.svg';

const Carrusel = () => {

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="imagenCarrusel"
            src={ComidaParaTodosGif3}
            alt="slideGif"
          />
          <Carousel.Caption className="carouselMensaje" >
            <div class="container ">
            <p className="tituloPequeño">Comida Para Todos</p>
              <p className="tituloCentral">Dona un <strong>almuerzo</strong> por solo <strong>$3.000 CLP</strong>. Escribamos juntos <strong>la receta para </strong></p>
              <p className="tituloCentral"><strong>un mejor país</strong></p>
              <button type="button" className="btnCarrusel" >
                Donar una Cena Navideña
              </button>
            </div>
            <div className="flechaHeader">
            <img 
            src={flechaHeader}
            alt="flecha"
            />
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="imagenCarrusel2"
            src={carousel}
            alt="Second slide"
          />
          <Carousel.Caption className="carouselMensaje" >
            <div class="container ">
              <p className="tituloPequeño">Comida Para Todos</p>
              <p className="tituloCentral">Regala una cena en esta <strong>Navidad</strong> </p>
              <p className="tituloCentral">por solo <strong>$5.000 CLP</strong></p>
                <button type="button" className="btnCarrusel" >
                  Donar una Cena Navideña
              </button>
              
            </div>
            <div className="flechaHeader">
            <img 
            src={flechaHeader}
            alt="flecha"
            />
            </div>
          </Carousel.Caption>
          
        </Carousel.Item>

       
        
     

      </Carousel>
      

    </div>
  )
}

export default Carrusel
