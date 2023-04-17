import { Link } from "react-router-dom";
import '../App.css'
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";



 function Card({id,name,status,species,gender,origin,image,onClose, addFav, removeFav,myFavorites}) {
   
   const [isFav , setIsFav] = useState(false)

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true);
         addFav({id,name,status,species,gender,origin,image})
      }
   }
   useEffect(() => {
      if (myFavorites) {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }
   }, [myFavorites]);

   
   
   
   return (
      <div className="card">
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         
         <button onClick={() => onClose(id)}>X</button>
         <img src={image} alt='' />
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>

         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) =>{
   return {
      addFav: (character) => { dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

const mapStateToProps = (state) =>{
   return{
      myfavorites : state.myFavorites
   }
}





export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);