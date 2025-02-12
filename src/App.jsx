import { Routes, Route } from "react-router";
import Layout from "./layout/Layout.jsx";
import {headerMenu} from "./routes/Routes.jsx";
import EditProfile from "./pages/edit-profile/EditProfile.jsx";
import Profile from "./pages/profile/Profile.jsx";
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {headerMenu.map((item) => (
                        <Route key={item.name} path={item.path} element={item.element} />
                    ))}
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/edit" element={<EditProfile />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;