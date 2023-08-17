// import api from "../../../../../utils/apiUtils";
// import * as types from './const'

// const actLoginRequest = () => {
//     return {
//         type: types.LOGIN_REQUEST
//     }
// }

// const actLoginSuccess = (data) => {
//     return {
//         type: types.LOGIN_SUCCESS,
//         data
//     }
// }

// const actLoginFail = (error) => {
//     return {
//         type: types.LOGIN_FAIL,
//         error
//     }
// }

// export const actLogin = (data) => {
//     return (dispatch) => {
//         dispatch(actLoginRequest())
//         api.post('QuanLyNguoiDung/DangNhap', data)
//             .then((result) => {

//                 if (result.data.statusCode === 200) {
//                     const user = result.data.content

//                     dispatch(actLoginSuccess(result.data.content))
//                     localStorage.setItem('user', JSON.stringify(user))

//                 }
//             })
//             .catch((error) => {
//                 console.log(error);
//                 dispatch(actLoginFail(error))
//             });
//     }
// }