import React, { useState }  from 'react';
import {  useNavigate ,Navigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchCustomer } from '../../../AdminTemplate/AuthPage/duck/actions';


export default function ModalLogin() {
  const dispatch = useDispatch();
  const error = useSelector((state)=>state.adminReducer.error);
  const navigate = useNavigate();

  const [state,setState] = useState({
        taiKhoan: "",
        matKhau: "",
  });

  const handleOnchange = (event)=>{
    const {name,value} = event.target;
    setState({
      ...state,
      [name] : value,
    })
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(actFetchCustomer(state))
    console.log(state);
  };





  return (
    <div className="modal modal fade" id="myModalLogin">
    <div className="modal-dialog">
      <div className="modal-content" style={{backgroundColor: '#0c1a2a'}}>
        {/* Modal Header */}
       <div className="modal-header">
          <h4 className="modal-title" style={{color: '#F9C227'}}>ĐĂNG NHẬP</h4>
          <button type="button" style={{color: '#F9C227'}} className="close" data-dismiss="modal">×</button>
        </div>
  
        {/* Modal body */}
        <div className="modal-body">
    <p className="slogan-login text-muted">Bạn đã là thành viên của DDCINEMA chưa? <a className="login-change-regis text-warning" data-toggle="modal" data-target="#myModal" data-dismiss="modal">Đăng ký</a> thành viên ngay nào !</p>
  
    <form onSubmit={handleSubmit}>
    <div className="d-flex">
     
        <div className="form-group p-3">
          <label className='font-weight-bold text-warning'>Tên đăng nhập</label>
          <input type="text" className='form-control'
          onChange={handleOnchange}
          name ="taiKhoan"/>
        </div>
        <div className="form-group p-3">
          <label className='font-weight-bold text-warning'>Mật khẩu</label>
          <input type="text" className='form-control'
          onChange={handleOnchange}
          name ="matKhau"/>
        </div>
        </div>
        {error && (<div className='alert alert-danger'>${error?.response.data.content}</div>)}
        <div className='text-center'>
          <button className='btn btn-warning font-weight-bold'>ĐĂNG NHẬP</button>
        </div>
      </form>
  </div>
  
        {/* Modal footer */}
        <div className="modal-footer">
              <button type="button" id="clickButtonLG" className="btn btn-default" data-dismiss="modal" style={{color: '#fdb813', backgroundColor: '#0c1a2a', borderColor: '#fdb813'}}>Close</button>
        </div>  
  
      </div>
    </div>
    </div>
  )
}
