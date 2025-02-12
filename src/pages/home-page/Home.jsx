import React from "react";
import cities from "../../utils/cities/cities.js";

const Home = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 md:p-6 lg:p-8 bg-opacity-25 backdrop-blur-xs border border-white/20">
            <img
                src={cities.flag}
                alt="Флаг Кыргызстана"
                className="w-full h-auto rounded-lg shadow-md mb-6"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                Кыргызстан
            </h1>
            <p className="text-gray-700 text-justify leading-relaxed mb-6">
                {cities.description}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
                Области Кыргызстана
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                {cities.regions.map((region, index) => (
                    <li key={index} className="flex justify-between border-b py-2">
                        <span>{region.name}</span>
                        <span className="font-semibold">{region.population.toLocaleString()} человек</span>
                    </li>
                ))}
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-gray-700">
                    <strong>Официальный язык:</strong> {cities.language}
                </p>
                <p className="text-gray-700">
                    <strong>Валюта:</strong> {cities.currency}
                </p>
            </div>
        </div>
    );
};

export default Home;