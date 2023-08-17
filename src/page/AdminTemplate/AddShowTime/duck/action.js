import { ADD_SHOWTIME_REQUEST,ADD_SHOWTIME__SUCCESS,ADD_SHOWTIME__FAIL,GET_CUMRAP } from "./constant";
import api from "../../../../utils/apiUtils";

export const actHeThongRap =()=>{
    return(dispatch)=>{
        dispatch(actAddShowtimeRequest());
        api.get("QuanLyRap/LayThongTinHeThongRap")
        .then((res)=>{
            dispatch( actAddShowtimeSuccess(res.data.content))
            // console.log(res.data.content);
        })
        .catch((error)=>{
            dispatch(actAddShowtimeFail(error))
            console.log(error.response?.data);
        })
    }
};

export const actMaHeThong =(maHeThongRap)=>{
    return(dispatch)=>{
        api.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
        .then((res)=>{
            dispatch( actGetCumRap(res.data.content))
            // console.log(res.data.content);
        })
        .catch((error)=>{
            console.log(error.response?.data);
        })
    }
};

export const taoLichChieu = (data,navigate)=>{
    return(dispatch)=>{
        api.post("QuanLyDatVe/TaoLichChieu", data)
        .then((res)=>{
            alert('Khởi tạo thành công!')
            if(res.data.statusCode === 200){
                navigate("/admin/dashboard");
            }
        })
        .catch((error)=>{
            console.log(error.response?.data);
        });
    }
};



const actAddShowtimeRequest=()=>{
    return{
        type: ADD_SHOWTIME_REQUEST,
    }
}

const actAddShowtimeSuccess=(data)=>{
    return{
        type: ADD_SHOWTIME__SUCCESS,
        payload: data,
    }
}

const actAddShowtimeFail=(error)=>{
    return{
        type: ADD_SHOWTIME__FAIL,
        payload: error,
    }
}

const actGetCumRap=(data)=>{
    return{
        type: GET_CUMRAP,
        payload: data,
    }
}