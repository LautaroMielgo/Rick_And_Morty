import Card from "./Card"
import { connect } from "react-redux"
import { filterCards, orderCards } from "../redux/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"

const Favorites = ({ myFavorites }) =>{
      const dispatch = useDispatch();
      const [aux , setAux] = useState(false)

      const handleOrder = (event) => {
            dispatch(orderCards(event.target.value));
            setAux(true);
      }
      const handleFilter = (event) =>{
            dispatch(filterCards(event.target.value))
      }


      return(
            <>
            <select onChange={handleOrder}>
                  <option value="A">ascendente</option>
                  <option value="B">decendente</option>
            </select>
            <select onChange={handleFilter}>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="genderless">genderless</option>
                  <option value="unknown">unknown</option>
            </select>
                  {
                        myFavorites?.map(fav => {
                              return(
                                    <Card key={fav.id} id={fav.id} name={fav.name} species={fav.species} gender={fav.gender} image={fav.image} onClose={fav.onClose}/>
                              )
                        })
                  }
            </>
      )
}

const mapStateToProps = (state) => {
      return{
            myfavorites: state.myfavorites
      }
}

export default connect(
      mapStateToProps,
      null
)(Favorites);