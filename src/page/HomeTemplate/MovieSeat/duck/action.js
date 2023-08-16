import api from '../../../../utils/apiUtils'
import * as types from './const'

const actMovieSeatRequest = () => {
    return {
        type: types.MOVIE_SEAT_REQUEST
    }
}

const actMovieSeatSuccess = (data) => {
    return {
        type: types.MOVIE_SEAT_SUCCESS,
        data
    }
}

const actMovieSeatFail = (error) => {
    return {
        type: types.MOVIE_SEAT_FAIL,
        error
    }
}

export const actBookingSeat = (danhSachGheChon) => {
    return {
        type: types.MOVIE_SEAT_BOOKING_SEAT,
        danhSachGheChon
    }
}

export const actMovieSeat = (maLichChieu) => {
    return (dispatch) => {
        dispatch(actMovieSeatRequest())
        api.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actMovieSeatSuccess(result.data.content))
                }
            })
            .catch((error) => {
                dispatch(actMovieSeatFail(error))
            });
    }
}

export const actDatVe = (maLichChieu, danhSachVe) => {
    const DanhSachVeDat = { maLichChieu, danhSachVe }
    return (dispatch) => {
        api.post(`QuanLyDatVe/DatVe`, DanhSachVeDat)
            .then((result) => {
                dispatch(actLayThongTin())
                
                dispatch({ type: types.DAT_VE_HOAN_TAT })

                dispatch(actChangePage('2'))

            })
            .catch((error) => {
                console.log(error);
            });
    }
}

// lấy thông tin người đặt

const actLayThongTinRequest = () => {
    return {
        type: types.LAY_THONG_TIN_REQUEST
    }
}

const actLayThongTinSuccess = (data) => {
    return {
        type: types.LAY_THONG_TIN_SUCCESS,
        data
    }
}

const actLayThongTinFail = (error) => {
    return {
        type: types.LAY_THONG_TIN_FAIL,
        error
    }
}

export const actLayThongTin = () => {
    return (dispatch) => {
        dispatch(actLayThongTinRequest())
        api.post('QuanLyNguoiDung/ThongTinTaiKhoan')
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actLayThongTinSuccess(result.data.content))
                }
            })
            .catch((error) => {
                dispatch(actLayThongTinFail(error))
            });
    }
}
export const actChangePage = (key) => {
    return {
        type: types.CHANGE_PAGE,
        key
    }
}

export const actSearch = (keyword)=>{
    return {
        type: types.SEARCH,
        keyword
    }
}