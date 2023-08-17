import { ADD_FILM_REQUEST ,ADD_FILM_SUCCESS, ADD_FILM_FAIL, EDIT_FILM,DELETE_FILM} from "./constant";

const initialState={
    loading: false,
    data: null,
    error: null,
    filmEdit: null,
};

export const addFilmReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_FILM_REQUEST:{
            state.loading= true;
            state.data= null;
            state.error= null;
            return{...state}
        }

        case ADD_FILM_SUCCESS:{
            state.loading= false;
            state.data= action.payload;
            state.error= null;
            return{...state}
        }

        case ADD_FILM_FAIL:{
            state.loading= false;
            state.data= null;
            state.error= action.payload;
            return{...state}
        }

        case EDIT_FILM:{
            state.filmEdit = action.payload;
            return{...state}
        }

   
        default:
            return {...state}
    }
}