import React,{useEffect,useState} from 'react'
import './Employee.css'
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard'
import axios from 'axios'
import { assets } from '../../assets/assets'


const Employee = () => {
  const [data,setData] = useState()

 const fetchdata = async ()=>{
  const response = await axios.get(`${assets.URL}employee/`)
  if(response.data.success){
   setData(response.data.data.reverse())
   console.log(response.data.data)
  }
 }

  console.log(data)


  useEffect(()=>{
    fetchdata()
  },[])


  return (
    <>
    <div className='employee2'>
     {
        data?data.map((item,index)=>{
          return( 
            <EmployeeCard key={index} name={item.name} age={item.age} birthday={item.birthday} email={item.email} address={item.address} phonenumber={item.phonenumber} qualification={item.qualification} passportnumber={item.passportnumber} citizen={item.citizen} religion={item.religion} videolink={item.videolink} profilepicture ={item.profilepicture} passport={item.passport} application={item.application} selected={item.selected}/>
          )
        }):
        
         
        <p>Loading....</p>
          
        
      }  
    
    </div>
    
  </>
  )
}

export default Employee