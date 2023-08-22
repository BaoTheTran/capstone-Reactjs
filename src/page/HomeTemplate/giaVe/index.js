import React, { Component } from 'react'


export default class GiaVe extends Component {
  render() {
    return (
      <div className='container text-center'>
        <div className='content_giaVe'>
          <h1 className='title-gia-ve'>BẢNG GIÁ VÉ XEM PHIM 2D</h1>
          <img src={require("../../../img/bang gia ve 2D 2023.jpg")} className='img-fluid' />
          <p>* Vé mời sẽ không được áp dụng vào các suất chiếu đặc biệt và các ngày Lễ, Tết theo qui định của Bảng giá.</p>
          <p>* Giá vé có thể thay đổi theo từng thời điểm. Mong Quý Khán giả thông cảm !</p>
        </div>       
      </div>
    )
  }
}
