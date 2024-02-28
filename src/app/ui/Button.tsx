import { color } from 'framer-motion';
import React from 'react';

const Boton = (props: { 
    texto: any; 
    ancho:number;
    alto:number;
    borderRadius:number;
    colorTexto:string; 

}) => {
    const {texto,ancho,alto,borderRadius,colorTexto} = props;

    const estilosBoton = {
        width: `${ancho}px`,
        alto: `${alto}px`,
        borderRadius: `${borderRadius}px`,
        color: `${colorTexto}`,
    }

    return(
        <button style={estilosBoton}>{texto}</button>
    )
}

export default Boton;