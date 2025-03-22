import React, { useState, useContext, useEffect } from "react";
import assets from "../../assets/assets.js";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [payment, setPayment] =useState("paid")  
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const generateOrderId = async ()=> {
    let orderId = '';
    const res = await axios.get(url + "/api/order/list");
      if(res.data.success){
        const totalOrder = res.data.data.length + 1;
        orderId = totalOrder.toString().padStart(4, "0");
      }
    return `#${orderId}`
}
  const placeOrder = async (event) => {
    event.preventDefault();
    const orderID = await generateOrderId();
    let orderItems = [];

    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    
    
    let orderData = {
      orderId: orderID,
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    
    if(payment === "paid"){
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Paid Error");
      }

    }else{
      let response = await axios.post(url+"/api/order/cashorder",orderData,{headers:{token}})
      if (response.data.success) {
        
        navigate("/myorders")
      } else {
        alert("Cash Error");
      }
    }

    
    
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email Address"
        />
        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
        />
        <div className="multi-fields">
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City"
          />
          <input
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
          />
        </div>
        <div className="multi-fields">
          <input
            required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip Code"
          />
          <input
            required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
            <hr />
          </div>
          <div className="payment-options">
            <div onClick={()=> setPayment("cash")} className="payment-option">
              <img src={payment ==="cash" ? assets.selector_icon: assets.faded_selector_icon} />
              <p>COD (Cash On Delivery)</p>
            </div>
          
            <div onClick={()=> setPayment("paid")} className="payment-option">
              <img src={payment === "paid" ?assets.selector_icon: assets.faded_selector_icon} />
              <p>Stipe (Credit/Debit)</p>
          </div>
        </div>
          <button type="submit">Proceed to Payment</button>
        </div>
        
      </div>
    </form>
  );
};

export default PlaceOrder;
