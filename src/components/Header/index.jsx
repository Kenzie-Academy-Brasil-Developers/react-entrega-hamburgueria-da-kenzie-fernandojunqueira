import React, { useState } from 'react'
import Input from './Input'
import ButtonGreen from '../ButtonGreen'
import { StyledHeader } from './style'

const Header = ({teste,setTeste,itensCart,setItensCart,itens,setItens,setFilter}) => {



  function searching(text){
    setFilter(text)
  }
  return (
    <StyledHeader>
      <div className="container">
        <div className='logo'>
          <h1>Burguer <span>Kenzie</span> </h1>
        </div>
        <form 
        className='search'
        onSubmit={(e) => {
          e.preventDefault()
          searching(teste)
        }}
        >
          <Input setTeste={setTeste} />
          <ButtonGreen/>
        </form>
      </div>
    </StyledHeader>
  )
}

export default Header