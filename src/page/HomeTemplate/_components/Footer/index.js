import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div id='footer'>
        <div className='back-to-top'></div>
        <div className='footer container '>
          <div className='row'>
              <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4 footer_item footer_item_img'>
                <div className="navbar-brand">
                  <NavLink to="/">
                  <img src="http://ddcinema.vn/Content/Img/logo.png"/>
                  </NavLink>
                </div>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-4 col-xs-7 footer_item footer_item_social'>
                  <p className="footer_title">Kết nối với chúng tôi</p>
                  <div className='social'>
                    <a href=""><i className="fab fa-facebook"></i></a>
                    <a href=""><i className="fab fa-youtube"></i></a>
                  </div>
                  <div className='hotLine'>
                    <NavLink to="/lien-he">
                    <p><i className="fa fa-hand-point-right"></i>Liên hệ với chúng tôi</p>
                    </NavLink>
                  </div>
                  <div className='hotLine'>
                        <a href="">
                        <span><i className="fa fa-phone"></i></span>
                        Hotline: 0123456789</a>
                  </div>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-4 col-xs-5 footer_item'>
                  <p className="footer_title">Về DDCINE</p>
                  <ul>
                    <li>Giới thiệu</li>
                    <li>Tuyển Dụng</li>
                    <li>Ưu đãi</li>
                    <li>Lịch chiếu</li>
                  </ul>
              </div>
              
          </div>
          
          <div className='container text-center end'>
              <p>
                    <i>Rạp phim DDCINE, Số 890, Đường Trần Hưng Đạo, Phường 7, Quận 5, Tp HCM</i>
              </p>
              <p>© 2019 All Rights Reserved</p>
          </div>
          
          
        </div>
      </div>
    )
  }
}
