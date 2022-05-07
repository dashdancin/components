import React from 'react';
import './Estilos.css';

export default function Estilos () {
    let myStyles = {
        borderRadius: '.5rem',
        margin: '2rem auto',
        maxWidth: '70%'
    };

    return (
        <section className='estilos'>
            <h2>Estilos CSS en React</h2>
            <h3 className='bg-react'>Estilos en hoja CSS externa</h3>
            <h3 className='bg-react'
            style={{borderRadius: '.25rem', margin: '1rem', background: '#5252fb'}}
            >
                Estilos en línea (atributo style)
            </h3>
            <h3 className='bg-react' style={myStyles}>
                Estilos en línea
            </h3>
            <h3 className='bg-react'>
                Agregando Normalize con
                <br />
                <code>@import-normalize;</code>
            </h3>
        </section>
    )
}

