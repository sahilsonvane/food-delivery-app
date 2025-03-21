import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";

const Dashboard = ({ url }) => {
  const [data, setData] = useState({
    totalFoodItem: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });

  const fetchfoodlist = async () => {
    try {
      const res = await axios.get(url + "/api/food/list");
      if(res.data.success){
        setData((data) => ({ ...data, ["totalFoodItem"]: res.data.data.length }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTotalOrders = async () => {
    try {
      const res = await axios.get(url + "/api/order/list");
      if(res.data.success){
        const totalOrder = res.data.data;
        setData((data) => ({ ...data, ["totalOrders"]: totalOrder.length }));
      
        // setting total revenue 
        let totalRevenue = 0;
        totalOrder.map((item) => (totalRevenue += item.amount));
        setData((data) => ({ ...data, ["totalRevenue"]: totalRevenue }));
        
        
      }
    } catch (error) { console.log(error);}
  };

  useEffect(() => {
    fetchfoodlist();
    fetchTotalOrders();
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-data">
        <div className="total">
          <h2>Total Food Item</h2>
          <p>{data.totalFoodItem}</p>
        </div>
        <div className="total">
          <h2>Total Orders</h2>
          <p>{data.totalOrders}</p>
        </div>
        <div className="total">
          <h2>Total Revenue</h2>
          <p>${data.totalRevenue}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
