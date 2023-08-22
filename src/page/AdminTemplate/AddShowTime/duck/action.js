import { ADD_SHOWTIME_REQUEST, ADD_SHOWTIME__SUCCESS, ADD_SHOWTIME__FAIL, GET_CUMRAP } from "./constant";
import apiAdmin from "../../../../utils/apiAdmin";
import { toast } from 'react-toastify';

export const actHeThongRap = () => {
    return (dispatch) => {
        dispatch(actAddShowtimeRequest());
        apiAdmin.get("QuanLyRap/LayThongTinHeThongRap")
            .then((res) => {
                dispatch(actAddShowtimeSuccess(res.data.content))
                // console.log(res.data.content);
            })
            .catch((error) => {
                dispatch(actAddShowtimeFail(error))
                console.log(error.response?.data);
            })
    }
};

export const actMaHeThong = (maHeThongRap) => {
    return (dispatch) => {
        apiAdmin.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
            .then((res) => {
                dispatch(actGetCumRap(res.data.content))
                // console.log(res.data.content);
            })
            .catch((error) => {
                console.log(error.response?.data);
            })
    }
};

export const taoLichChieu = (data, navigate) => {
    return (dispatch) => {
        apiAdmin.post("QuanLyDatVe/TaoLichChieu", data)
            .then((res) => {
                console.log('success');
                if (res.data.statusCode === 200) {
                    toast.success('Tạo lịch chiếu thành công!!')
                    navigate("/admin/dashboard");
                }
            })
            .catch((error) => {
                console.log(error.response?.data);
            });
    }
};



const actAddShowtimeRequest = () => {
    return {
        type: ADD_SHOWTIME_REQUEST,
    }
}

const actAddShowtimeSuccess = (data) => {
    return {
        type: ADD_SHOWTIME__SUCCESS,
        payload: data,
    }
}

const actAddShowtimeFail = (error) => {
    return {
        type: ADD_SHOWTIME__FAIL,
        payload: error,
    }
}

const actGetCumRap = (data) => {
    return {
        type: GET_CUMRAP,
        payload: data,
    }
}