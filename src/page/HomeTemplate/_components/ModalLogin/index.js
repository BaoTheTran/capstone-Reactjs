import React, { Component } from 'react'

export default class ModalLogin extends Component {
  render() {
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

  <form >
  <div className="d-flex">
   
      <div className="form-group p-3">
        <label className='font-weight-bold text-warning'>Tên đăng nhập</label>
        <input type="text" className='form-control'
        name ="taiKhoan"/>
      </div>
      <div className="form-group p-3">
        <label className='font-weight-bold text-warning'>Mật khẩu</label>
        <input type="password" className='form-control'
        name ="matKhau"/>
      </div>
      </div>
    </form>
  
    <button className='btn btn-warning font-weight-bold'>ĐĂNG NHẬP</button>
</div>

      {/* Modal footer */}
      <div className="modal-footer">
            <button type="button" id="clickButtonLG" className="btn btn-default" data-dismiss="modal" style={{color: '#fdb813', backgroundColor: '#0c1a2a', borderColor: '#fdb813'}}>Close</button>
      </div>  

    </div>
  </div></div>

    )
  }
}
