import React, { useEffect, useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { actDatVe, actLayThongTin, actMovieSeat } from './duck/action'
import { useParams } from 'react-router-dom'
import { actBookingSeat } from './duck/action'
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Tabs, Card } from 'antd';
import TabPane from 'antd/es/tabs/TabPane'
import moment from 'moment/moment'
import { actChangePage } from './duck/action'
import Loading from '../_components/Loading/loading'
import { actSearch } from './duck/action'

function MovieSeat(props) {
  const dispatch = useDispatch()
  const params = useParams()
  let tongTien = 0

  let { data, loading, danhSachGheChon, danhSachGheNguoiKhacDat } = useSelector(state => state.movieSeatReducer)

  const layMaGhe = (ghe) => {
    dispatch(actBookingSeat(ghe))
  }

  useEffect(() => {
    dispatch(actMovieSeat(params.maLichChieu))
  }, [])

  if (loading) return <Loading />

  return (

    <div className='row py-3'>
      <div className='col-md-8 '>
        <h2 className='text-center pb-4'>Movie Seat</h2>

        <table className='container text-center'>
          <thead>
            <tr>
              <th>ghế thường</th>
              <th>ghế đã bán</th>
              <th>ghế vip</th>
              <th>ghế của mình</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><button disabled className='seat'></button></td>
              <td><button disabled className='seat seat-none'></button></td>
              <td><button disabled className='seat seat-vip'></button></td>
              <td><button disabled className='seat seat-my-choose'><UserOutlined /></button></td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div className='movie-seat'>
          <div className='creen'></div>
          <div className='seat-movie container'>
            {data?.danhSachGhe?.map((ghe, index) => {

              // class cho ghế vip
              let classGheVip = ghe.loaiGhe === 'Vip' ? 'seat-vip' : '';

              // class cho ghế đã có người đặt
              let classDaDat = ghe.daDat === true ? 'seat-none' : ''

              // kiểm tra ghế nào do mình đặt sẽ cho classGheMinhDat
              let classGheMinhDat = ''
              const userLogin = JSON.parse(localStorage.getItem('USER_CUSTOMER'))
              if (userLogin?.taiKhoan === ghe.taiKhoanNguoiDat) {
                classGheMinhDat = 'seat-my-choose'
              }

              // kiểm tra từng ghế nếu ghế mình đang đặt sẽ cho classGheChon
              let classGheChon = ''
              const IndexGheChon = danhSachGheChon?.findIndex(item => item.maGhe === ghe.maGhe)
              if (IndexGheChon !== -1) {
                classGheChon = 'seat-slc'
              }

              // kiểm tra từng ghế nếu ghế người khác đặt sẽ cho classGheDangDat
              let classGheDangDat = ''
              const indexGheNguoiKhacChon = danhSachGheNguoiKhacDat.findIndex(item => item.maGhe === ghe.maGhe)
              if (indexGheNguoiKhacChon !== -1) {
                classGheDangDat = 'seat-people-choose'
              }

              return <>
                <button
                  key={index}
                  onClick={() => layMaGhe(ghe)}
                  disabled={ghe.daDat || classGheDangDat !== ''}
                  className={`seat ${classGheVip} ${classDaDat} ${classGheChon} ${classGheMinhDat} ${classGheDangDat}`}
                >{ghe.daDat === true ? // trường hợp đã có người đặt

                  // kiểm tra tiếp xem ghế mình đặt hay người khác đặt
                  classGheMinhDat != '' ?

                    // trường hợp ghế mình đặt
                    <UserOutlined style={{ marginBottom: '10px' }} /> :

                    // trường hợp người khác đặt
                    '' :

                    // trường hợp chưa ai đặt
                    ghe.tenGhe}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
              </>
            })}
          </div>

        </div>
      </div>

      <div className='col-md-4 px-4' style={{ paddingTop: '100px' }}>
        <div className="card">
          <h3 className="card-header text-center">Thông tin vé</h3>
          <div className="card-body">
            <div>
              <p className='thong-tin-ve'>Tên phim: <span>{data?.thongTinPhim?.tenPhim}</span></p>
              <p className='thong-tin-ve'>Tên rạp: {data?.thongTinPhim?.tenCumRap} ({data?.thongTinPhim?.tenRap})</p>
              <p className='thong-tin-ve'>Địa chỉ: {data?.thongTinPhim?.diaChi}</p>
            </div>
            <hr />
            <div style={{ height: '150px' }}>
              <h5>Ghế đã đặt</h5>
              <div>{danhSachGheChon?.map((ghe) => {
                tongTien += ghe.giaVe
                return <span style={{ padding: '5px', fontSize: '20px', color: 'green' }}>[{ghe.tenGhe}] </span>
              })}
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
              <h2 className='text-right'>Tổng tiền: </h2>
              <h2>{tongTien}đ</h2>

            </div>
          </div>
          <button
            onClick={() => {
              dispatch(actDatVe(data.thongTinPhim.maLichChieu, danhSachGheChon))
            }}
            className='btn btn-success form-control'>Đặt vé</button>
        </div>
      </div>
    </div>
  )
}

export default function (props) {
  const dispatch = useDispatch()
  const params = useParams()
  let { changePage } = useSelector((state) => state.movieSeatReducer)

  return <Tabs
    tabPosition='top'
    defaultActiveKey='1'
    activeKey={changePage}
    onChange={(key) => {
      dispatch(actChangePage(key))
      if (key === '1') {
        dispatch(actMovieSeat(params.maLichChieu))
      }
      dispatch(actLayThongTin())
    }}
  >
    <TabPane tab='01 CHỌN GHÊ & THANH TOÁN' key='1' >
      <MovieSeat />
    </TabPane>
    <TabPane tab='02 KẾT QUẢ ĐẶT VÉ' key='2' >
      <ThongTinTicket />
    </TabPane>
  </Tabs>
}

function ThongTinTicket() {
  const dispatch = useDispatch()
  let { data, loading, search } = useSelector(state => state.movieSeatReducer)
  let thongTinDatVe = data?.thongTinDatVe

  useEffect(() => {
    dispatch(actLayThongTin())
  }, [])

  if (loading) return <Loading />

  const filterTicket = (e) => {
    let { value } = e.target
    let keyWord = value.toLowerCase()
    dispatch(actSearch(keyWord))
  }

  // search
  thongTinDatVe = data?.thongTinDatVe?.filter(item => item.tenPhim.toLowerCase().indexOf(search) !== -1)
  return (
    <>
      <h2 className='text-center'>Thông tin đặt vé</h2>
      <p className='text-center'>Vui lòng kiểm tra thông tin vé !!</p>
      <input className='form-control container' placeholder='Tên phim ...' type='text' onChange={(event) => filterTicket(event)} />
      <div className='row'>
        <div className='col-md-2' style={{ borderRight: '1px solid', height: '100%' }}>
          <h5 className='text-center  mb-4'>Thông tin tài khoản</h5>
          <div className='mx-5'>
            <img style={{ width: '30px', height: '30px' }} src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png' alt='' />
            <span style={{ fontSize: '20px', marginLeft: '10px' }}>{data?.taiKhoan}</span>
          </div>
          <br />
          <div className='mx-4'>
            <p className='py-2' style={{ fontSize: 15 }}>Họ và tên: {data?.hoTen}</p>
            <p className='py-2' style={{ fontSize: 15 }}>Email: {data?.email}</p>
            <p className='py-2' style={{ fontSize: 15 }}>Số điện thoại: {data?.soDT}</p>
          </div>
        </div>
        <div className='col-md-10'>
          <div className='row'>
            {thongTinDatVe?.map((item, index) => {
              return item?.danhSachGhe.map((ghe, index) => {
                return <Card key={index} className='col-md-3 m-3' title={ghe.tenHeThongRap} bordered={false} style={{ width: '300px', height: '300px', maxWidth: '340px' }}>
                  <div className='my-3'>
                    <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={item.hinhAnh} alt='' />
                    <span style={{ fontSize: '20px', marginLeft: '10px' }}>{item.tenPhim}</span>
                  </div>
                  <p>Ngày đặt: {moment(item.ngayDat).format('DD/MM/YYYY')} - Giờ chiếu: {moment(item.ngayDat).format('HH:MM A')}</p>
                  <p>{ghe.tenRap}</p>
                  <p>Ghế: {ghe.tenGhe}</p>
                  <p>Mã vé: {item.maVe}</p>
                </Card>
              })
            })}

          </div>
        </div>
      </div>
    </>
  )
}

