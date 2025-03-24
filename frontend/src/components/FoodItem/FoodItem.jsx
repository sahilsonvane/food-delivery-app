import React, { useContext } from 'react'
import "./FoodItem.css"
import assets from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate, Link } from 'react-router-dom'



const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems, addToCart, removeFromCart,url} = useContext(StoreContext);
    const navigate = useNavigate() 
  return (
    <div className='food-item' >
        <div className="food-item-img-container">
            <img src={url+"/images/"+image} alt={name} className='food-item-image' />
            {
                !cartItems[id] 
                ? <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white}/>
                : <div  className="food-item-counter">
                    <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <Link to ={`/food/${id}`}>
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} />
            </div>
            <p className="food-item-desc">{description}</p>
            </Link>   
            <div className='food-item-cart-btn'>
            <p className='food-item-price'>$ {price}</p>
            {!cartItems[id] 
            ?<button onClick={()=> addToCart(id)}>Add to Cart</button> 
            :<button onClick={()=> navigate('/cart')}>Checkout</button> 
            } 
            </div>
        </div>
    </div>
  )
}

export default FoodItem