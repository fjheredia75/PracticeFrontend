import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Category from "./category/Category";
import Oportunity from "./oportunity/Oportunity";
import Customer from "./customer/Customer";
import Activity from "./activity/Activity"



function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>    
      <Route path="/customer" element={<Customer />} /> 
        <Route path="/category" element={<Category />} /> 
        <Route path="/activity" element={<Activity />} /> 
        <Route path="/oportunity" element={<Oportunity/>} />      
      </Routes>
    </BrowserRouter>   
  );
}




export default App;