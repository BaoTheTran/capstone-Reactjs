import * as actionTypes from './const'

const initialState = {
    loading: false,
    data: null,
    error: null
}

export const listMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LISTMOVIE_REQUEST:
            state.loading = true;
            state.data = null
            state.error = null
            return { ...state }

        case actionTypes.LISTMOVIE_SUCCESS:
            state.loading = false;
            state.data = action.data
            state.error = null
            return { ...state }

        case actionTypes.LISTMOVIE_FAIL:
            state.loading = false;
            state.data = null
            state.error = action.error
            return { ...state }

        default:
            return { ...state }
    }
}