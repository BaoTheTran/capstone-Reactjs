import { combineReducers } from "redux";
import { listMovieReducer } from "../page/HomeTemplate/ListMovie/duck/reducer";
import { lichChieuReducer } from "../page/HomeTemplate/LichChieu/duck/reducer";
import { detailMovieReducer } from "../page/HomeTemplate/detailMovie/duck/reducer";

export const rootReducer = combineReducers({
    listMovieReducer, detailMovieReducer, lichChieuReducer,listMovieReducer
});