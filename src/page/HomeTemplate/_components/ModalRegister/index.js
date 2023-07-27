import React, { Component } from 'react'

export default class ModalRegister extends Component {
  render() {
    return (
        <div className="row">
  <div className="modal fade" id="myModal" role="dialog" style={{display: 'none'}}>
    <div className="modal-dialog modal-lg" style={{width: '80%'}}>
      <div className="modal-content" style={{backgroundColor: '#0c1a2a'}}>
        <div className="modal-header">
          <button type="button" style={{color: '#F9C227'}} className="close" data-dismiss="modal">×</button>
          <h4 className="modal-title" style={{color: '#F9C227'}}>ĐĂNG KÝ THÀNH VIÊN</h4>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 content-title">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <img src="http://ddcinema.vn/Content/Img/logo.png" />
              </div>
              <h3 style={{color: '#fdb813'}} className='mt-3 mb-2'>Trải Nghiệm Rạp Phim Hiện Đại Chất Lượng Ngay Tại DDCINEMA</h3>
              <p style={{color: '#a9a9a9'}} className='mt-3'>Đăng ký trở thành thành viên chính thức để nhận được nhiều ưu đãi từ DDCINEMA ngay các bạn ơi!</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="alert alert-danger" style={{display: 'none'}} id="fail-alert">
                <button type="button" className="close" data-dismiss="alert">x</button>
                <strong>Thông báo! </strong> <span id="spanError" />
              </div>
              <div className="form-group" style={{paddingTop: '5%'}}>
                <div className="cols-sm-4 col-lg-4">
                  <label htmlFor="username" className="cols-sm-2 control-label">Tên đăng nhập</label>
                </div>
                <div className="cols-sm-8 col-lg-8">
                  <div className="input-group" style={{width: '100%'}}>
                    <input type="text" className="form-control control-input" name="UserName" id="username" placeholder="Nhập tên đăng nhập" style={{borderRadius: 15}} />
                    <span className="field-validation-valid text-danger" data-valmsg-for="UserName" data-valmsg-replace="true" />
                  </div>
                </div>
              </div>
              <div className="form-group" style={{paddingTop: '5%'}}>
                <div className="cols-sm-4 col-lg-4">
                  <label htmlFor="password" className="cols-sm-2 control-label">Mật khẩu</label>
                </div>
                <div className="cols-sm-8 col-lg-8">
                  <div className="input-group" style={{width: '100%'}}>
                    <input type="password" className="form-control control-input" name="Password" id="password" placeholder="Nhập mật khẩu" style={{borderRadius: 15}} />
                  </div>
                </div>
              </div>
              <div className="form-group" style={{paddingTop: '5%'}}>
                <div className="cols-sm-4 col-lg-4">
                  <label htmlFor="confirm" className="cols-sm-2 control-label">Xác nhận mật khẩu</label>
                </div>
                <div className="cols-sm-8 col-lg-8">
                  <div className="input-group" style={{width: '100%'}}>
                    <input type="password" className="form-control control-input" name="confirmPassword" id="confirmPassword" placeholder="Nhập lại mật khẩu" style={{borderRadius: 15}} />
                  </div>
                </div>
              </div>
              <div className="form-group" style={{paddingTop: '5%'}}>
                <div className="cols-sm-4 col-lg-4">
                  <label htmlFor="email" className="cols-sm-2 control-label">Email</label>
                </div>
                <div className="cols-sm-8 col-lg-8">
                  <div className="input-group" style={{width: '100%'}}>
                    <input type="text" className="form-control control-input" name="Email" id="email" placeholder="Nhập Email" style={{borderRadius: 15}} />
                  </div>
                </div>
              </div>
              <div className="form-group" style={{paddingTop: '5%'}}>
                <div className="cols-sm-4 col-lg-4">
                  <label htmlFor="name" className="cols-sm-2 control-label">Họ Tên</label>
                </div>
                <div className="cols-sm-8 col-lg-8">
                  <div className="input-group" style={{width: '100%'}}>
                    <input type="text" className="form-control control-input" name="FullName" id="name" placeholder="Nhập họ tên" style={{borderRadius: 15}} />
                  </div>
                </div>
              </div>
              <div className="form-group" style={{paddingTop: '5%'}}>
                <div className="cols-sm-4 col-lg-4">
                  <label htmlFor="name" className="cols-sm-2 control-label">Giới tính</label>
                </div>
                <div className="cols-sm-8 col-lg-8">
                  <div className="input-group control-label">
                    <input type="radio" name="Gender" id="gender" defaultValue={0} defaultChecked /><span className="radio-sex">NAM</span>
                    <input type="radio" name="Gender" id="gender" defaultValue={1} /><span className="radio-sex">NỮ</span>
                  </div>
                </div>
              </div>
              <div className="form-group" style={{paddingTop: '5%'}}>
                <div className="cols-sm-4 col-lg-4">
                  <label htmlFor="username" className="cols-sm-2 control-label">Số CMND</label>
                </div>
                <div className="cols-sm-8 col-lg-8">
                  <div className="input-group" style={{width: '100%'}}>
                    <input type="number" className="form-control control-input" name="Identifi" id="cmnd" placeholder="Nhập số CMND" style={{borderRadius: 15}} />
                  </div>
                </div>
              </div>
              <div className="form-group" style={{paddingTop: '5%'}}>
                <div className="cols-sm-4 col-lg-4">
                  <label htmlFor="username" className="cols-sm-2 control-label">Ngày sinh</label>
                </div>
                <div className="cols-sm-8 col-lg-8">
                  <div className="input-group" style={{width: '100%'}}>
                    <input type="date" className="form-control control-input" name="BirthDay" id="birthday" style={{borderRadius: 15}} />
                  </div>
                </div>
              </div>
              <div className="form-group" style={{paddingTop: '5%'}}>
                <div className="cols-sm-4 col-lg-4">
                  <label htmlFor="username" className="cols-sm-2 control-label">Địa chỉ</label>
                </div>
                <div className="cols-sm-8 col-lg-8">
                  <div className="input-group" style={{width: '100%'}}>
                    <input type="text" className="form-control control-input" name="Address" id="address" placeholder="Nhập địa chỉ" style={{borderRadius: 15}} />
                  </div>
                </div>
              </div>
              <div className="form-group" style={{paddingTop: '5%'}}>
                <div className="cols-sm-4 col-lg-4">
                  <label htmlFor="username" className="cols-sm-2 control-label">Điện thoại</label>
                </div>
                <div className="cols-sm-8 col-lg-8">
                  <div className="input-group" style={{width: '100%'}}>
                    <input type="number" className="form-control control-input" name="Phone" id="phone" placeholder="Nhập số điện thoại" min={0} style={{borderRadius: 15}} />
                  </div>
                </div>
              </div>
              <div className="input-group" style={{paddingTop: '5%'}}>
                <input type="checkbox" id="check-dieu-khoan" />
                <span style={{color: '#fdb813', padding: '0 10px'}}>Tôi đã đọc và đồng ý với mọi điều khoản của DDCINEMA.</span>
              </div>
              <br />
              <p style={{textAlign: 'center'}}><input className="register_send" type="submit" defaultValue="Đăng ký" /></p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" id="clickButton" data-dismiss="modal" style={{color: '#fdb813', backgroundColor: '#0c1a2a', borderColor: '#fdb813'}}>Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

    )
  }
}
