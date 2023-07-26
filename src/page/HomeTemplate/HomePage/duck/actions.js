import api from "../../../../utils/apiUtils";
import { LIST_MOVIE_HOMEPAGE_REQUEST,LIST_MOVIE_HOMEPAGE_SUCCESS,LIST_MOVIE_HOMEPAGE_FAIL } from "./constants";

export const actFetchListMovieHomepage =()=>{
    return(dispatch)=>{
        dispatch(actListMovieHomepageRequest());
        api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP04")
        .then((res)=>{
            if(res.data.statusCode=== 200){
                dispatch(actListMovieHomepageSuccess(res.data.content));
            }
        })
        .catch((error)=>{
            dispatch(actListMovieHomepageFail(error))
        })
    }
} 

const actListMovieHomepageRequest =()=>{
    return{
        type:LIST_MOVIE_HOMEPAGE_REQUEST,
    }
}

const actListMovieHomepageSuccess =(data)=>{
    return{
        type:LIST_MOVIE_HOMEPAGE_SUCCESS,
        payload: data,
    }
}

const actListMovieHomepageFail =(error)=>{
    return{
        type:LIST_MOVIE_HOMEPAGE_FAIL,
        payload: error,
    }
}