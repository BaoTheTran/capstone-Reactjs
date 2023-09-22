import { ADD_FILM_REQUEST, ADD_FILM_SUCCESS, ADD_FILM_FAIL, EDIT_FILM, DELETE_FILM } from "./constant";
import apiAdmin from "../../../../utils/apiAdmin";
import { actFetchListMovieHomepage } from "../../../HomeTemplate/HomePage/MovieItems/duck/actions";
import { toast } from 'react-toastify';

export const actAddFilm = (formData) => {
    return (dispatch) => {
        dispatch(actAddFilmRequest());
        apiAdmin.post("QuanLyPhim/ThemPhimUploadHinh", formData)
            .then((res) => {
                dispatch(actAddFilmSuccess(formData))
                    .success('Thêm phim thành công!!')
            })
            .catch((error) => {
                dispatch(actAddFilmFail(error))
            })
    }
};

export const actFetchEditFilm = (maPhim) => {
    return (dispatch) => {
        apiAdmin.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
            .then((res) => {
                dispatch(actEditFilm(res.data.content))
                // console.log(res.data.content);
            })
            .catch((error) => {
                // console.log(error);
            });
    }
}

export const actFetchUpdateFilm = (formData) => {
    return (dispatch) => {
        apiAdmin.post("QuanLyPhim/CapNhatPhimUpload", formData)
            .then((res) => {
                toast.success('Cập nhật thành công!!')

                // console.log(res.data.content);
            })
            .catch((error) => {
                // console.log(error.response?.data);
            });
    }
}

export const actDeleteFilm = (maPhim) => {
    return (dispatch) => {
        apiAdmin.delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
            .then((res) => {
                toast.success('Xóa phim thành công!!')
                dispatch(actFetchListMovieHomepage())
                // console.log(res.data.content);
            })
            .catch((error) => {
                // console.log(error.response?.data);
            })
    }
}





const actAddFilmRequest = () => {
    return {
        type: ADD_FILM_REQUEST,
    }
}

const actAddFilmSuccess = (data) => {
    return {
        type: ADD_FILM_SUCCESS,
        payload: data,
    }
}

const actAddFilmFail = (error) => {
    return {
        type: ADD_FILM_FAIL,
        payload: error,
    }
}

const actEditFilm = (film) => {
    return {
        type: EDIT_FILM,
        payload: film,
    };
}
