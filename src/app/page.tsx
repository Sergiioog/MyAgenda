import Header from './ui/Header';
import {ImagesSlider} from './ui/image-slider';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <main className="min-h-screen">
      <Header />
      <section className="fotoPrincipal min-h-[60vh]">
        <div className='relative max-h-96 h-96 w-full'>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full flex flex-col items-center justify-center">
          <h1 className="text-6xl font-semibold mb-[13px]">MyAgenda</h1>
          <h2 className="text-3xl font-semibold">Tu app deportiva favorita</h2>
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
    </main></>
  );
}