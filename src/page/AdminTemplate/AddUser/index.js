import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actAddUser } from './duck/action';

export default function AddUser() {
  const dispatch = useDispatch();
  const error = useSelector((state)=>state.addUserReducer.error);

  const [state,setState]= useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDT: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  })
  
  const handleOnchange = (event)=>{
    const {name, value} = event.target;
    setState({
      ...state,
      [name] : value,
    })
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(state);
      dispatch(actAddUser(state));
  }


  return (
    
    <div  className="container" >
      
        <div className='row p-3'>
            <div className='col-md-6 mx-auto alert alert-secondary p-4'>
   
              <h3 className='text-center'>THÊM NGƯỜI DÙNG</h3>
            
        
                
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="" className='font-weight-bolder text-warning'>Tài Khoản</label>
                        <input type="text" className='form-control' 
                        name='taiKhoan'
                        onChange={handleOnchange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="" className='font-weight-bolder text-warning'>Mật Khẩu</label>
                        <input type="text" className='form-control' 
                        name='matKhau' 
                        onChange={handleOnchange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="" className='font-weight-bolder text-warning'>Email</label>
                        <input type="text" className='form-control' 
                        name='email' 
                        onChange={handleOnchange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="" className='font-weight-bolder text-warning'>Số điện thoại</label>
                        <input type="text" className='form-control' 
                        name='soDT' 
                        onChange={handleOnchange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="" className='font-weight-bolder text-warning'>Mã loại người dùng</label>
                        <select name="maLoaiNguoiDung" id="" className='form-control' onChange={handleOnchange}>
                          <option value="KhachHang">Khách hàng</option>
                          <option value="QuanTri ">Quản trị</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="" className='font-weight-bolder text-warning'>Họ tên</label>
                        <input type="text" className='form-control' 
                        name='hoTen' 
                        onChange={handleOnchange}
                        />
                    </div>
                    <button className='btn btn-warning pr-5 pl-5'>THÊM MỚI</button>
                    {error && (<div className='alert alert-danger'>${error?.response.data.content}. Vui lòng thay đổi!</div>)}
                    
                </form>
              
                
               
            </div>
        </div>
    </div>
  )
}
