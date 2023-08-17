import * as types from './const'

const initialState = {
    loading: false,
    data: null,
    error: null,
    // danh sách ghế đang chọn
    danhSachGheChon: [],
    //danh sách ghế người khác đang đặt
    danhSachGheNguoiKhacDat: [{ maGhe: 50283 }, { maGhe: 50284 }],
    // chuyển page
    changePage: '1',
    // tìm kiếm vé
    search: '',
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
            return { ...state }

        case types.MOVIE_SEAT_FAIL:
            state.loading = false
            state.data = null
            state.error = action.error
            return { ...state }

        case types.MOVIE_SEAT_BOOKING_SEAT:
            const IndexGheChon = state.danhSachGheChon.findIndex(gheChon => gheChon.maGhe === action.danhSachGheChon.maGhe)
            if (IndexGheChon !== -1) {
                //tồn tại
                state.danhSachGheChon.splice(IndexGheChon, 1)
            } else {
                // chưa có
                state.danhSachGheChon.push(action.danhSachGheChon)
            }
            return { ...state }


        case types.DAT_VE_HOAN_TAT:
            state.danhSachGheChon = []
            return { ...state }

        case types.LAY_THONG_TIN_REQUEST:
            state.loading = true
            state.data = null
            state.error = null
            return { ...state }

        case types.LAY_THONG_TIN_SUCCESS:
            state.loading = false
            state.data = action.data
            state.error = null
            console.log(action);
            return { ...state }


        case types.LAY_THONG_TIN_FAIL:
            state.loading = false
            state.data = null
            state.error = action.error
            return { ...state }

        case types.CHANGE_PAGE:
            state.changePage = action.key
            return { ...state }

        case types.SEARCH:
            state.search = action.keyword
            return { ...state }

        default:
            return { ...state }
    }
}