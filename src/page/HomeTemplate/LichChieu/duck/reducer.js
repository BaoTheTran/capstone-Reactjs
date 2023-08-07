import * as types from './const'

const initialState = {
    loading: false,
    data: null,
    error: null
}

export const lichChieuReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LICH_CHIEU_REQUEST:
            state.loading = true;
            state.data = null
            state.error = null
            return { ...state }

        case types.LICH_CHIEU_SUCCESS:
            state.loading = false;
            state.data = action.data
            state.error = null
            return { ...state }

        case types.LICH_CHIEU_FAIL:
            state.loading = false;
            state.data = null
            state.error = action.error
            return { ...state }

        default:
            return { ...state }
    }
}