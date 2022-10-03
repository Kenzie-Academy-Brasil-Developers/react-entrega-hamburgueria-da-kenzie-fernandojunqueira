import React, { useEffect, useState } from 'react'
import api from '../../service/api'
import CardProducts from './CardProducts'
import { StyledListProducts } from './style'

const ListProducts = ({setItensCart,itensCart,itens,setItens,loading}) => {

  // const [itens, setItens ] = useState('')
  // const [loading,setLoading] = useState(true)

  // useEffect(() => {

  //   api.get()
  //   .then( resp => setItens(resp.data))
  //   .catch(err => console.error(err))
  //   .finally(() => setLoading(false))
  //    },[])

  return (
    <StyledListProducts>

      {loading ? 
      (<p></p>)  
      :
        <>
        {itens.map((item) => {
          return <CardProducts key={item.id} item={item} setItensCart={setItensCart} itensCart={itensCart}/>
        })}
        </>
    }
        {/* <CardProducts setItensCart={setItensCart} itensCart={itensCart}/>
        <CardProducts setItensCart={setItensCart} itensCart={itensCart}/>
        <CardProducts/>
        <CardProducts/>
        <CardProducts/>
        <CardProducts/> */}
    </StyledListProducts>
  )
}

export default ListProducts