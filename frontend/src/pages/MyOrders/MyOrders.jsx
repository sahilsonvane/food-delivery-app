import React, { useContext, useEffect, useState } from 'react'
import {StoreContext} from "../../context/StoreContext"
import axios from 'axios'
import assests from "../../assets/assets.js"

import "./MyOrders.css" 


const MyOrders = () => {
  
    const {url,token} = useContext(StoreContext);
    const [data, setData] = useState([])
    
    const fetchOrders = async ()=> {
        const res = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        setData(res.data.data);

    }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token])

    console.log(data);
    
    return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className="container">
            {data.map((order,index)=>{
                return (
                    <div key={index} className='my-orders-order'>
                        <div>

                        <img src={assests.parcel_icon} />
                        <p>{order.orderId}</p>
                        </div>
                        <p>{order.items.map((item,index)=>{
                            if(index === order.items.length - 1){
                                return item.name+" x " +item.quantity
                            }else{
                                return item.name+" x " +item.quantity+", "
                                
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                        <button onClick={fetchOrders}>Track Order</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyOrders