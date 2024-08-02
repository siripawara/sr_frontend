import React from 'react'
import './EmployeeCard.css'
import { assets } from '../../assets/assets'

 

function EmployeeCard({name,age,birthday,email,address,phonenumber,qualification,passportnumber,citizen,religion,videolink,profilepicture,application,passport}) {
   

  return (
    <div className='employee'>
    <img  className="profile-image" alt="Profile picture" src={`${assets.URL}images/${profilepicture}`}/>
    <div className='employee-grid'>
        <div className='single-field'><p className='field-title'>Name: </p><p>{name}</p></div>
        <div className='single-field'><p className='field-title'>Age :</p><p>{age}</p></div>
        <div className='single-field'><p className='field-title'>Birthday :</p><p>{birthday.split("T")[0] }</p></div>
        <div className='single-field'><p className='field-title'>Email :</p><p>{email}</p></div>
        <div className='single-field'><p className='field-title'>Address :</p><p>{address}</p></div>
        <div className='single-field'><p className='field-title'>Phone Number :</p><p>{phonenumber}</p></div>
        <div className='single-field'><p className='field-title'>Qualification :</p><p>{qualification}</p></div>
        <div className='single-field'><p className='field-title'>Passport Number :</p><p>{passportnumber}</p></div>
        <div className='single-field'><p className='field-title'>Citizen :</p><p>{citizen}</p></div>
        <div className='single-field'><p className='field-title'>Religion :</p><p>{religion}</p></div>
        <div className='single-field'><p className='field-title'>Video Link :</p><p><a href={videolink} target="_blank">{videolink}</a></p></div>
        <div className='single-field'><p className='field-title'>Application :</p><p><img  className="application-image" src={`${assets.URL}images/${application}`}/></p></div>
        <div className='single-field'><p className='field-title'>Passport :</p><p><img  className="passport-image" src={`${assets.URL}images/${passport}`}/></p></div>
    </div>
    </div>
  )
}

export default EmployeeCard