import { combineReducers } from "redux";
import { listMovieReducer } from "../page/HomeTemplate/ListMovie/duck/reducer";
import { lichChieuReducer } from "../page/HomeTemplate/LichChieu/duck/reducer";
import { detailMovieReducer } from "../page/HomeTemplate/detailMovie/duck/reducer";
import listMovieHompageReducer from "../page/HomeTemplate/HomePage/MovieItems/duck/reducer";
import { carouselReducer } from "../page/HomeTemplate/HomePage/Carousel/CarouselReducer";
import { adminReducer } from "../page/AdminTemplate/AuthPage/duck/reducer";
import { addUserReducer } from "../page/AdminTemplate/AddUser/duck/reducer";
import { listUserReducer } from "../page/AdminTemplate/User/duck/reducer";
import { addFilmReducer } from "../page/AdminTemplate/AddFilm/duck/reducer";
import { addShowtimeReducer } from "../page/AdminTemplate/AddShowTime/duck/reducer";


export const rootReducer = combineReducers({
    listMovieReducer, 
    detailMovieReducer, 
    lichChieuReducer,
    listMovieReducer,
    listMovieHompageReducer,
    carouselReducer,
    adminReducer,
    addUserReducer,
    listUserReducer,
    addFilmReducer,
    addShowtimeReducer,
});