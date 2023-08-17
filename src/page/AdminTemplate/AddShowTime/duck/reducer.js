import { ADD_SHOWTIME_REQUEST,ADD_SHOWTIME__SUCCESS,ADD_SHOWTIME__FAIL,GET_CUMRAP } from "./constant";

const initialState={
    loading: false,
    data: null,
    error: null,
    cumRap : null,
};

export const addShowtimeReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_SHOWTIME_REQUEST:{
            state.loading= true;
            state.data= null;
            state.error= null;
            return{...state}
        }

        case ADD_SHOWTIME__SUCCESS:{
            state.loading= false;
            state.data= action.payload;
            state.error= null;
            return{...state}
        }

        case ADD_SHOWTIME__FAIL:{
            state.loading= false;
            state.data= null;
            state.error= action.payload;
            return{...state}
        }

        case GET_CUMRAP:{
            state.cumRap = action.payload;
            return{...state}
        }
   
        default:
            return {...state}
    }
}