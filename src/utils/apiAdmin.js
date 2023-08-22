import axios from "axios";

const apiAdmin = axios.create({
    baseURL: 'https://movienew.cybersoft.edu.vn/api/',
});

apiAdmin.interceptors.request.use((config) => {
    const accessTokenAdmin = localStorage.getItem('USER_ADMIN') ?
        JSON.parse(localStorage.getItem('USER_ADMIN')).accessToken
        : '';


    config.headers = {
        ...config.headers,
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE4LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTUzNjAwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1NjgzNjAwfQ.s4X0R0Wi80X0f9MLJ2XYxRKJdQJBW27dwvkpfN03100",
        Authorization: `Bearer ${accessTokenAdmin}`
    }
    return config
});

export default apiAdmin;