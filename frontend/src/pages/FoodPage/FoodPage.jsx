import React, {useContext} from 'react'
import './FoodPage.css'
import assets from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { useParams, useNavigate } from 'react-router-dom'

const FoodPage = () => {
  const {foodId} = useParams()
  const {cartItems, addToCart, removeFromCart,food_list,url} = useContext(StoreContext);
  const navigate = useNavigate()
  const food_data = food_list.filter(item => item._id === foodId);
  
  

  return (
    <div className='food-container'>
        <div className="food-image-box">
          <img src={url+"/images/"+food_data[0].image} />
        </div>
        <div className="food-description-box">
          <h2>{food_data[0].name}</h2>
          <h3>{food_data[0].category}</h3>
          <img src={assets.rating_starts} />
          <p>{food_data[0].description}</p>
          <p className='food-price'>{`$${food_data[0].price}`}</p>
          <div className="food-cart-btns">
            
            {
                !cartItems[foodId] 
                ? <button onClick={()=> addToCart(foodId)} >Add to Cart</button>
                :<div className='food-counter-container'>
                  <div  className="food-counter">
                    <p>Quantity: </p>
                    <img onClick={()=> removeFromCart(foodId)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[foodId]}</p>
                    <img onClick={()=> addToCart(foodId)} src={assets.add_icon_green} alt="" />
                  </div>
                  <button onClick={()=> navigate("/cart") }>Checkout</button>
              </div>
            }
            
          </div>
        </div>
    </div>
  )
}

export default FoodPage