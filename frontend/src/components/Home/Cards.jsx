import axios from "axios";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Cards = ({ home, setInputDiv, data, setUpdateData }) => {
    const headers = {
        id: localStorage.getItem("id") || "default-id",
    };

    const handleCompleteTasks = async (id) => {
        try {
            await axios.put(`http://localhost:5000/api/v2/update-complete-tasks/${id}`, {}, { headers });
        } catch (error) {
            console.log(error);
        }
    };

    const importe = async (id) => {
        try {
            await axios.put(`http://localhost:5000/api/v2/update-imp-tasks/${id}`, {}, { headers });
        } catch (error) {
            console.log(error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/v2/delete-tasks/${id}`, { headers });
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = async (id, title, desc, date, location, maxAttendees, imgUrl) => {
        setInputDiv("fixed");
        setUpdateData({ id, title, desc, date, location, maxAttendees, imgUrl });
    };

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {data &&
                data.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
                    >
                        <div>
                            {item.imgUrl && (
                                <img
                                    src={item.imgUrl}
                                    alt={item.title}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                            )}
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                            <p className="text-gray-300 my-2">{item.desc}</p>
                            <p className="text-gray-400 text-sm">Location: {item.location}</p>
                            <p className="text-gray-400 text-sm">Date: {new Date(item.date).toLocaleDateString()}</p>
                            {item.maxAttendees && (
                                <p className="text-gray-400 text-sm">Max Attendees: {item.maxAttendees}</p>
                            )}
                        </div>

                        <div className="mt-4 flex items-center justify-between space-x-4">
                            <button
                                className={`${
                                    item.complete === false ? "bg-red-400" : "bg-green-700"
                                } text-white p-2 rounded-lg w-1/3 text-sm hover:opacity-80 transition`}
                                onClick={() => handleCompleteTasks(item._id)}
                            >
                                {item.complete === true ? "Completed" : "In Completed"}
                            </button>

                            <div className="flex items-center text-white space-x-4">
                                {home !== "false" && (
                                    <button
                                        onClick={() =>
                                            handleEdit(
                                                item._id,
                                                item.title,
                                                item.desc,
                                                item.date,
                                                item.location,
                                                item.maxAttendees,
                                                item.imgUrl
                                            )
                                        }
                                        className="text-yellow-400 hover:text-yellow-500 transition"
                                    >
                                        <FaEdit />
                                    </button>
                                )}

                                <button
                                    onClick={() => deleteTask(item._id)}
                                    className="text-red-500 hover:text-red-600 transition"
                                >
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Cards;
