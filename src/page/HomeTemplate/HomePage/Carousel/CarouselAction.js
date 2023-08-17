import api from "../../../../utils/apiUtils";
import { CAROUSEL_FAIL ,CAROUSEL_REQUEST,CAROUSEL_SUCCESS} from "./CarouselConstant";

export const actFetchCarousel =()=>{
    return(dispatch)=>{
        dispatch(actCarouselRequest());
        api.get("QuanLyPhim/LayDanhSachBanner")
        .then((res)=>{
            if(res.data.statusCode=== 200){
                dispatch(actCarouselSuccess(res.data.content));
            }
        })
        .catch((error)=>{
            dispatch(actCarouselFail(error))
        })
    }
};

const actCarouselRequest =()=>{
    return{
        type:CAROUSEL_REQUEST,
    }
}

const actCarouselSuccess =(data)=>{
    return{
        type:CAROUSEL_SUCCESS,
        payload: data,
    }
}

const actCarouselFail =(error)=>{
    return{
        type:CAROUSEL_FAIL,
        payload: error,
    }
}

