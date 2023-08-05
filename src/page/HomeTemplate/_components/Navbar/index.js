import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className=''>
        <nav className="navbar navbar-expand-md navbar-default">
          <div className='container'>
          <div className="navbar-brand">
            <NavLink className={({isActive})=>isActive ? "my-active nav-link" : "nav-link"} to="/">
            <img src="http://ddcinema.vn/Content/Img/logo.png"/>
            </NavLink>
          </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse navbar-menu" id="collapsibleNavbar ">
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
            <li className="nav-item">
              <NavLink className={({isActive})=>isActive ? "my-active nav-link" : "nav-link"} to="/tin-tuc">Tin Tức</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>isActive ? "my-active nav-link" : "nav-link"} to="/lien-he">Liên Hệ</NavLink>
            </li>
            
          </ul>
        </div>
          </div>
       
      </nav>
        
      </div>
       

    )
  }
}
