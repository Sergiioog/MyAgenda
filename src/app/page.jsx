import React from 'react';
import Header from './ui/Header';
import {ImagesSlider} from './ui/image-slider';
import Image from 'next/image';
import Boton from '../app/ui/Button';

export default function Home() {
  
  return (
    <>
    <main className="min-h-screen">
      <Header />
      <section className="min-h-[60vh]">
        <div className='relative max-h-[55vh] h-[55vh] w-full'>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full flex flex-col items-center justify-center p-5">
          <h1 className="h1Titulo mb-[0px] text-center text-white">MyAgenda</h1>
          <h2 className="h2Titulo text-center text-white">Tu app deportiva favorita</h2>
        </div>
          <ImagesSlider
            images={[
              "/assets/fotos/carrusel1.jpeg",
              "/assets/fotos/carrusel2.jpeg",
              "/assets/fotos/carrusel3.jpeg"
            ]}
            autoplay={true}
            direction='up'
          />
        </div>
      </section>
      <section className="min-h-[60vh] flex justify-start items-center flex-col mt-20 max-w-[90%] ml-auto mr-auto">
        <h3 className='h3Titulo  text-white animacionAparecer text-center'>¿Que es MyAgenda?</h3>
        <div className=' w-full h-auto'>
          <p className='pFont text-white mt-6 tracking-tight text-center'>MyAgenda es una aplicación deportiva, pensada para que cualquier usuario de gimnsio
            pueda registrar su progreso con el fin de ganar masa muscular
          </p>
          <p className='pFont text-white mt-8 tracking-tight text-center'>Con nuestro novedoso calendario podrás registrar
          tu actividad y ver tu progeso gracias a nuestro apartado de estadísticas.
          </p>
          <div className=' h-auto w-full flex justify-center items-center mt-8'>

            <Boton texto={"Saber más"} 
                  ancho={220} 
                  alto={50} 
                  borderRadius={10}
                  colorTexto='white'
                  colorFondo='black'
                  colorBorde='white'  
            />
          
          </div>

        </div>
      </section>
    </main></>
  );
}

