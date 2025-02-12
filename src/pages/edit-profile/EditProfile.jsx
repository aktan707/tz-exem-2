import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const EditProfile = () => {
    const [user, setUser] = useState({
        name: "",
        surname: "",
        patronymic: "",
        birthDate: "",
        email: "",
        city: "",
        profileImage: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("userProfile"));
        if (savedUser) {
            setUser(savedUser);
        }
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUser({ ...user, profileImage: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userProfile", JSON.stringify(user));
        alert("Успешно изменено!");
        navigate("/profile");
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-opacity-25 backdrop-blur-xs border border-white/10">
            <h1 className="text-2xl font-bold text-center mb-4">Редактировать профиль</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col items-center">
                    <img src={user.profileImage || "https://via.placeholder.com/150"}
                         alt="Фото профиля"
                         className="w-32 h-32 rounded-full border-2 mb-2" />
                    <input type="file" accept="image/*" onChange={handleImageChange} className="text-sm ml-[55px]" />
                </div>
                <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Имя" className="border p-2 w-full" />
                <input type="text" name="surname" value={user.surname} onChange={handleChange} placeholder="Фамилия" className="border p-2 w-full" />
                <input type="text" name="patronymic" value={user.patronymic} onChange={handleChange} placeholder="Отчество" className="border p-2 w-full" />
                <input type="date" name="birthDate" value={user.birthDate} onChange={handleChange} className="border p-2 w-full" />
                <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full" />
                <input type="text" name="city" value={user.city} onChange={handleChange} placeholder="Город" className="border p-2 w-full" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Отправить</button>
            </form>
        </div>
    );
};

export default EditProfile;