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
            </div>
        );
    }
}