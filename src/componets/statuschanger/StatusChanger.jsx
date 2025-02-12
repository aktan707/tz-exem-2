import { useState } from "react";

const StatusChanger = () => {
    const [status, setStatus] = useState("Активен");
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="mb-4">
            <p className="bg-gray-200 p-2 rounded">{status}</p>
            {isEditing ? (
                <input
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border rounded p-2 w-full mt-2"
                />
            ) : (
                <button
                    className="text-blue-500 mt-2"
                    onClick={() => setIsEditing(true)}
                >
                    Сменить статус
                </button>
            )}
        </div>
    );
};

export default StatusChanger;