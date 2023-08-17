import { LIST_MOVIE_HOMEPAGE_REQUEST,LIST_MOVIE_HOMEPAGE_SUCCESS,LIST_MOVIE_HOMEPAGE_FAIL } from "./constants";

const initialState = {
    loading: false,
     data:null,
     error: null,
};

const listMovieHompageReducer = (state=initialState , action)=>{
    switch (action.type) {
        case LIST_MOVIE_HOMEPAGE_REQUEST:{
            state.loading =true;
            state.data = null;
            state.error = null;
            return {...state};
        }

        case LIST_MOVIE_HOMEPAGE_SUCCESS:{
            state.loading =false;
            state.data = action.payload;
            state.error = null;
            return {...state};
        }

        case LIST_MOVIE_HOMEPAGE_FAIL:{
            state.loading =false;
            state.data = null;
            state.error = action.payload;
            return {...state};
        }


        default:
            return {...state}
    }
};

export default listMovieHompageReducer;