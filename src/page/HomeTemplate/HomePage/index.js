import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default class HomePage extends Component {
  render() {
    return (
    <div>
      <section className='carousel'>
        <OwlCarousel
        items={1} margin={8} autoplay ={true} className="owl-theme"  
        loop  
        nav 
        >
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
        </OwlCarousel>
      </section>
      <section id="slider-movie">
          <div className='heading'>
            <div className='row'>
                <div className="col-lg-6 col-md-6 col-xs-5"><img src="http://ddcinema.vn/Content/img/slogan-2.png"/></div>
                <div className="col-lg-6 col-md-6 col-xs-7">
                <ul>
                    <li className="dangchieu_li slide_active">Đang chiếu</li>
                    <li className="sapchieu_li">Sắp chiếu</li>
                    <li className="chieusom_li">Suất chiếu đặc biệt</li>
                </ul>
            </div>
            </div>

          </div>
      </section>
    </div>  
    )
  }
}