import React, {Component} from "react";

export default class Eventos extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };
        } 

    sumar(){
        console.log("sumando");
    }

    restar(){
        console.log("restando");
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase</h2>
                <nav>
                    <button onClick={this.sumar}>-</button>
                    <button onClick={this.restar}>+</button>
                    <h3>{this.state.contador}</h3>
                </nav>
            </div>
        );
    }
}