import React from 'react'
import hamburguer from '../../imgs/hamb.png'
import { StyledCardProducts } from './style'

const CardProducts = ({setItensCart,item,itensCart}) => {
  return (
    <StyledCardProducts>
        <figure>
            <img src={item.img} alt="" />
        </figure>
        <div className='main'>
          <h2>{item.name}</h2>
          <span>{item.category}</span>
          <p>R$ {item.price.toFixed(2).replace('.',',')}</p>
          <button type='button' onClick={() => setItensCart([...itensCart,item])}>Adicionar</button>
        </div>
    </StyledCardProducts>
  )
}

export default CardProducts