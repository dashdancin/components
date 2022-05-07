import React, { useState } from 'react';

export default function Formularios() {
    const [nombre, setNombre] =useState ("");
    const [sabor, setSabor] = useState ("");
    const [lenguaje, SetLenguaje] = useState ("");
    const [terminos, setTerminos] = useState (false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('El formulario se ha enviado');
    };

    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nombre'>Nombre</label>
                <input
                    type='text'
                    id='nombre'
                    name='nombre'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            <p>Elige tu sabor JS Favorito:</p>
            <input
                type={'radio'}
                id='vainilla'
                name='sabor'
                value='vainilla'
                onChange={(e) => setSabor(e.target.value)}
            />
            <p>Elige tu Sabor JS Favorito:</p>
            <input
                type='radio'
                id='vainilla'
                name='sabor'
                value='b'
            </form>
        </>
    )
}