import React,{useState} from 'react'



function Historial(props) {


    return (
            <div>
            <p className="card-text">Ultima Busqueda</p>
            <div>
                <ul className="card-text">
                 {props.termino}
                </ul>
            </div>

        </div>
    );

}

//            <ul>
//              <p className = "card-text"> {props.termino}</p>
//            </ul>
  export default Historial;

 

 


   
