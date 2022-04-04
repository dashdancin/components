import { useState, useEffect } from 'react';

export default function Referencias(){
    // let refMenu = createRef(),
    let refMenu = useRef(),
        refMenuBtn = useRef();
    
        // console.log(refMenu, refMenuBtn);
        
    const handleToggleMenu = (e) => {
        // const $menu = document.getElementById("menu");

        // if (e.target.textContent === "Menú") {
        //     e.target.textContent = "Cerrar";
        //     $menu.style.display = "block";
        // } else {
        //     e.target.textContent = "Menú";
        //     $menu.style.display = "none";
        // }
        
        if (refMenuBtn.current.textContent === "Menú") {
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        } else {
            refMenuBtn.current.textContent = "Menú";
            
        }
    } 
}