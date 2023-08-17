import React from 'react';
import { useSelector } from 'react-redux';


export default function Profile() {
  const userLogin = useSelector((state)=>state.adminReducer.data);

  return (
    <div className='container p-4 text-center'>
      <div className='card'  style={{height:'400px', width:'400px'}}>
        <img src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image"  style={{height:'200px', width:'100%'}}/>
        <div className='card-body'>
            <h2>Hồ sơ người dùng : {userLogin.hoTen}</h2>
          <p>Tên tài khoản : {userLogin.taiKhoan}</p>
          <p>Email: {userLogin.email}</p>
          <p>Số điện thoại: {userLogin.soDT}</p>
        </div>
      </div>
      
    </div>
  )
}
