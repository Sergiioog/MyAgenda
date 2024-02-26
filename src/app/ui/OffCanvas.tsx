"use client";
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import Image from 'next/image';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={showDrawer} className='w-auto h-auto'>
        <Image src={'../assets/iconos/inicio.svg'} alt='Inicio' width={29} height={28} />
      </Button>
      <Drawer onClose={onClose} open={open}>
        <ul> {/* Utilizamos una lista ul para envolver los elementos li */}
          <li className='h-8 mb-4 flex justify-start items-center  '>
            <Image src={'../assets/iconos/inicio.svg'} alt='Inicio' width={29} height={28} />
            <h3 className='list text-2xl mt-1 ml-[6.5px] font-medium hover:cursor-pointer text-black'>Inicio</h3>
          </li>
          <li className='h-8 mb-4 flex justify-start items-center ml-[1.5px] '>
            <Image src={'../assets/iconos/calendar.svg'} alt='Inicio' width={26} height={26} />
            <h3 className='list text-2xl  ml-[6.5px] font-medium hover:cursor-pointer text-black'>Mis registros</h3>
          </li>
          <li className='h-8 mb-4 flex justify-start items-center  '>
            <Image src={'../assets/iconos/ejercicios.svg'} alt='Inicio' width={28} height={28} />
            <h3 className='list text-2xl mt-[1px] ml-[6.5px] font-medium hover:cursor-pointer text-black'>Ejercicios</h3>
          </li>
          <li className='h-8 mb-4 flex justify-start items-center  '>
            <Image src={'../assets/iconos/estiramientos.svg'} alt='Inicio' width={29} height={28} />
            <h3 className='list text-2xl mt-1 ml-[6.5px] font-medium hover:cursor-pointer text-black'>Estiramientos</h3>
          </li>
          <li className='h-8 mb-4 flex justify-start items-center  '>
            <Image src={'../assets/iconos/usuario.svg'} alt='Inicio' width={32} height={28} />
            <h3 className='list text-2xl mt-[2px] ml-[6.5px] font-medium hover:cursor-pointer text-black'>Usuario</h3>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default App;
