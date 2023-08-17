import React, { Component } from 'react'
import { Carousel } from 'antd';
import { actFetchCarousel } from './CarouselAction';
import { connect } from 'react-redux';


class CarouselHome extends Component {
  

  componentDidMount(){
    this.props.fetchCarousel();
    
  }

  renderImg = ()=>{
    const {data,loading} = this.props;
    console.log(data);
    if(loading) return <div>loading...</div>
    return data?.map((item)=>{
      return (<div key={item.maBanner} className='item'>
        <img src={item.hinhAnh} alt="123" />
      </div>)
    })
  }


  render() {
    return (
      <section className='carousel' >
      <Carousel autoplay>
        {this.renderImg()}
      </Carousel>
    </section>
    )
  }
}

const mapStateToProps =(state)=>{
  return{
    loading :state.carouselReducer.loading,
    data: state.carouselReducer.data,
  }
};

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchCarousel:()=>{
      dispatch(actFetchCarousel());
    },
  }
};

export default connect(mapStateToProps,mapDispatchToProps) (CarouselHome);
