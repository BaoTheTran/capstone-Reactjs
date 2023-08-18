import * as types from './const'
import api from '../../../../utils/apiUtils'

const actRequest = () => {
    return {
        type: types.LICH_CHIEU_REQUEST
    }
}

const actSuccess = (data) => {
    return {
        type: types.LICH_CHIEU_SUCCESS,
        data
    }
}

const actFail = (error) => {
    return {
        type: types.LICH_CHIEU_FAIL,
        error
    }
}

export const actLichChieu = () => {
    return (dispatch) => {
        dispatch(actRequest())
        api.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP04`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actSuccess(result.data.content))
                }
            })
            .catch((error) => {
                dispatch(actFail(error))
            });
    }
}