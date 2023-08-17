import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { actFetchEditUser } from '../User/duck/action';
import { actFetchUpdateUser } from '../User/duck/action';



export default function EditUser() {
  const dispatch = useDispatch();
  const error = useSelector((state)=>state.listUserReducer.error);
  const dataEdit = useSelector((state)=>state.listUserReducer.userEdit);
  const params = useParams();
  const navigate = useNavigate();
  console.log(dataEdit);


  useEffect(()=>{
    dispatch(actFetchEditUser(params.id));
  },[]);

  
  const [state,setState]= useState({
    taiKhoan: dataEdit?.taiKhoan,
    matKhau: dataEdit?.matKhau,
    email: dataEdit?.email,
    soDT: dataEdit?.soDT,
    maNhom: "GP01",
    maLoaiNguoiDung: dataEdit?.maLoaiNguoiDung,
    hoTen: dataEdit?.hoTen,
  });
  console.log(state);
  
  const handleOnchange = (event)=>{
    const {name, value} = event.target;
    console.log(event.target.value);
    setState({
      ...state,
      [name] : value,
    })
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(state);
    dispatch(actFetchUpdateUser(state, navigate));
  }


  return (
    
    <div  className="container" >
      
        <div className='row p-3'>
            <div className='col-md-6 mx-auto alert alert-secondary p-4'>
   
              <h3 className='text-center text-success'>CẬP NHẬT NGƯỜI DÙNG</h3>
            
        
                
                <form onSubmit={handleSubmit} >
                    <div className='form-group'>
                        <label htmlFor="" className='font-weight-bolder text-warning'>Tài Khoản</label>
                        <input type="text" className='form-control' 
                        name='taiKhoan'
                        onChange={handleOnchange}
                        disabled
                        defaultValue={dataEdit?.taiKhoan || ''}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="" className='font-weight-bolder text-warning'>Mật Khẩu</label>
                        <input type="text" className='form-control' 
                        name='matKhau' 
                        onChange={handleOnchange}
                        defaultValue={dataEdit?.matKhau || ''}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="" className='font-weight-bolder text-warning'>Email</label>
                        <input type="text" className='form-control' 
                        name='email' 
                        onChange={handleOnchange}
                        defaultValue={dataEdit?.email || ''}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="" className='font-weight-bolder text-warning'>Số điện thoại</label>
                        <input type="number" className='form-control' 
                        name='soDT' 
                        onChange={handleOnchange}
                        defaultValue={dataEdit?.soDT || ''}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="" className='font-weight-bolder text-warning'>Mã loại người dùng</label>
                        <select name="maLoaiNguoiDung" id="" className='form-control' onChange={handleOnchange}
                        defaultValue={dataEdit?.maLoaiNguoiDung || ''}
                        >
                          <option value="KhachHang">Khách hàng</option>
                          <option value="QuanTri ">Quản trị</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="" className='font-weight-bolder text-warning'>Họ tên</label>
                        <input type="text" className='form-control' 
                        name='hoTen' 
                        onChange={handleOnchange}
                        defaultValue={dataEdit?.hoTen || ''}
                        />
                    </div>
                    <button className='btn btn-success pr-5 pl-5' type='submit'>CẬP NHẬT</button>
                    
                </form>
              
                
               
            </div>
        </div>
    </div>
  )
}
