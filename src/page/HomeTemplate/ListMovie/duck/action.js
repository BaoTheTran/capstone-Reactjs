import * as actionTypes from './const'
import api from '../../../../utils/apiUtils'

const actRequest = () => {
    return {
        type: actionTypes.LISTMOVIE_REQUEST
    }
}

const actSuccess = (data) => {
    return {
        type: actionTypes.LISTMOVIE_SUCCESS,
        data
    }
}

const actFail = (error) => {
    return {
        type: actionTypes.LISTMOVIE_FAIL,
        error
    }
}

export const actListMovie = (navigate) => {
    return (dispatch) => {
        dispatch(actRequest())
        api.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP04')
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actSuccess(result.data.content))
                    // navigate('/dang-chieu', { replace: true })
                }
            })
            .catch((error) => {
                dispatch(actFail(error))
            });
    }
}