import { useState, useEffect } from "react";
import { getCitiesData } from "../../utils/cities/cities.js";

const Dropdown = ({ onSelect }) => {
    const [selectedCity, setSelectedCity] = useState("");
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const cities = getCitiesData();
        setCities(cities);
    }, []);

    return (
        <div className="mb-4">
            <label className="block text-gray-700">Выберите город:</label>
            <select
                className="border rounded p-2 w-full"
                value={selectedCity}
                onChange={(e) => {
                    const selected = cities.find(city => city.city === e.target.value);
                    setSelectedCity(e.target.value);
                    onSelect(selected);
                }}
            >
                <option value="">Выберите...</option>
                {cities.map((city, index) => (
                    <option key={index} value={city.city}>
                        {city.city}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;