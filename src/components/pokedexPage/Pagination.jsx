import React from 'react'

const Pagination = ({porPag, currentpage, setCurrentpage,totalProducts}) => {

const pageNumbers=[1, 2]
const handleNext=()=>{
  setCurrentpage(currentpage+1)
}
const handlePrevi = ()=>{
  setCurrentpage(currentpage-1)
}
const handleSpeci = (n)=>{
  setCurrentpage(n)
}


  return (
    <div>
        <button></button>
        <div>
            <button onClick={handlePrevi}>Anterior</button>
            {
             pageNumbers.map(noPage=>(
              <button key={noPage} onClick={()=>handleSpeci(noPage)}>{noPage}</button>
             ))
            }
            <button onClick={handleNext}>Siguiente</button>
        </div>
    </div>
  )
}

export default Pagination