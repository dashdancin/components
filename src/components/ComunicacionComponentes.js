import React, {Component} from 'react';

export default class Padre extends Component {
    render(){
        return(
            <>
                <h2>Comunicación entre Componentes</h2>
                <Hijo mensaje= "Mensaje para el hijo 1"/>
                <Hijo mensaje= "Mensaje para el hijo 2"/>
            </>
        );
    }
}

function Hijo(props){
    return <h3>{props.mensaje}</h3>
}