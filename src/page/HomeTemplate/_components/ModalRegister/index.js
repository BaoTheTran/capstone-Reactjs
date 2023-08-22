import React , {useState}from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actKhachHangDangKy } from '../../../AdminTemplate/AddUser/duck/action';

export default function ModalRegister() {
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
    dispatch(actKhachHangDangKy(state));
  }

  return (
    <div className="row">
  <div className="modal fade" id="myModal" role="dialog" style={{display: 'none'}}>
    <div className="modal-dialog modal-lg" style={{width: '80%'}}>
      <div className="modal-content" style={{backgroundColor: '#0c1a2a'}}>
        <div className="modal-header">
          <h4 className="modal-title" style={{color: '#F9C227'}}>ĐĂNG KÝ THÀNH VIÊN</h4>
          <button type="button" style={{color: '#F9C227'}} className="close" data-dismiss="modal">×</button>
          
        </div>
        <form onSubmit={handleSubmit}>
        <div className="modal-body" >
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 content-title">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 img-fluid">
                <img src={require("../../../../img/logo.png")} />
              </div>
              <h3 style={{color: '#fdb813'}} className='mt-3 mb-2'>Trải Nghiệm Rạp Phim Hiện Đại Chất Lượng Ngay Tại DDCINEMA</h3>
              <p style={{color: '#a9a9a9'}} className='mt-3'>Đăng ký trở thành thành viên chính thức để nhận được nhiều ưu đãi từ DDCINEMA ngay các bạn ơi!</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="alert alert-danger" style={{display: 'none'}} id="fail-alert">
                <button type="button" className="close" data-dismiss="alert">x</button>
                <strong>Thông báo! </strong> <span id="spanError" />
              </div>
              
              <div className="form-group d-flex">
                <div className="cols-sm-4 col-lg-4">
                  <label htmlFor="username" className="cols-sm-2 control-label">Tên Tài Khoản</label>
                </div>
                <div className="cols-sm-8 col-lg-8">
                  <div className="input-group" style={{width: '100%'}}>
                    <input type="text" className="form-control control-input"
                      name='taiKhoan'
                      onChange={handleOnchange}
                     id="username" 
                     placeholder="Nhập tên tài khoản" style={{borderRadius: 15}} />
                  </div>
                </div>
              </div>
              <div className="form-group d-flex" >
                <div className="cols-sm-4 col-lg-4">
                  <label htmlFor="password" className="cols-sm-2 control-label">Mật khẩu</label>
                </div>
                <div className="cols-sm-8 col-lg-8">
                  <div className="input-group" style={{width: '100%'}}>
                    <input type="password" className="form-control control-input" name='matKhau' 
                        onChange={handleOnchange} id="password" placeholder="Nhập mật khẩu" style={{borderRadius: 15}} />
                  </div>
                </div>
              </div>

              <div className="form-group d-flex">
                <div className="cols-sm-4 col-lg-4">
                  <label htmlFor="email" className="cols-sm-2 control-label">Email</label>
                </div>
                <div className="cols-sm-8 col-lg-8">
                  <div className="input-group" style={{width: '100%'}}>
                    <input type="text" className="form-control control-input" name='email' 
                        onChange={handleOnchange} id="email" placeholder="Nhập Email" style={{borderRadius: 15}} />
                  </div>
                </div>
              </div>
              <div className="form-group d-flex" >
                <div className="cols-sm-4 col-lg-4">
                  <label htmlFor="name" className="cols-sm-2 control-label">Họ Tên</label>
                </div>
                <div className="cols-sm-8 col-lg-8">
                  <div className="input-group" style={{width: '100%'}}>
                    <input type="text" className="form-control control-input"  name='hoTen' 
                        onChange={handleOnchange} id="name" placeholder="Nhập họ tên" style={{borderRadius: 15}} />
                  </div>
                </div>
              </div>

              <div className="form-group d-flex">
                <div className="cols-sm-4 col-lg-4">
                  <label htmlFor="username" className="cols-sm-2 control-label">Điện thoại</label>
                </div>
                <div className="cols-sm-8 col-lg-8">
                  <div className="input-group" style={{width: '100%'}}>
                    <input type="number" className="form-control control-input" name='soDT' 
                        onChange={handleOnchange} id="phone" placeholder="Nhập số điện thoại" min={0} style={{borderRadius: 15}} />
                  </div>
                </div>
              </div>

            
              
              <br />
              <p style={{textAlign: 'center'}}><input className="register_send" type="submit" defaultValue="Đăng ký" /></p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" id="clickButton" data-dismiss="modal" style={{color: '#fdb813', backgroundColor: '#0c1a2a', borderColor: '#fdb813'}}>Close</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

