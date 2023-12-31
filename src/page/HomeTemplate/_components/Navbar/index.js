import React, { Component } from 'react';
import {NavLink} from "react-router-dom";


export default class NavBar extends Component {
  render() {
    return (
      <div className=''>
        <nav className="navbar navbar-expand-md navbar-default">
          <div className='container'>
          <div className="navbar-brand">
            <NavLink  to="/">
            <img src={require("../../../../img/logo.png")}/>
            </NavLink>
          </div>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#collapsibleNavbar">
          Menu
        </button>
        <div className=" navbar-collapse navbar-menu" id="collapsibleNavbar ">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={({isActive})=>isActive ? "my-active nav-link" : "nav-link"} to="/">Trang Chủ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>isActive ? "my-active nav-link" : "nav-link"} to="/dang-chieu">Phim</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>isActive ? "my-active nav-link" : "nav-link"} to="/lich-chieu">Lịch Chiếu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>isActive ? "my-active nav-link" : "nav-link"} to="/gia-ve">Giá Vé</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>isActive ? "my-active nav-link" : "nav-link"} to="/uu-dai">Ưu Đãi</NavLink>
            </li>
            
          </ul>
        </div>
          </div>
       
      </nav>
        
      </div>
       

    )
  }
}
