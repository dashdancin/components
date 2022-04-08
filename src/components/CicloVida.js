import React, {Component} from 'react';

export default class CicloVida extends Component {
    constructor(props){
        super(props);
        console.log(0, "El componente se inicializa, aún NO está en el DOM")
    }
    render(){
        console.log(4, 
            "El componente se redibuja por algún cambio en el DOM")
        return(
        <>
            <h2>Ciclo de Vida de los Componentes de Clase </h2>
        </>
        )
    }
}