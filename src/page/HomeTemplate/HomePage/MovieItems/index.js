import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MovieItem extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className='item-movie' >
        <h3 className='title-movie-item text-center text-warning'>{movie.tenPhim}</h3>
        <img src={movie.hinhAnh} className='img-fluid pl-4' />
        {/* <div className='film__overlay'></div> */}
        <div className='text-center p-3'>
          <Link className='btn btn-info' to={`/lich-chieu/${movie.maPhim}`} >CHI TIẾT</Link>
          <Link
            className='btn btn-danger'
            data-toggle={localStorage.getItem('USER_CUSTOMER') ? '' : "modal"}
            data-target="#myModalLogin"
            to={localStorage.getItem('USER_CUSTOMER') ? `/lich-chieu/${movie.maPhim}` : ''}
          >MUA VÉ</Link>
        </div>

      </div>

    )
  }
}
