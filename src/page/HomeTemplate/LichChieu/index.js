import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actLichChieu } from './duck/action'
import { Link, useParams } from 'react-router-dom'
import './style.css'
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane'
import moment from 'moment/moment'
import _ from 'lodash'
import { actMovieSeat } from '../MovieSeat/duck/action'

export default function LichChieu() {
  const dispatch = useDispatch()
  const params = useParams()
  const data = useSelector((state) => state.lichChieuReducer.data)
  const loadding = useSelector((state) => state.lichChieuReducer.loadding)
  const [tabPosition, setTabPosition] = useState('left');

  useEffect(() => {
    dispatch(actLichChieu())

  }, [])

  const renderHeThongRap = () => {
    return data?.map((heThongRap, index) => {
      return <TabPane tab={<img style={{ height: '50%', width: '100%', maxWidth: '50px' }} src={heThongRap.logo} />} key={index}>
        <Tabs tabPosition={tabPosition}>
          {heThongRap?.lstCumRap.map((cumRap, index) => {
            return <TabPane tab={
              <div className='pb-3'>
                <img src={cumRap.hinhAnh} alt='' style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                <span className='pl-4'>{cumRap.tenCumRap}</span> - <span>{cumRap.diaChi}</span>
              </div>
            } key={index}>
              <Tabs tabPosition={tabPosition}>
                {cumRap?.danhSachPhim.slice(0, 6).map((phim, index) => {
                  return <TabPane tab={
                    <div>
                      <img style={{ height: '50%', width: '100%', maxWidth: '50px', display: 'inline-block' }} src={phim.hinhAnh} />
                      <span style={{ padding: '10px' }}>{phim.tenPhim}</span>
                    </div>
                  } key={index}>
                    <div className='row'>
                      {phim?.lstLichChieuTheoPhim.slice(0, 6).map((xuatChieu, index) => {
                        return <Link
                          key={index}
                          className='col-md-4 mx-3 calendar-item'
                          // data-toggle={localStorage.getItem('user') ? '' : "modal"} 
                          // data-target="#myModalLogin" 
                          to={`/movie-seat/${xuatChieu.maLichChieu}`}
                        >
                          <div >
                            {moment(xuatChieu.ngayChieuGioChieu).format('DD/MM/YYYY')} - {moment(xuatChieu.ngayChieuGioChieu).format('HH:MM A')}
                          </div>
                        </Link>
                      })}
                    </div>
                  </TabPane>
                })}
              </Tabs>
            </TabPane>
          })}
        </Tabs>
      </TabPane>
    })
  }
  if (loadding) return <div>loadding ...</div>
  return (
    <>
      <div>
        <h2 className='text-center py-3'>Lịch chiếu</h2>
      </div>

      <hr />

      <Tabs
        tabPosition={tabPosition}>
        {renderHeThongRap()}
      </Tabs>
    </>
  )
}
