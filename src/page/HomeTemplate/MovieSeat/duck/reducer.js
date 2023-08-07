import * as types from './const'

const initialState = {
    loading: false,
    data: null,
    error: null,
}

export const movieSeatReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.MOVIE_SEAT_REQUEST:
            state.loading = true
            state.data = null
            state.error = null
            return { ...state }

        case types.MOVIE_SEAT_SUCCESS:
            state.loading = false
            state.data = action.data
            state.error = null
            // console.log(action.data);
            return { ...state }

        case types.MOVIE_SEAT_FAIL:
            state.loading = false
            state.data = null
            state.error = action.error
            return { ...state }

        default:
            return { ...state }
    }
}