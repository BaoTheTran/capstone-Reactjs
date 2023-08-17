import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actDeleteUser } from '../duck/action';
import { NavLink } from 'react-router-dom';

class UserItem extends Component {
  render() {

    const {user,deleteUser} = this.props;
    return (
        <tr>
        <td>{user.hoTen}</td>
        <td>{user.taiKhoan}</td>
        <td>{user.email}</td>
        <td>{user.soDT}</td>
        <td>{user.maLoaiNguoiDung}</td>
        <td>
          <NavLink to={`/admin/edit-user/${user.taiKhoan}`}>
            <button className='btn btn-info'>Cập Nhật</button>
          </NavLink>
     
          <button className='btn btn-danger'
          onClick={()=>{
            if(window.confirm(`Chắc là muốn đưa "${user.taiKhoan}" ra đảo dữ chưa??? `)){
              deleteUser(user.taiKhoan)
            }           
          }}
          >Xóa</button>
        </td>
    </tr>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    deleteUser:(index)=>{
      dispatch(actDeleteUser(index));
    }
  }
};

export default connect(null,mapDispatchToProps) (UserItem);

