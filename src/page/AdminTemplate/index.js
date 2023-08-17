import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarAdmin from './_component/Navbar';
import { Navigate , useNavigate } from 'react-router-dom';

export default function AdminTemplate() {

  if(!localStorage.getItem("USER_ADMIN")){
    return <Navigate to="/auth" replace/>
  }

  return (
    <div>
      <NavbarAdmin/>

      </div>
  )
}

