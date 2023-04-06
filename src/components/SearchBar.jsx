import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value) 
   }

   return (
      <div className="barra">
         <input className="input" type='search' onChange={handleChange} value={id}/>
         <button className="botonAgregar" onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
