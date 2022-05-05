import React, { useState, useEffect } from 'react';

function Pokemon({avatar, name}) {
    return (
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([]);
useEffect(()=> {
    
    const getPokemons = async (url) => {
        let res = await fetch(url),
        json = await res.json();

        json.result.forEach(async (el) => {
            let res = await fetch(el.url),
            json = await res.json();

        let Pokemon = {
            id: json.id,
            name: json.name,
            avatar: json.sprites.front_default,
        };
        
        }
    };
});
}