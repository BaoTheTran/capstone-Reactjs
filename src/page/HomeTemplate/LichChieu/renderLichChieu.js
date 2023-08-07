import React from 'react'

export default function RenderLichChieu(props) {
    let { item,lichChieu } = props
    // console.log('lichchieu',lichChieu);
    // console.log('item',item);
    return (
        <>
            <div className='row justify-content-center'>
                <div className='bg-item' style={{ backgroundImage: `url(${item.hinhAnh})` }}></div>

                <div className='col-md-3 py-4'>
                    <img className='img-dangchieu' src={item.hinhAnh} alt='' />
                </div>

                <div className='col-md-7 py-4 text-white'>
                    <h4 style={{ fontSize: '40px', paddingBottom: '20px' }}>{item.tenPhim}</h4>
                    <p style={{ fontSize: '20px', paddingBottom: '30px' }}>Đánh giá: {item.danhGia}</p>
                    <p style={{ fontSize: '20px', paddingBottom: '30px' }}> {item.moTa} </p>

                    <div className='pb-3'>
                        {/* <span className='date'>20/12/2023</span>
                        <div className='lich-chieu d-flex'>
                            <div className='calendar-item'>10:45</div>
                            <div className='calendar-item'>12:45</div>
                            <div className='calendar-item'>15:45</div>
                        </div> */}
                        {/* <Chitiet data={lichChieu} /> */}
                    </div>

                </div>
            </div>
        </>
    )
}
