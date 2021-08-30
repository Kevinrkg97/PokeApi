/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, {useState } from 'react';


const Filter = () => {

    const [busqueda, setBusqueda]= useState("");
  
    const handleChange=e=>{
      setBusqueda(e.target.value);
      filtrar(e.target.value);
    }
  
      
    const filtrar = ( terminoBusqueda ) => {
      var resultadosBusqueda = allPokemons.filter((elemento) => {
        if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
      });
      setAllPokemons(resultadosBusqueda);
    }


    return(
            <div className="containerSearch">
                <input
                    className="searchInput"
                    value={busqueda}
                    placeholder="Buscar..."
                    onChange={handleChange}
                />
                <button className="btnSearch">
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
        )
}


export default Filter; */