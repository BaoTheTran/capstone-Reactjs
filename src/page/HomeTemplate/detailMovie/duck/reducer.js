import * as types from './const'

const initialState = {
    loading: false,
    data: null,
    error: null
}

export const detailMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DETAIL_MOVIE_REQUEST:
            state.loading = true
            state.data = null
            state.error = null
            return { ...state }


        case types.DETAIL_MOVIE_SUCCESS:
            state.loading = false
            state.data = action.data
            state.error = null

            return { ...state }

        case types.DETAIL_MOVIE_FAIL:
            state.loading = true
            state.data = null
            state.error = action.error

            return { ...state }

        default:
            return { ...state }
    }
}