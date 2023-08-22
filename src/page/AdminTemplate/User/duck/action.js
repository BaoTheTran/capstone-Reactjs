import { LIST_USER_REQUEST, LIST_USER_SUCCESS, LIST_USER_FAIL, DELETE_USER,EDIT_USER,SUBMIT_USER,SEARCH_USER } from "./contants";
import apiAdmin from "../../../../utils/apiAdmin";
import { toast } from 'react-toastify';

export const actFetchListUser = ()=>{
    return(dispatch)=>{
        dispatch(actListUserRequest());
        apiAdmin.get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01")
        .then((res)=>{
            if(res.data.statusCode=== 200){
                dispatch(actListUserSuccess(res.data.content));
            }
        })
        .catch((error)=>{
            dispatch(actListUserFail(error));
        })
    }
};

export const actDeleteUser =(taiKhoan)=>{
    return(dispatch)=>{
        apiAdmin.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
        .then((res)=>{
            alert('Xóa user thành công!');
            dispatch( actFetchListUser());
        })
        .catch((error)=>{
            console.log(error.response?.data);
        })
    }
}

export const actFetchEditUser =  (taiKhoan)=>{
    return(dispatch)=>{
        apiAdmin.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa=${taiKhoan}`)
        .then((res)=>{
            dispatch(actEdit(res.data.content[0]))
        })
        .catch((error)=>{
            console.log(error.response?.data);
        });
    }
}

export const actFetchUpdateUser = (user,navigate)=>{
    return async (dispatch)=>{
        await apiAdmin.post("QuanLyNguoiDung/CapNhatThongTinNguoiDung", user)
        .then((res)=>{
            toast.success('Cập nhật thành công!')
            if(res.data.statusCode === 200){
                dispatch(actClearModal())
                dispatch(actFetchListUser());
                navigate("/admin/manage-user");
            }
                
        })
        .catch((error)=>{
            console.log(error.response?.data);
        });
    }
}

const actListUserRequest=()=>{
    return{
        type: LIST_USER_REQUEST,
    }
};

const actListUserSuccess=(data)=>{
    return{
        type: LIST_USER_SUCCESS,
        payload: data,
    }
};

const actListUserFail=(error)=>{
    return{
        type: LIST_USER_FAIL,
        payload: error,
    }
};
///////////


const actEdit = (user)=>{
    return{
        type: EDIT_USER,
        payload : user,
    };
}

const actClearModal =()=>{
    return{
        type: EDIT_USER,
        payload : null,
    };
}