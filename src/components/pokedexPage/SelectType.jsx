import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import { setPokemonName } from '../../store/slices/pokemonName.slice'
import { useDispatch } from 'react-redux'
import "./styles/selectType.css"

const SelectType = ({setSelectValue}) => {

const [types, getTypes]=useFetch()
const dispatch = useDispatch()
useEffect(() => {
    const url = "https://pokeapi.co/api/v2/type"
    getTypes(url)
}, [])
//console.log(types)
const textSelect = useRef()

const handleChange = ()=>{
     setSelectValue(textSelect.current.value)
     dispatch(setPokemonName(""))
}

    
  return (<>
    <select  onChange={handleChange} ref={textSelect}>
        <option className='select-option' value="allPokemons">all pokemons</option>
        {
            types?.results.map(type =>(
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
    <i></i>
    </>
  )
}

export default SelectType