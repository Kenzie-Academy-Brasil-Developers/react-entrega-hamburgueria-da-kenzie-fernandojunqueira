import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainShowcase from "./components/MainShowcase";
import api from "./service/api";

function App() {

  
  const [itensCart,setItensCart] = useState([])
  const [teste,setTeste]=useState('')

  const [itens, setItens ] = useState('')
  const [loading,setLoading] = useState(true)
  const [filter,setFilter] = useState('')

const newItens = loading ? console.log(''): itens.filter(item => filter === '' ? true : item.name.toLowerCase().trim().includes(filter.toLowerCase().trim()))


  useEffect(() => {

    api.get()
    .then( resp => setItens(resp.data))
    .catch(err => console.error(err))
    .finally(() => 
    setLoading(false)
    )
     },[])

  // {id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14, img: 'https://i.imgur.com/Vng6VzV.png'}

 const sum = itensCart.reduce((acc,act) => acc + act.price,0)
 


  return (
    <div className="App">
      <Header
      teste={teste}
      setTeste={setTeste}
      itensCart ={itensCart}
      setItensCart={setItensCart}
      itens={itens}
      setItens={setItens}
      setFilter={setFilter}
      />
      <MainShowcase 
       itensCart={itensCart} 
       setItensCart={setItensCart}
       sum={sum}
       itens={newItens}
       setItens={setItens}
       loading={loading}
       setLoading={setLoading}
       
       />
    </div>
  );
}

export default App;
