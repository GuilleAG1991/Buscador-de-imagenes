import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';


// TRATAR DE CAMBIAR EL COMPONENTE USANDO HOOKS!

class Resultado extends Component {

    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;

        if (imagenes.length === 0) return null;
        return (

            <React.Fragment>
 
                <div className=" col-12 p-5 row">
                    {imagenes.map(imagen => (
                        <Imagen
                            key={imagen.id}
                            imagen={imagen}

                        />
                    ))}
                    <div className="form-group col-md-4">
                        <input type="reset" className="btn btn-lg btn-danger btn-block" value="Limpiar..."

                        />
                    </div>


                </div>
                <Paginacion 
                 paginaAnterior = {this.props.paginaAnterior}
                 paginaSiguiente = {this.props.paginaSiguiente}
                  />

            </React.Fragment>
        )
    }


// LOS FRAGMENTS TAMBIEN SE PUEDEN ESCRIBIR ASI   ->   <> </>
// O ASI <React.Fragment> </React.Fragment>

  
render() {
        return (
            <>
                {this.mostrarImagenes() }
            </>
        );
    }
}
export default Resultado;







//import React, { Component } from 'react';
//class Resultado extends Component {

  //  state = {}
   // render() {
   //     return ();
   // }
//}
//export default Resultado;
