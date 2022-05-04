import React, {useState, useEffect} from 'react';

export default function ScrollHooks(){
    useEffect(() => {
        console.log("fase de Montaje");
    })
    return(
        <>
        <h2>Hooks - useEffect y el ciclo de Vida</h2>
        </>
    )
}