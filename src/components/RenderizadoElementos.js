import React, {Component} from "react";

export default class RenderizadodeElementos extends Component {
    constructor(props){
        super(props);
        this.state = {
            season: ['Primavera','Verano','Otoño','Invierno'],
        };
    }
    render(){
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del Año</h3>
                <ol>
                    {this.state.season.map((el,index) => (
                        <il key={index}>{el}</il>
                    ))}
                </ol>
            </div>
        );
    }
}