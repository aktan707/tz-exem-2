import Home from "../pages/home-page/Home.jsx";
import Profile from "../pages/profile/Profile.jsx";


export const headerMenu = [
    {
        name: "Главный",
        path: "/home",
        element: <Home/>
    },
    {
        name: "Профиль",
        path: "/user",
        element: <Profile/>
    },
]