import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemonName } from '../store/slices/pokemonName.slice'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/pokedexPage/PokeCard'
import SelectType from '../components/pokedexPage/SelectType'
import "./styles/pokedexPage.css"
import Pagination from '../components/pokedexPage/Pagination'

const PokedexPage = () => {

  const [selectValue, setSelectValue] = useState("allPokemons")
  const trainerName = useSelector(store=>store.trainerName)
  const pokemonName = useSelector(store=>store.pokemonName)
  const dispatch = useDispatch()
  const [pokemons, getPokemons, getPerType] = useFetch();
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if(selectValue==="allPokemons"){
      const url = "https://pokeapi.co/api/v2/pokemon/?limit=15"
      getPokemons(url)
    }else{
      getPerType(selectValue)
    }

  }, [selectValue])
  

 const textInput = useRef();
 const handleSubmit = (event) =>{
       event.preventDefault()
       dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()))
       textInput.current.value = ""
 }

 //console.log(pokemons)

 //paginacion
 const quantity = 5;
 const second = currentPage * quantity;
 const first = second - quantity;

 const residentsPart = pokemons && pokemons.results.slice(first, second);
 const totalPages = pokemons && Math.floor(pokemons.results.length/quantity)+1
 //paginacion
 console.log(totalPages)
  const cbFilter = ()=>{
    if(pokemonName){
     return pokemons?.results.filter(element => element.name.includes(pokemonName))
    }else{
      return pokemons?.results
    }
  
  }

  return (
    <div className='pokedex'>
      <div className='container-image'><img className='image' src="../../assets/image 11.svg" alt="logo" /></div>
      <div className='container-marge'></div>
      <section className='poke-header'>  <h3><span>Bienvenido {trainerName},</span> Aquí podrás encontrar tu pokemon favorito</h3>
      <div >
      <form onSubmit={handleSubmit}>
        <input className='poke-input' type="text" ref={textInput}/>
        <button className='poke-button'>Buscar</button>
      </form>
      <SelectType
      setSelectValue={setSelectValue}
      />
      </div>
      </section>
      <section className='poke-container'>
      <Pagination
       currentPage={currentPage}
       setCurrentPage={setCurrentPage}
       totalPages={totalPages}
      
      />
      {
      
      residentsPart?.map(poke =>(
            <PokeCard
            key={poke.url}
            url={poke.url}
            />
            
          ))
        
         
        }
      </section>
      <Pagination
       currentPage={currentPage}
       setCurrentPage={setCurrentPage}
       totalPages={totalPages}
      
      />
    </div>
  )
}

export default PokedexPage