
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Products } from './pages/Products'
import { Cart } from './pages/Cart'
import { Nav } from './components/Nav'

function App() {

  return (
    <cartProvider>

    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </cartProvider>
  )
}

export default App
