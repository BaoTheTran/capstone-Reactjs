import {Route} from "react-router-dom";
import {lazy} from "react";

const routes = [
    {
        path: "",
        element: lazy(() => import("../page/HomeTemplate")),
        nested: [
            { path: "", element: lazy(() => import("../page/HomeTemplate/HomePage")) },
            { path: "dang-chieu", element: lazy(() => import("../page/HomeTemplate/ListMovie")) },
            { path: "sap-chieu", element: lazy(() => import("../page/HomeTemplate/ListMovie/sapchieu")) },
            { path: "lich-chieu", element: lazy(() => import("../page/HomeTemplate/LichChieu")) },
            { path: "gia-ve", element: lazy(() => import("../page/HomeTemplate/giaVe")) },
            { path: "uu-dai", element: lazy(() => import("../page/HomeTemplate/uuDai")) },
            { path: 'lich-chieu/:id', element: lazy(() => import('../page/HomeTemplate/detailMovie')) },
            { path: "movie-seat", element: lazy(() => import("../page/HomeTemplate/MovieSeat/index")) },
            { path: "profile", element: lazy(() => import("../page/HomeTemplate/Profile")) },
            { path: "movie-seat/:maLichChieu", element: lazy(() => import("../page/HomeTemplate/MovieSeat/index")) },
        ]
    },

    {
        path: "admin",
        element: lazy(() => import("../page/AdminTemplate")),
        nested: [
            { path: "dashboard", element: lazy(() => import("../page/AdminTemplate/DashBoard")) },
            { path: "manage-user", element: lazy(() => import("../page/AdminTemplate/User"))},
            { path: "add-user", element: lazy(() => import("../page/AdminTemplate/AddUser")) },
            { path: "edit-user/:id", element: lazy(() => import("../page/AdminTemplate/EditUser")) },
            { path: "add-film", element: lazy(() => import("../page/AdminTemplate/AddFilm")) },
            { path: "edit-film/:id", element: lazy(() => import("../page/AdminTemplate/EditFilm")) },
            { path: "add-show-time/:id", element: lazy(() => import("../page/AdminTemplate/AddShowTime")) },
        ],
    },
    { path: "auth", element: lazy(() => import("../page/AdminTemplate/AuthPage")) },
];

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                >
                    {route.nested.map((item) => {
                        return (
                            <Route
                                key={item.path}
                                path={item.path}
                                element={<item.element />}
                            />
                        )
                    })}
                </Route>
            )
        } else {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                />
            )
        }
    })
};



export default renderRoutes;