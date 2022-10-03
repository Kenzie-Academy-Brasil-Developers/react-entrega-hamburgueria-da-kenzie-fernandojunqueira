import React from 'react'
import { StyledCart, StyledCartEmpty } from './style'
import hamburguer from '../imgs/hamb.png'

const Cart = ({itensCart,setItensCart,sum}) => { 

    function btnRemove(id){
        setItensCart((prev) => prev.filter((itensCart,index) => index !== id))
    }

  return (
    <>

    {itensCart.length === 0 ? 
    
    <StyledCartEmpty>
        <header>
            <p>Carrinho de compras</p>
        </header>
          <section>
            <p>Sua sacola está vazia</p>
            <span>Adicione itens</span>
        </section>
    </StyledCartEmpty>
    :
    <StyledCart>
        <header>
            <p>Carrinho de compras</p>
        </header>
      
        <ul>
            {itensCart.map((itemCart,index) => {
            return(

            <li key={index}>
                <div className='desc'>
                    <img src={itemCart.img} alt="" />
                    <div className='desc__text'>
                        <h3>{itemCart.name}</h3>
                        <span>{itemCart.category}</span>
                    </div>
                </div>
                <div className='desc__btn--remove'>
                    <button type='button' onClick={() => btnRemove(index)}>Remover</button>
                </div>
            </li>
            )
            })}
        </ul>
        <section className='total__div'>
            <div className='total'>
                <h3>Total</h3>
                <p>R$ {sum.toFixed(2).replace('.',',')}</p>
            </div>
            <button type='button' onClick={() => setItensCart([])}>Remover Todos</button>
        </section>
    </StyledCart>
    }
    </>

  )
}

export default Cart