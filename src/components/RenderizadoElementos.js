import React, {Component} from "react";
import data from '../helpers/data.json'

function ElementoLista(props){
    return(
        <li>
            <a href={props.el.web}>
                {props.el.name}
            </a>
        </li>
    );
}
export default class RenderizadodeElementos extends Component {
    constructor(props){
        super(props);
        this.state = {
            season: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
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
                <h3>Frameworks Frontend JavaScript</h3>
                <ul>
                    {data.frameworks.map((el) => (
                    <ElementoLista key={el.id} el={el}/>
                    ))}
                </ul>
            </div>
        );
    }
}