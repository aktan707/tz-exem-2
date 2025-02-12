import React, { useState, useEffect } from "react";

const UserForm = ({ user = {}, onUpdate }) => {
    const [name, setName] = useState(user.name || "");
    const [surname, setSurname] = useState(user.surname || "");
    const [birthDate, setBirthDate] = useState(user.birthDate || "");
    const [email, setEmail] = useState(user.email || "");
    const [city, setCity] = useState(user.city || "");
    const [profileImage, setProfileImage] = useState(user.profileImage || "");

    useEffect(() => {
        setName(user.name || "");
        setSurname(user.surname || "");
        setBirthDate(user.birthDate || "");
        setEmail(user.email || "");
        setCity(user.city || "");
        setProfileImage(user.profileImage || "");
    }, [user]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({ name, surname, birthDate, email, city, profileImage });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-opacity-25 backdrop-blur-xs border border-white/20">
            <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
            {profileImage && <img src={profileImage} alt="Profile" className="w-40 rounded-full mb-4" />}
            <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full mb-2" />
            <input type="text" placeholder="Фамилия" value={surname} onChange={(e) => setSurname(e.target.value)} className="border p-2 w-full mb-2" />
            <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="border p-2 w-full mb-2" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full mb-2" />
            <input type="text" placeholder="Город" value={city} onChange={(e) => setCity(e.target.value)} className="border p-2 w-full mb-2" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Сохранить</button>
        </form>
    );
};

export default UserForm;