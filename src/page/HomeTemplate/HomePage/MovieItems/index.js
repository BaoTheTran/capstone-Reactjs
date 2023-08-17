import React, { Component } from 'react'

export default class MovieItem extends Component {
  render() {
    const {movie} = this.props;
    return (
        <div className='item-movie' >
            <h3 className='title-movie-item text-center text-warning'>{movie.tenPhim}</h3>
            <img src={movie.hinhAnh} className='img-fluid'/>
            <div className='film__overlay'></div>
            <div className='text-center p-3'>
              <button className='btn btn-info'>CHI TIẾT</button>
              <button className='btn btn-danger'>MUA VÉ</button>
            </div>
            
        </div>

    )
  }
}
