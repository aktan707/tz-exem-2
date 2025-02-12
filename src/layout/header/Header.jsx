import React, { useState } from "react";
import { NavLink } from "react-router";
import { headerMenu } from "../../routes/Routes.jsx";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 py-3  bg-opacity-25 backdrop-blur-xs border border-white/20">
            <div className="flex items-center justify-between">
                {/* Логотип */}
                <NavLink to="/home">
                    <div className="flex items-center gap-2">
                        <img
                            className="w-12 h-12 rounded-full"
                            src="https://yt3.googleusercontent.com/bq9wLjTS5xP-OjfSu8FL_9XpHxD2G7bVRsE82sTKsQLIX4-3bovLhvt_AcG7ZJ_e6URAyMRV7A=s900-c-k-c0x00ffffff-no-rj"
                            alt="Logo"
                        />
                        <h1 className="text-xl font-bold text-white">OKURMEN</h1>
                    </div>
                </NavLink>
                <button
                    className="md:hidden text-white text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
                <div className="hidden md:flex gap-4">
                    {headerMenu.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.name}
                            className={({ isActive }) =>
                                `px-4 py-2 transition-colors duration-200
                                ${isActive ? "text-orange-500" : "hover:text-orange-500 text-white"}
                            `}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            {isOpen && (
                <div className="mt-3 flex flex-col items-center p-3 rounded-lg md:hidden">
                    {headerMenu.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.name}
                            className={({ isActive }) =>
                                `px-4 py-2 transition-colors duration-200
                                ${isActive ? "text-orange-500" : "hover:text-orange-500 text-white"}
                            `}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Header;