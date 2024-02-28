
import React from 'react';

const Boton = (props: { 
    texto: any; 
    ancho:number;
    alto:number;
    borderRadius:number;
    colorTexto:string; 
    colorFondo:string;
    colorBorde:string;


}) => {
    const {texto,ancho,alto,borderRadius,colorTexto,colorFondo,colorBorde} = props;

    const estilosBoton = {
        width: `${ancho}px`,
        height: `${alto}px`,
        borderRadius: `${borderRadius}px`,
        color: `${colorTexto}`,
        backgroundColor : `${colorFondo}`,
        border : `${colorBorde}`,
    }

    return(
        <button style={estilosBoton} className='flex justify-center items-center'>
            <p className='font-semibold text-xl tracking-tight mr-3'>{texto}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
        </button>
    )
}

export default Boton;