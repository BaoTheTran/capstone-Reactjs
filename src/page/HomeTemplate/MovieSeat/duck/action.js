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