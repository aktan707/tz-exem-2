import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const Profile = () => {
    const [user, setUser] = useState({
        name: "",
        surname: "",
        patronymic: "",
        birthDate: "",
        email: "",
        city: "",
        profileImage: ""
    });

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("userProfile"));
        if (savedUser) {
            setUser(savedUser);
        }
    }, []);

    return (
        <div className="max-w-md mx-auto text-center p-4 bg-opacity-25 backdrop-blur-md border border-white/20">
            <h1 className="text-2xl font-bold mb-4">Мой профиль</h1>
            <div className="flex flex-col items-center">
                <img src={user.profileImage || "https://via.placeholder.com/150"}
                     alt="Фото профиля"
                     className="w-40 h-40 rounded-full border-4 border-gray-300 mb-4" />
                <p className="text-lg font-semibold">{user.name} {user.surname} {user.patronymic}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-sm">Дата рождения: {user.birthDate}</p>
                <p className="text-sm">Город: {user.city}</p>
                <Link to="/profile/edit" className="mt-4 text-blue-500">Изменить данные</Link>
            </div>
        </div>
    );
};

export default Profile;