import { useState } from 'react'
import { ProductList } from './components/ProductList'
import './index.css'



function App() {
 const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <h1>FakeShop</h1>
        <ProductList/>     
      </div>
    
  )
}

export default App
