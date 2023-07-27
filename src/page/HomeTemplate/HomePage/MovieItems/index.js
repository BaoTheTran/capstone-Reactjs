import React, { Component } from 'react'

export default class MovieItem extends Component {
  render() {
    const {movie} = this.props;
    return (
      <div>
        <div className='item'>
            <img src={movie.hinhAnh}/>
            <h3 className='title-movie-item'>{movie.tenPhim}</h3>
        </div>
      </div>
    )
  }
}
