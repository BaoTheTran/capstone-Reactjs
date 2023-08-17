import * as ActionTypes from "./contants";
import api from "../../../../utils/apiUtils";

export const actAddUser =(user)=>{
    return(dispatch)=>{
        dispatch(actAddUserRequest);
        api.post("QuanLyNguoiDung/ThemNguoiDung",user)
        .then((res)=>{
            alert('Thêm user thành công!');
            console.log(res.data);
        })
        .catch((error)=>{
            dispatch(actAddUserFail(error));
            console.log(error.response?.data);
        })
    }
}

export const actKhachHangDangKy =(user)=>{
    return(dispatch)=>{
        dispatch(actAddUserRequest);
        api.post("QuanLyNguoiDung/DangKy",user)
        .then((res)=>{
            alert('Đăng ký thành công!');
            console.log(res.data);
        })
        .catch((error)=>{
            dispatch(actAddUserFail(error));
            console.log(error.response?.data);
        })
    }
}

const actAddUserRequest=()=>{
    return{
        type: ActionTypes.ADD_USER_REQUEST,
    }
}

const actAddUserSuccess=(data)=>{
    return{
        type: ActionTypes.ADD_USER_SUCCESS,
        payload: data,
    }
}

const actAddUserFail=(error)=>{
    return{
        type: ActionTypes.ADD_USER_FAIL,
        payload: error,
    }
}