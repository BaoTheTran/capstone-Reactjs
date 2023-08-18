import React, { Component } from 'react'
import { Carousel } from 'antd';  
import { actFetchCarousel } from './CarouselAction';
import { connect } from 'react-redux';
import Loading from '../../_components/Loading/loading';

class CarouselHome extends Component {

  componentDidMount() {
    this.props.fetchCarousel();
  }

  renderImg = () => {
    const { data, loading } = this.props;
    console.log('data',data);
    if (loading) return <Loading />

    return data?.map((item) => {
      return (<div key={item.maBanner} className='item'>
        <img style={{height:'100%', width:'100%'}} src={item.hinhAnh} alt="" />
      </div>)
    })
  }

  render() {
    return (
      <section className='carousel' >
        <Carousel autoplay style={{height:'100%', width:'100%'}}>
          {this.renderImg()}
        </Carousel>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.carouselReducer.loading,
    data: state.carouselReducer.data,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCarousel: () => {
      dispatch(actFetchCarousel());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselHome);
