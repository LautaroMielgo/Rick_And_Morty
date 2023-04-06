import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About';
import Detail from './components/Detail';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'deef7daa72ae.2e039bea638a9fa70407';

function App() {
   const [characters,setCharacters] = useState([]);

   const onSearch = (id)=> {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then(( data ) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);          
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) =>{
      const charactersFiltered = characters.filter(character => character.id !== (id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            
            <Route path='/about' element={<About/>}/>

            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
                  
      </div>
   );
}

export default App;
