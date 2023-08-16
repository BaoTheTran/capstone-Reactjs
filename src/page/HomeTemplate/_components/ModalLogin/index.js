import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actLogin } from './duck/action'

class ModalLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taiKhoan: '',
      matKhau: '',
    }
  }
  handleValue = (e) => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    this.props.dispatchLogin(this.state)
  }

  render() {
    return (
      <div className="modal modal fade" id="myModalLogin">
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: '#0c1a2a' }}>
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title" style={{ color: '#F9C227' }}>ĐĂNG NHẬP</h4>
              <button type="button" style={{ color: '#F9C227' }} className="close" data-dismiss="modal">×</button>
            </div>

            {/* Modal body */}
            <div className="modal-body">
              <p className="slogan-login text-muted">Bạn đã là thành viên của DDCINEMA chưa? <a className="login-change-regis text-warning" data-toggle="modal" data-target="#myModal" data-dismiss="modal">Đăng ký</a> thành viên ngay nào !</p>

              <form onSubmit={(event)=> this.handleSubmit(event)}>
                <div className="d-flex">

                  <div className="form-group p-3">
                    <label className='font-weight-bold text-warning'>Tên đăng nhập</label>
                    <input onChange={(event) => this.handleValue(event)} type="text" className='form-control'
                      name="taiKhoan" />
                  </div>
                  <div className="form-group p-3">
                    <label className='font-weight-bold text-warning'>Mật khẩu</label>
                    <input onChange={(event) => this.handleValue(event)} type="password" className='form-control'
                      name="matKhau" />
                  </div>
                </div>
              <button className='btn btn-warning font-weight-bold'>ĐĂNG NHẬP</button>
              </form>

            </div>

            {/* Modal footer */}
            <div className="modal-footer">
              <button type="button" id="clickButtonLG" className="btn btn-default" data-dismiss="modal" style={{ color: '#fdb813', backgroundColor: '#0c1a2a', borderColor: '#fdb813' }}>Close</button>
            </div>

          </div>
        </div></div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogin: (data) => {
      dispatch(actLogin(data));
    }
  }
};

export default connect(null,mapDispatchToProps)(ModalLogin)