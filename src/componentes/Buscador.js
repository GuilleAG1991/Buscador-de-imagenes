import React, {Component} from 'react';
import Historial from './Historial';

class Buscador extends Component{

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        // Tomamos el valor del imput y lo guarda en termino
        const termino = this.busquedaRef.current.value;
        // me aseguro que mi imput no este vacio
        if(termino === ""){
            alert ("No se ingreso ningun dato para buscar!")
// le paso el valor del imput al componente App
// this.props.datosBusqueda()  es una funcion que estoy recibiendo como props del componente app
        }else{this.props.datosBusqueda(termino);}
    }
 
    render(){


        return(
        

            //llamo a la funcion obtener datos al apretar el boton
        <form onSubmit={this.obtenerDatos }>
             <div className = " row">
                
                    <div className = "form-group col-md-8">
                        <input ref = {this.busquedaRef} type="text" className = " form-control form-control-lg" placeholder = "POR FAVOR, INGRESA LO QUE QUIERAS BUSCAR"
                        />
                    </div>
                    <div className = "form-group col-md-4">
                        <input type="submit" className = "btn btn-lg btn-danger btn-block" value = "Buscar..."
                        
                        />
                        <input type="reset" className = "btn btn-lg btn-danger btn-block" value = "Limpiar..."
                        />
                    </div>
                   
             </div>
        </form>
        );
    }
}

export default Buscador;