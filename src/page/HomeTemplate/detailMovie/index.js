import React, { useEffect, useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actFetchDetailMovie } from './duck/action'
import Chitiet from './Chitiet'
import Loading from '../_components/Loading/loading'

export default function DetailMovie() {
  const params = useParams()
  const dispatch = useDispatch()
  const { loading, data } = useSelector((state) => state.detailMovieReducer)

  useEffect(() => {
    dispatch(actFetchDetailMovie(params.id))
  }, {})
  if (loading) return <Loading />
  return (
    <>
      <div>
        <h2 className='text-center py-3'>Lịch chiếu</h2>
      </div>
      <hr />
      <div className='row justify-content-center'>
        <div className='bg-lichchieu' style={{ backgroundImage: `url(${data && data.hinhAnh})` }}></div>

        <div className='col-md-3 py-4'>
          <img className='img-lichchieu' src={data && data.hinhAnh} alt='' />
        </div>

        <div className='col-md-7 py-4 text-white'>
          <h4 style={{ fontSize: '40px', paddingBottom: '20px' }}>{data && data.tenPhim}</h4>
          <span style={{ fontSize: '20px', paddingBottom: '30px' }}>Đánh giá: {data && data.danhGia}</span>
          <span style={{ fontSize: '20px', padding: '0 0 0 30px' }}>Tình trạng: {data && data.dangChieu === true ? 'đang chiếu' : 'sắp chiếu'} </span>
          <p style={{ fontSize: '20px', padding: '20px 0' }}> {data && data.moTa} </p>

          <Chitiet data={data} />

        </div>
      </div>

    </>
  )
}
