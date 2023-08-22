import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { actLayThongTin } from '../MovieSeat/duck/action';


export default function Profile() {
  const userLogin = useSelector((state)=>state.movieSeatReducer.data);
  const dispatch = useDispatch();
  console.log(userLogin);

useEffect(()=>{
  dispatch(actLayThongTin())
},[])

  
if(!localStorage.getItem("USER_CUSTOMER")){
  return <Navigate replace to="/" />
}

  return (
    <div className='container p-4 text-center'>
      <div className='card'  style={{height:'400px', width:'400px'}}>
        <img src={require("../../../img/img_avatar1.png")} alt="Card image"  style={{height:'200px', width:'100%'}}/>
        <div className='card-body'>
            <h2>Hồ sơ người dùng : {userLogin?.hoTen}</h2>
          <p>Tên tài khoản : {userLogin?.taiKhoan}</p>
          <p>Email: {userLogin?.email}</p>
          <p>Số điện thoại: {userLogin?.soDT}</p>
        </div>
      </div>
      
    </div>
  )
}



