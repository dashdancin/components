import React, {Component} from "react";

export default class Eventos extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };
        } 

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button>+</button>
                    <button>-</button>
                </nav>
            </div>
        );
    }
}