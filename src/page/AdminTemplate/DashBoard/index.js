import React, { Fragment, useEffect,useState } from 'react';
import { Table,Input, Space  } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchListMovieHomepage } from '../../HomeTemplate/HomePage/MovieItems/duck/actions';
import { NavLink } from 'react-router-dom';
import { actFetchEditFilm ,actDeleteFilm} from '../AddFilm/duck/action';


const { Search } = Input;


export default function DashBoard() {

  const arrFilm = useSelector((state)=>state.listMovieHompageReducer.data);
  const dispatch = useDispatch();
  
const onSearch = (value) =>{
  console.log(value);

  dispatch(actFetchListMovieHomepage(value));
 };

  useEffect(()=>{
    dispatch(actFetchListMovieHomepage());
    dispatch(actFetchEditFilm())
  },[])


  const columns = [
    {
      title: 'Mã Phim',
      dataIndex: 'maPhim',
      value:(text,object)=>{return <span>{text}</span>},
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ['descend'],
      width: '15%',
    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'hinhAnh',
      render: (text,film)=>{
        return <Fragment>
          <img src={film.hinhAnh} alt={film.tenPhim} width={50} height={50}
          onError={(e)=>{e.target.onError = null; e.target.src="http://ddcinema.vn/Content/Img/logo.png"}}
          />
        </Fragment>
      },
      width: '15%',
    },
    {
      title: 'Tên Phim',
      dataIndex: 'tenPhim',
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if(tenPhimA > tenPhimB){
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend'],
      width: '25%',
      
    },

    {
      title: 'Mô Tả',
      dataIndex: 'moTa',
      render:(text,film)=>{
        return  <Fragment>
          {film.moTa.length > 50 ? film.moTa.substr(0,50) + '...' : film.moTa}
        </Fragment>
      },
      width: '25%',
    },

    {
      title: 'Tùy Chỉnh',
      dataIndex: 'tuyChinh',
      render:(text,film)=>{
        return  <Fragment>
          <NavLink to={`/admin/edit-film/${film.maPhim}`}>
            <button className='btn btn-info'>Sửa</button>
          </NavLink>

            <button className='btn btn-danger'
            onClick={()=>{
              if(window.confirm(`Chắc là muốn xóa phim "${film.tenPhim}" dữ chưa??? `)){
                  dispatch(actDeleteFilm(film.maPhim))
              }
            }}
            >Xóa</button>

            <NavLink to={`/admin/add-show-time/${film.maPhim}`}>
              <button className='btn btn-warning'>Thêm lịch chiếu</button>
            </NavLink>

        </Fragment>
      },
      width: '25%',
    },
  ];
  const data = arrFilm;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  return (
    <div className='container'>
      <h1 className='text-warning text-center'>Quản Lý Phim</h1>
      <NavLink to="/admin/add-film">
        <button className='btn btn-success mb-2'>Thêm Phim</button>
      </NavLink>
      
      <Search
            className='mb-2'
            placeholder="Tìm kiếm phim"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
      <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"maPhim"}/>
    </div>
  )
}

