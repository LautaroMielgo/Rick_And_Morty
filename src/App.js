import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About';
import Detail from './components/Detail';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form';
import Favorites from './components/Favorites';



const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'deef7daa72ae.2e039bea638a9fa70407';

const email = 'lau@gmail.com';
const password = '123lau';



function App() {
   const navigate = useNavigate();
   const location = useLocation();
   const [characters,setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) =>{
      if(userData.email === email && userData.password === password){
         setAccess(true)
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


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
         {
            location.pathname !== '/' && <Nav onSearch={onSearch}/>
         }

         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
                  
      </div>
   );
}

export default App;
