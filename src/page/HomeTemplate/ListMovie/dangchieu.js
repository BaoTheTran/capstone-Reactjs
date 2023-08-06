import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import RenderMovie from './renderMovie'

export default function DangChieu(props) {
    const data = useSelector((state) => state.listMovieReducer.data)
    const dangChieu = data?.map((item, index) => {
        if (item.dangChieu === true) {
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
            {dangChieu}
        </>
    )
}
