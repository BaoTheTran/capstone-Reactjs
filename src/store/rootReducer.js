import { combineReducers } from "redux";
import { listMovieReducer } from "../page/HomeTemplate/ListMovie/duck/reducer";
import { lichChieuReducer } from "../page/HomeTemplate/LichChieu/duck/reducer";
import { detailMovieReducer } from "../page/HomeTemplate/detailMovie/duck/reducer";
import { movieSeatReducer } from "../page/HomeTemplate/MovieSeat/duck/reducer";
import listMovieHompageReducer from "../page/HomeTemplate/HomePage/duck/reducer";
import { loginReducer } from "../page/HomeTemplate/_components/ModalLogin/duck/reducer";

export const rootReducer = combineReducers({
    listMovieReducer,
    detailMovieReducer,
    lichChieuReducer,
    listMovieReducer,
    movieSeatReducer,
    listMovieHompageReducer,
    loginReducer
});