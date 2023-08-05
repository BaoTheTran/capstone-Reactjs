import {Route} from "react-router-dom";
import {lazy} from "react";

const routes=[
    {
        path: "",
        element :lazy(()=>import("../page/HomeTemplate")),
        nested:[
            {path:"", element:lazy(()=> import("../page/HomeTemplate/HomePage"))},
            {path:"phim", element:lazy(()=> import("../page/HomeTemplate/ListMovie"))},
            {path:"lich-chieu", element:lazy(()=> import("../page/HomeTemplate/LichChieu"))},
            {path:"gia-ve", element:lazy(()=> import("../page/HomeTemplate/giaVe"))},
            {path:"uu-dai", element:lazy(()=> import("../page/HomeTemplate/uuDai"))},
            {path:"lien-he", element:lazy(()=> import("../page/HomeTemplate/LienHe"))},
        ]
    },

    {
        path:"admin",
        element: lazy(()=> import("../page/AdminTemplate")),
        nested: [
            {path:"dashboard", element:lazy(()=> import("../page/AdminTemplate/DashBoard"))},
            {path:"add-user", element:lazy(()=> import("../page/AdminTemplate/AddUser") )},          
        ],
    },
    {path:"auth", element:lazy(()=> import("../page/AdminTemplate/AuthPage") )},
];

const renderRoutes =()=>{
    return routes.map((route)=>{
        if(route.nested){
            return(
                <Route
                key ={route.path}
                path ={route.path}
                element ={<route.element/>}
                >
                {route.nested.map((item)=>{
                    return(
                    <Route
                    key ={item.path}
                    path ={item.path}
                    element ={<item.element/>}
                    />
                    )     
                })}
                </Route>
            )
        }else{
            return(
                <Route
                    key ={route.path}
                    path ={route.path}
                    element ={<route.element/>}
                    />
            )
        }
    })
};



export default renderRoutes;