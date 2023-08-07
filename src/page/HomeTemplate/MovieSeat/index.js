import React, { useEffect, useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { movieSeatReducer } from './duck/reducer'
import { actMovieSeat } from './duck/action'
import { useParams } from 'react-router-dom'

export default function MovieSeat(props) {
  const dispatch = useDispatch()
  const params = useParams()
  const data = useSelector(state => state.movieSeatReducer.data)
  const loading = useSelector(state => state.movieSeatReducer.loading)

  const [state, setState] = useState([])

  const layMaGhe = (maGhe) => {
  }

  useEffect(() => {
    dispatch(actMovieSeat(params.maLichChieu))
    setState(item => (data))
  }, [])

  console.log(state);
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
            <p>Vip</p>
          </li>
        </ul>
        <hr />
        <div className='movie-seat'>
          <div className='creen'></div>
          <div className='seat-movie row'>
            {data?.danhSachGhe?.map((ghe, index) => {
              const classGheVip = ghe.loaiGhe === 'Vip' ? 'seat-vip' : '';
              const classDaDat = ghe.daDat === true ? 'seat-none' : 'seat-thuong'
              return <>
                <button
                  key={index}
                  // style={{ backgroundColor: `${state.chon === false ? '' : 'green'}` }}
                  onClick={() => layMaGhe(ghe.maGhe)}
                  disabled={ghe.daDat}
                  className={`${classGheVip} ${classDaDat}`}
                >{ghe.daDat === true ? '' : ghe.tenGhe}</button>
              </>
            })}
          </div>


        </div>
      </div>
      <h2 className='col-md-4 text-center'>Tổng tiền</h2>
    </div>
  )
}
