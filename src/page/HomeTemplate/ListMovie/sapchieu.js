import React from 'react'
import { useSelector } from 'react-redux'
import RenderMovie from './renderMovie'
import { NavLink } from 'react-router-dom'

export default function SapChieu(props) {
  const data = useSelector((state) => state.listMovieReducer.data)
  const sapChieu = data?.map((item, index) => {
    if (item.sapChieu === true) {
      return (
        <>
          <RenderMovie item={item} key={index} />
        </>
      )
    }
  })
  return (
    <>
      <div className='row justify-content-center pt-3 item-movie'>
        <NavLink className={({ isActive }) => isActive ? 'active1 btn-dangchieu' : 'btn-dangchieu'} to='/dang-chieu'>Đang chiếu</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active2 btn-sapchieu' : 'btn-sapchieu'} to='/sap-chieu'>Sắp chiếu</NavLink>
      </div>
      <hr />
      {sapChieu}
    </>
  )
}
