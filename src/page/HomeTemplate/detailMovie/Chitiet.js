import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane'
import moment from 'moment/moment'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actLayDanhSachLichChieu } from './duck/action';

export default function Chitiet(props) {
    let { data } = props
    // let params = useParams()
    const dispatch = useDispatch()
    // let { data, loading } = useSelector(state => state.detailMovieReducer)
    const [tabPosition, setTabPosition] = useState('top');

    // useEffect(() => {
    //     dispatch(actLayDanhSachLichChieu(params.id))
    // }, [])
    console.log(data);
    return (
        <Tabs
            tabPosition={tabPosition}>
            {data?.heThongRapChieu.map((heThongRap, index) => {
                return <TabPane key={index}
                    tab={
                        <div>
                            <img style={{ height: '50%', width: '100%', maxWidth: '50px' }} src={heThongRap.logo} alt='' />
                            <p style={{ fontSize: '20px', color: 'white' }}>
                                {heThongRap.tenHeThongRap}
                            </p>
                        </div>} >
                    {heThongRap.cumRapChieu.map((cumRap, index) => {
                        return <div key={index} style={{ color: 'whtie' }}>
                            <div className='header-cumrap pb-3'>
                                <img src={cumRap.hinhAnh} alt='' style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                <span className='pl-4'>{cumRap.tenCumRap}</span> - <span>{cumRap.diaChi}</span>
                            </div>
                            <div className='row'>
                                {cumRap.lichChieuPhim.slice(0, 5).map((lichChieu, index) => {
                                    console.log(lichChieu.maLichChieu);
                                    return <Link
                                        className='col-md-2 suatchieu'
                                        data-toggle={localStorage.getItem('USER_CUSTOMER') ? '' : "modal"}
                                        data-target="#myModalLogin"
                                        to={localStorage.getItem('USER_CUSTOMER') ? `/movie-seat/${lichChieu.maLichChieu}` : ''}>
                                        {moment(lichChieu.ngayChieuGioChieu).format('DD/MM/YYY')} ~ {moment(lichChieu.ngayChieuGioChieu).format('HH:MM')}
                                    </Link>
                                })}
                            </div>
                        </div>
                    })}
                </TabPane>
            })}
        </Tabs>
    )
}
