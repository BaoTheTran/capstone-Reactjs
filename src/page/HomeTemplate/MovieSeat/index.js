import React, { useState } from 'react'
import './style.css'

export default function MovieSeat(props) {
  const [state, getId] = useState({
    id: '',
  })
  const slcSeat = (e) => {
    document.getElementById(e.target.id).style.backgroundColor = 'green'
  }
  return (
    <div className='row '>
      <div className='col-md-8 '>
        <h2 className='text-center pb-4'>Movie Seat</h2>

        <ul className='row header-seat'>
          <li className='pr-3 '>
            <div className='seat-none'></div>
            <p>đã đặt</p>
          </li>
          <li className='pr-3 '>
            <div className='seat-thuong'></div>
            <p>thường</p>
          </li>
          <li className='pr-3 '>
            <div className='seat-vip'></div>
            <p>Couple</p>
          </li>
        </ul>
        <hr />
        <div className='movie-seat'>
          <div className='creen'></div>
          <div className='seat-movie d-flex'>
            <div className='hang-1 '></div>
            <div className='hang-1 '>1</div>
            <div className='hang-1 '>3</div>
            <div className='hang-1 '></div>
            <div className='hang-1'>4</div>
            <div className='hang-1'>5</div>
            <div className='hang-1'>6</div>
            <div className='hang-1'>7</div>
            <div className='hang-1 '></div>
            <div className='hang-1'>9</div>
            <div className='hang-1 '>10</div>
            <div className='hang-1 '>11</div>
          </div>
          <div className='seat-movie d-flex'>
            <div className='cot-1'>A</div>
            <button className='seat-item' onClick={(event) => slcSeat(event)} id='A1' >A1</button>
            <button className='seat-item dnt-slc' disabled='true'></button>
            <button className='seat-item line-3' disabled='true'></button>
            <button className='seat-item' style={{ backgroundColor: 'green' }} ></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item line-9' disabled='true'></button>
            <button className='seat-item'></button>
            <button className='seat-item dnt-slc' disabled='true'></button>
            <button className='seat-item dnt-slc' disabled='true'></button>
          </div>

          <div className='seat-movie d-flex'>
            <div className='cot-1'>B</div>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item line-3' disabled='true'></button>
            <button className='seat-item dnt-slc' disabled='true'></button>
            <button className='seat-item dnt-slc' disabled='true'></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item line-9' disabled='true'></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
          </div>

          <div className='seat-movie d-flex'>
            <div className='cot-1'>C</div>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item line-3' disabled='true'></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item line-9' disabled='true'></button>
            <button className='seat-item dnt-slc' disabled='true'></button>
            <button className='seat-item dnt-slc' disabled='true'></button>
          </div>

          <div className='seat-movie d-flex'>
            <div className='cot-1'>D</div>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item line-3' disabled='true'></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item line-9' disabled='true'></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
          </div>

          <div className='seat-movie d-flex'>
            <div className='cot-1'>E</div>
            <button className='seat-item dnt-slc' disabled='true'></button>
            <button className='seat-item'></button>
            <button className='seat-item line-3' disabled='true'></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item line-9' disabled='true'></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
          </div>

          <div className='seat-movie d-flex'>
            <div className='cot-1'>F</div>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
            <button className='seat-item line-3' disabled='true'></button>
            <button className='seat-item'></button>
            <button className='seat-item dnt-slc' disabled='true'></button>
            <button className='seat-item dnt-slc' disabled='true'></button>
            <button className='seat-item'></button>
            <button className='seat-item line-9' disabled='true'></button>
            <button className='seat-item'></button>
            <button className='seat-item'></button>
          </div>

          <div className='seat-movie d-flex justify-content-center ml-auto'>
            <button className='seat-couple dnt-slc' disabled='true'></button>
            <button className='seat-couple'></button>
            <button className='seat-couple'></button>
          </div>
        </div>

      </div>
      <h2 className='col-md-4 text-center'>Tổng tiền</h2>
    </div>
  )
}
