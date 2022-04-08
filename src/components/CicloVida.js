import React, {Component} from 'react';

export default class CicloVida extends Component {
    constructor(props){
        super(props);
        console.log(0, "El componente se inicializa, aún NO está en el DOM")
    
        this.state = {
            hora:new Date().toLocaleTimeString(),
        };

        this.temporizador = null;
            }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString(),
            });
        }, 1000);
    };

    iniciar = () => {
        this.tictac();
    };

    detener = () => {
        clearInterval(this.temporizador);
    };

    render() {
        console.log(
            4, 
            "El componente se redibuja por algún cambio en el DOM"
            );
        return(
        <>
            <h2>Ciclo de Vida de los Componentes de Clase </h2>
            <h3>{this.state.hora}</h3>
            <button onClick={this.iniciar}>iniciar</button>
            <button onClick={this.detener}>detener</button>
        </>
        );
    }
}