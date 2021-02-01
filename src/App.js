import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado'
import Historial from './componentes/Historial';


import Paginacion from './componentes/Paginacion'
class App extends Component {


  
state = {
    termino : '',
    imagenes : [],
    pagina : ''
    }

paginaAnterior = () =>{

  let pagina = this.state.pagina;
  if(pagina === 1) return null;
  pagina -= 1;


  this.setState ({
    pagina
  }, () => {this.consultarApi()});
  }


paginaSiguiente = () =>{

  let pagina = this.state.pagina;
  pagina += 1;
  this.setState ({
    pagina
  }, () => {this.consultarApi()});
  }


// FUNNCION QUE ME HACE LA CONSULTA A LA API DE PIXABAY
consultarApi= () => {
 const termino = this.state.termino;
 const pagina = this.state.pagina;
const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30&page=${pagina}`;
console.log(url)
fetch(url)
.then(respuesta => respuesta.json())
.then(resultado => this.setState({imagenes:resultado.hits}))

}

  // Recibo el valor obtenido del componente Busqueda
  datosBusqueda = (termino) => {
    this.setState({
      termino : termino, 
      pagina : 1
    }
    , () => {
      this.consultarApi();
    }
    )
  }



  render() {
    return (
      <div className="app container" >
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes </p>
          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
          <div>
            <Historial
          termino = {this.state.termino}
          />
            </div>
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes} 
            paginaAnterior = {this.paginaAnterior}
            paginaSiguiente = {this.paginaSiguiente}/>
  

        </div>
       
      </div>
    );
  }
}
export default App;
