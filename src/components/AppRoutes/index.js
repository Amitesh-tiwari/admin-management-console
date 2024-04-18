import {  Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Inventory from "../../Pages/Inventory";  
import Orders from "../../Pages/Order";
import Customers from "../../Pages/Customers";
import Card from "../../Pages/Card"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
      <Route path="/card" element={<Card />}></Route>
    </Routes>
  );
}
export default AppRoutes;