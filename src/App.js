import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from "react-router-dom";
import Employee from './Pages/Employee/Employee';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import React,{useEffect,useState} from 'react'
import axios from 'axios'


function App() {
  const [data,setData] = useState([])

 const fetchdata = async ()=>{
  const response = await axios.get("http://localhost:4000/employee/")
  if(response.data.success){
   console.log(response.data.data)
   setData(response.data.data)
  }
 }

useEffect(()=>{
  
},[])


  return (
    <>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employee" element={<Employee />} />
    </Routes>
    <Footer/>
    </>
    
  );
}

export default App;
