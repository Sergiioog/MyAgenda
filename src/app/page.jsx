import React from 'react';
import Header from './ui/Header';
import {ImagesSlider} from './ui/image-slider';
import Image from 'next/image';
import Boton from '../app/ui/Button';
import { BentoGrid, BentoGridItem } from '../app/ui/bento-grid'; // Importamos BentoGrid y BentoGridItem
import { IconClipboardCopy,IconFileBroken,IconSignature,IconTableColumn } from "@tabler/icons-react";
import {InfiniteMovingCards} from '../app/ui/infinite-moving-cards'

export default function Home() {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );
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
      <section className="min-h-[60vh] flex justify-start items-center flex-col mt-10 max-w-[90%] ml-auto mr-auto">
        <h3 className='h3Titulo  text-white animacionAparecer text-center'>Nuestras Funciones</h3>
        <div className=' w-full h-auto mt-16'>
            <BentoGrid>
            <BentoGridItem
            title="Agenda para guardar tus resultados"
            description="Con nuestra agenda llevaras un registro controlado de tus actividades físicas que te ayudarán a conseguir
            tus objetivos"
            header={
              <div style={{ position: "relative", width: "100%", height: "100%" , maxWidth:"100%" }}>
                <Image
                  src="/assets/fotos/bento1.jpeg"
                  alt="Imagen 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            }
            className="md:col-span-2"
            icon={<IconClipboardCopy className="h-4 w-4 text-neutral-500" />}
          />
              <BentoGridItem
                title="Plan de ejercicios"
                description="Encontrarás un gran catálogo de tutoriales de ejercicios"
                header={
              <div style={{ position: "relative", width: "100%", height: "100%" , maxWidth:"100%" }}>
                <Image
                  src="/assets/fotos/bento1.jpeg"
                  alt="Imagen 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            }
                className="md:col-span-1"
                icon={<IconFileBroken className="h-4 w-4 text-neutral-500" />}
              />
              <BentoGridItem
                title="Plan de estiramientos"
                description="Encontrarás un gran catálogo de tutoriales de estiramientos"
                header={
              <div style={{ position: "relative", width: "100%", height: "100%" , maxWidth:"100%" }}>
                <Image
                  src="/assets/fotos/bento1.jpeg"
                  alt="Imagen 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            }
                className="md:col-span-1"
                icon={<IconSignature className="h-4 w-4 text-neutral-500" />}
              />
              <BentoGridItem
                title="Estadísticas del usuario"
                description="A medida que vayas completando registros, se generarán estadísticas
                automáticamente que te ayudarán a conseguir tu objetivo."
                header={
              <div style={{ position: "relative", width: "100%", height: "100%" , maxWidth:"100%" }}>
                <Image
                  src="/assets/fotos/bento1.jpeg"
                  alt="Imagen 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            }
                className="md:col-span-2"
                icon={<IconTableColumn className="h-4 w-4 text-neutral-500" />}
              />
            </BentoGrid>
        </div>
      </section>
      <section className="min-h-[60vh] flex justify-start items-center flex-col mt-20 max-w-[90%] ml-auto mr-auto">
        <h3 className='h3Titulo  text-white animacionAparecer text-center'>Por qué MyAgenda</h3>
        <div className=' w-full h-auto mt-16'>
           <InfiniteMovingCards
             items={[
              { 
                quote: "Me encanta esta aplicación, me motiva a hacer ejercicio todos los días y llevar un registro de mi progreso.", 
                name: "Ana", 
                title: "Usuario feliz" 
              },
              { 
                quote: "La aplicación tiene una gran variedad de rutinas de ejercicio para todos los niveles, ¡la recomiendo totalmente!", 
                name: "Juan", 
                title: "Entusiasta del fitness" 
              },
              { 
                quote: "Es genial poder ver mis estadísticas de ejercicio y ver cómo he mejorado con el tiempo, definitivamente ha cambiado mi vida.", 
                name: "María", 
                title: "Adicta al gimnasio" 
              },
              { 
                quote: "Esta aplicación me ha ayudado a mantenerme en forma sin necesidad de ir al gimnasio, ¡es como tener un entrenador personal en mi bolsillo!", 
                name: "Pedro", 
                title: "Entrenamiento en casa" 
              },
              { 
                quote: "Nunca fui fanático del ejercicio, pero con esta aplicación ha sido mucho más fácil mantenerme motivado y comprometido con mi salud.", 
                name: "Luisa", 
                title: "Principiante en fitness" 
              }
            ]}
            direction="right"
            speed='slow'
            pauseOnHover={true}
           />
           
        </div>
      </section>

    </main></>
  );
}

