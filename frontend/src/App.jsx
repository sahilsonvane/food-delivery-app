import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from "./pages/Cart/Cart"
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import FoodPage from './pages/FoodPage/FoodPage'

function App() {
 
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <> </>}
    <div className='app'>
     <Navbar setShowLogin = {setShowLogin}/>
     <div className="layout">
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/order" element={<PlaceOrder/>} />
      <Route path="/verify" element={<Verify/>} />
      <Route path="/myorders" element={<MyOrders/>} />
      <Route path='/food/:foodId' element={<FoodPage />} />
     </Routes>
     </div>
    </div>
    <Footer/>
    </>
  )
}

export default App
