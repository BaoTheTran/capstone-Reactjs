import React, { Component } from 'react'

export default class UuDai extends Component {
  render() {
    return (
      <div id="wrap">
          <div className='title_uudai  text-center'>
            <h2 className=''>
              <img src={require("../../../img/popcorn.png")} alt="" />
              Ưu đãi
            </h2>
          </div>
          <div className='row pb-5'>
            <div className='col-lg-2 col-md-4 col-sm-4 col-xs-6 item'>
              <img src={require("../../../img/COMBO DAY.jpg")} alt=""  className='img-fluid'/>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 col-xs-6 item'>
              <img src={require("../../../img/Happy day web.jpg")} alt=""  className='img-fluid'/>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 col-xs-6 item'>
              <img src={require("../../../img/SÁNG TỐI WEB.jpg")} alt=""  className='img-fluid'/>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 col-xs-6 item'>
              <img src={require("../../../img/THÀNH VIÊN OP2.jpg")} alt=""  className='img-fluid'/>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 col-xs-6 item'>
              <img src={require("../../../img/U22.jpg")} alt=""  className='img-fluid'/>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 col-xs-6 item'>
              <img src={require("../../../img/Happy day web.jpg")} alt=""  className='img-fluid'/>
            </div>
          </div>
      </div>
    )
  }
}
