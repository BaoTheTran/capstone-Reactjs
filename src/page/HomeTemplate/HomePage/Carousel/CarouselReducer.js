import { CAROUSEL_FAIL ,CAROUSEL_REQUEST,CAROUSEL_SUCCESS} from "./CarouselConstant";
const stateDefault={
    loading: false,
    data: null,
    error: null,
};

export const carouselReducer = (state = stateDefault, action)=>{
    switch (action.type) {
        case CAROUSEL_REQUEST:{
            state.loading =true;
            state.data = null;
            state.error = null;
            return {...state};
        }
        case CAROUSEL_SUCCESS:{
            state.loading =false;
            state.data = action.payload;
            state.error = null;
            return {...state};
        }

        case CAROUSEL_FAIL:{
            state.loading =false;
            state.data = null;
            state.error = action.payload;
            return {...state};
        }

        default:
          return {...state}
    }
}