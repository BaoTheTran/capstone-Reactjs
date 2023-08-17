import { ADMIN_REQUEST,ADMIN_SUCCESS,ADMIN_FAIL,ADMIN_LOGOUT } from "./constant";
import { NavLink } from "react-router-dom";
import api from "../../../../utils/apiUtils";

export const actFetchAdmin =(user,navigate)=>{
    return(dispatch)=>{
        dispatch(actAdminRequest());
        api.post("QuanLyNguoiDung/DangNhap",user)
        .then((res)=>{
            if(res.data.statusCode === 200){
                const user = res.data.content;
                if (!(user.maLoaiNguoiDung === "QuanTri")){
                    const error={
                        response:{
                            data:{
                                content: "Bạn không được cấp quyền truy cập!",
                            },
                        },
                    }
                    return Promise.reject(error)
                }
                dispatch(actAdminSuccess(user));
                localStorage.setItem("USER_ADMIN", JSON.stringify(user));
                navigate("/admin/dashboard", {replace: true});
            }
        })
        .catch((error)=>{
            dispatch(actAdminFail(error))
            // console.log(error.response.data.content);
        })
    }
}

//Log Out
export const actLogOut =(navigate)=>{
    localStorage.removeItem("USER_ADMIN");
    navigate("/auth", {replace: true});
    return{
        type : ADMIN_LOGOUT,
    }
};

export const actFetchCustomer =(user)=>{
    return(dispatch)=>{
        dispatch(actAdminRequest());
        api.post("QuanLyNguoiDung/DangNhap",user)
        .then((res)=>{
            if(res.data.statusCode === 200){
                const user = res.data.content;
                if (user.maLoaiNguoiDung === "QuanTri"){
                    const error={
                        response:{
                            data:{
                                content: "Vui lòng đăng nhập tài khoản khách hàng!",
                            },
                        },
                    }
                    return Promise.reject(error)
                }
                dispatch(actAdminSuccess(user));
                localStorage.setItem("USER_CUSTOMER", JSON.stringify(user));
                alert('Đăng nhập thành công!');
                // navigate("/", {replace: true});
            }
        })
        .catch((error)=>{
            dispatch(actAdminFail(error))
            console.log(error.response.data.content);
        })
    }
};

export const actLogOutCustomer =(navigate)=>{
    localStorage.removeItem("USER_CUSTOMER");
    navigate("/", {replace: true});
    return{
        type : ADMIN_LOGOUT,
    }
};



const actAdminRequest=()=>{
    return{
        type: ADMIN_REQUEST,
    }
}

const actAdminSuccess=(data)=>{
    return{
        type: ADMIN_SUCCESS,
        payload: data,
    }
}

const actAdminFail=(error)=>{
    return{
        type: ADMIN_FAIL,
        payload: error,
    }
}