import React, { Fragment } from 'react';
import ModalRegister from '../ModalRegister';
import ModalLogin from '../ModalLogin';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actLogOutCustomer } from '../../../AdminTemplate/AuthPage/duck/actions';

export default function Contact() {
//  const userLogin = useSelector((state)=>state.adminReducer.data);
const userLogin = JSON.parse(localStorage.getItem('USER_CUSTOMER'))

 const dispatch = useDispatch();
 const navigate = useNavigate();
console.log(userLogin);

  return (
    <div id="top_header">
            <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    {!userLogin &&(
                        <div className='accounts'>
                        <ul className='d-flex'>
                            <li>
                            <a className="regis" href="#" data-toggle="modal" data-target="#myModal">
                                <span><i className="fa fa-user-secret"></i></span>
                                    Đăng ký            
                                </a>
                            </li>
                            <li>
                            <a className="login_btn"  href="#" data-toggle="modal" data-target="#myModalLogin">

                                <span><i className="fa fa-key"></i></span>
                                    Đăng nhập User
                            </a>
                            </li>
                            <li>
                                <NavLink to="/auth" className="login_btn" >
                                <span><i className="fa fa-key"></i></span>
                                    Đăng nhập Admin
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    )}
                    {userLogin && (
                    <>
                    <NavLink to="/profile"> <button className='btn btn-warning mt-3 mr-3'>Hello! {userLogin.taiKhoan}</button></NavLink>
                    <button className='btn btn-info mt-3'   onClick={()=>{
                dispatch(actLogOutCustomer(navigate));
              }}>Đăng xuất</button>
                    </>
                    )}
                </div>
                 <div className='col-md-4'>
                     <div className='hotLine'>
                            <a href="">
                            <span><i className="fa fa-phone"></i></span>
                            Hotline: 0123456789</a>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='social'>
                        <a href=""><i className="fab fa-facebook"></i></a>
                        <a href=""><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            </div>
            
            <ModalRegister/>
            <ModalLogin/>
        </div>
      
  )
}
