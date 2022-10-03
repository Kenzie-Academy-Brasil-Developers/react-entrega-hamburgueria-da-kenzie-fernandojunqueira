import React from 'react'
import Cart from '../Cart'
import ListProducts from '../ListProducts'
import { StyledMainShowcase } from './style'

const MainShowcase = ({itensCart,setItensCart,sum,itens,setItens,loading,setLoading}) => {

  return (
    <StyledMainShowcase >
        <ListProducts 
        setItensCart={setItensCart} 
        itensCart={itensCart}
        itens={itens} 
        setItens={setItens}
        loading={loading}
        setLoading={setLoading}
        />
        <Cart 
        itensCart={itensCart} 
        setItensCart={setItensCart}
        sum={sum}
        />
    </StyledMainShowcase>
  )
}

export default MainShowcase