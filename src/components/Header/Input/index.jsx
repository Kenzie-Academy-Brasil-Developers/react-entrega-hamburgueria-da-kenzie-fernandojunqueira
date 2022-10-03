import React from 'react'
import { StyledInput } from './style'

const Input = ({setTeste}) => {
  return (
    <StyledInput 
     placeholder='Digite aqui'
     onChange={event => setTeste(event.target.value)}
     />
  )
}

export default Input