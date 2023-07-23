import React, { Component } from 'react';


export default class HomePage extends Component {
  render() {
    return (
      <div className='carousel'>
        <div className="owl-carousel">
          <div className='item'>
            <img src="http://ddcinema.vn/Areas/Admin/Content/Fileuploads/images/slider/MI7.jpg" alt="" />
          </div>
          <div className='item'>
            <img src="http://ddcinema.vn/Areas/Admin/Content/Fileuploads/images/slider/INSI.jpg" alt="" />
          </div>
          <div className='item'>
            <img src="http://ddcinema.vn/Areas/Admin/Content/Fileuploads/images/slider/Member%20card.jpg" alt="" />
          </div>
          <div className='item'>
            <img src="http://ddcinema.vn/Areas/Admin/Content/Fileuploads/images/slider/BANNER%20CONAN.jpg" alt="" />
          </div>
        </div>
      </div>
    )
  }
}