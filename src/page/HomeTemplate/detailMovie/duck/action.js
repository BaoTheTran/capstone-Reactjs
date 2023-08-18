import * as types from './const'
import api from '../../../../utils/apiUtils'

const actDetailRequest = () => {
    return {
        type: types.DETAIL_MOVIE_REQUEST,
    }
}

const actDetailSuccess = (data) => {
    return {
        type: types.DETAIL_MOVIE_SUCCESS,
        data
    }
}

const actDetailFail = (error) => {
    return {
        type: types.DETAIL_MOVIE_FAIL,
        error
    }
}

export const actFetchDetailMovie = (id) => {
    return (dispatch) => {
        dispatch(actDetailRequest())
        api.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actDetailSuccess(result.data.content))
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(actDetailFail(error))
            });
    }
}
