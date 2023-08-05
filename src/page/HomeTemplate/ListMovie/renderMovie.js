import React from 'react'
import ShowTrailer from './showTrailer'
import { Link } from 'react-router-dom'

export default function RenderMovie(props) {
    let { item } = props
    return (
        <>
            <div className='row justify-content-center'>
                <div className='bg-item' style={{ backgroundImage: `url(${item.hinhAnh})` }}></div>
                <div className='col-md-3 py-4'>
                    <img className='img-dangchieu' src={item.hinhAnh} alt='' />
                </div>

                <div className='col-md-7 py-4 text-white'>
                    <h4 style={{ fontSize: '40px', paddingBottom: '20px' }}>{item.tenPhim}</h4>
                    <p style={{ fontSize: '20px', paddingBottom: '30px' }}> {item.moTa} </p>

                    <ShowTrailer url={item.trailer} />

                    <Link className='btn-muave' to={`/lich-chieu/${item.maPhim}`}>Mua vé</Link>
                </div>
            </div>
            <hr />
        </>
    )
}
