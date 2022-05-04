import React, {useState, useEffect} from 'react';

export default function ScrollHooks(){
    const[scrollY, setScrollY] = useState(0);

    useEffect(() => {
        console.log("Fase de actualización");

        const detectarScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener("scroll", detectarScroll);

    return () => {
        window.removeEventListener("scroll", detectarScroll);
        console.log("Fase de Desmontaje");
    };
}, [scrollY]);

useEffect(() => {
    console.log("Fase de Montaje");
}, []);

useEffect(() => {
    console.log("Fase de Actualización");
});

useEffect(()=> {
    return()=> {
        console.log("Fase de Desmontaje")
    };
});

return (
        <>
        <h2>Hooks - useEffect y el ciclo de Vida</h2>
        <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    )
}