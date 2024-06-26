import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import "./styles/pokedexid.css"


const PokeIdPage = () => {

  const [pokeData, getPokeData]= useFetch()
  const param = useParams()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${param.id}`
    getPokeData(url)
  }, [])
  
  

  return (
    <article className='poke-container'>
    <img src={pokeData?.sprites.other["official-artwork"].front_default} alt="pokemon photo" />
    <h3 className='name'>{pokeData?.name}</h3>
</article>
  )
}

export default PokeIdPage