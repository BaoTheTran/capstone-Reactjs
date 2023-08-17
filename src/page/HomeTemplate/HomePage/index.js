import React, { Component } from 'react';
import { Carousel } from 'antd';
import MovieItem from './MovieItems';
import CarouselHome from './Carousel';
import { connect } from 'react-redux';
import {actFetchListMovieHomepage} from "../HomePage/MovieItems/duck/actions";
import Slider from "react-slick";

class HomePage extends Component {
  
 
  componentDidMount(){
    this.props.fetchListMovieHomepage();
    
  }

  renderListMovie=()=>{
    const {data,loading} = this.props;
    console.log(data);
    if(loading) return <div>loading...</div>;
    return data?.map((movie)=><MovieItem key={movie.maPhim} movie={movie} />);
    
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
    };
    console.log(this.props.data);
    return (
    <div>
      <CarouselHome/>
      
      <section id="slider-movie">
          <div className='heading'>
            <div className='row'>
                <div className="col-lg-6 col-md-6 col-xs-5"><img src="http://ddcinema.vn/Content/img/slogan-2.png"/></div>
                <div className="col-lg-6 col-md-6 col-xs-7">
                <ul>
                    <li className="dangchieu_li slide_active">Đang chiếu</li>
                    <li className="sapchieu_li">Sắp chiếu</li>
                </ul>
            </div>
            </div>

          </div>
      </section>
      <section id='dangChieu'>
          <Slider {...settings}>
            {this.renderListMovie()}
          </Slider>
      </section>
     
               
    </div>  
    )
  }
}

const mapStateToProps =(state)=>{
  return{
    loading :state.listMovieHompageReducer.loading,
    data: state.listMovieHompageReducer.data,
  }
};

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchListMovieHomepage:()=>{
      dispatch(actFetchListMovieHomepage());
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps) (HomePage);
