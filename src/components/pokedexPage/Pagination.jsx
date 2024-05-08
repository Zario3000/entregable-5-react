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
       
        
    </div>
  )
}

export default Pagination