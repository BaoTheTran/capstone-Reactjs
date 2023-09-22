import React, {useEffect, useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import UserItem from './UserItem';
import { actFetchListUser } from './duck/action';
import { NavLink } from 'react-router-dom';


export default function UserList() {
    const dispatch = useDispatch();
    const listUser = useSelector((state)=>state.listUserReducer.data); 
    console.log(listUser);

    useEffect(()=>{
        dispatch(actFetchListUser())
    },[]) 
    
    const renderListUser=()=>{
        return listUser?.map((item,index)=>{
            return <UserItem
            key ={index}
            user = {item}
            />
        })
    }

  return (
    <div className="container">
  <h2 className='p-4 text-center text-warning'>DANH SÁCH NGƯỜI DÙNG</h2>
  <NavLink to="/admin/add-user">
        <span><i className="fa fa-user-secret"></i></span>
                                   THÊM NGƯỜI DÙNG          
  </NavLink>
             
  <table className="table table-dark table-striped">
    <thead>
      <tr className='alert alert-warning'>
        <th>Họ & Tên</th>
        <th>Tài Khoản</th>
        <th>Email</th>
        <th>Số Điện Thoại</th>
        <th>Loại Người Dùng</th>
        <th>Tùy Chỉnh</th>
      </tr>
    </thead>
    <tbody>
      {renderListUser()}
    </tbody>
  </table>
</div>

  )
}
