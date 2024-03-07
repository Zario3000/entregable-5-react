import React, { useRef } from 'react'
import { setTrainerName } from '../store/slices/trainerName.slice'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import "./styles/homePage.css"

const HomePage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const textInput = useRef()
  const handleSubmit = (event)=>{
     event.preventDefault();
     dispatch(setTrainerName(textInput.current.value.trim()));
     navigate("/pokedex")
  }
  

  return (
    <div className='home-container'>
      <img src="../../assets/image 11.svg" alt="logo" />
      <h1>¡Hola Entrenador!</h1>
      <h2>Para Poder Comenzar, Dame Tu Nombre</h2>
      <form  onSubmit={handleSubmit}>
        <input type="text" ref={textInput} placeholder='Tu nombre...' />
        <button>Comenzar</button>
      </form>
    </div>
  )
}

export default HomePage