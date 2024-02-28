import React from 'react';
import Header from './ui/Header';
import {ImagesSlider} from './ui/image-slider';
import Image from 'next/image';

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
        <h3 className='h3Titulo  text-white animacionAparecer'>¿Que es MyAgenda?</h3>
        <div className=' w-full h-auto'>
          <p className='text-white mt-2 text-lg tracking-tight text-center'>MyAgenda es una aplicación deportiva, pensada para que cualquier usuario de gimnsio
            pueda registrar su progreso con el fin de ganar masa muscular
          </p>
        </div>
      </section>
    </main></>
  );
}

