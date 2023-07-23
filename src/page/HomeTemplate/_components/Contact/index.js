import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <div id="top_header">
            <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='accounts'>
                        <ul className='d-flex'>
                            <li>
                                <a href="">
                                <span><i className="fa fa-user-secret"></i></span>
                                    Đăng ký            
                                </a>
                            </li>
                            <li>
                                <a href="">
                                <span><i className="fa fa-key"></i></span>
                                    Đăng nhập</a>
                            </li>
                        </ul>
                    </div>
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
        </div>
      

    )
  }
}
