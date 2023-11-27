import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const RestoCards = ({ id, name, address, contact, ...rest}) => {
  const navigate = useNavigate();
  return (
    <div className="p-5 rounded shadow bg-gray-100 flex flex-col gap-2 justify-evenly">
      <div className="w-full">
        <h3 className="uppercase text-xl font-semibold">{name}</h3>
      </div>
      <div className="flex gap-2 justify-center">
        <div className="h-full pt-1">
          <FaLocationDot stroke="red" fill="red" />
        </div>
        <div className="w-full h-full">
          <p>{address}</p>
        </div>
      </div>
      <div>
        <h4 className="font-semibold">{contact}</h4>
      </div>
      <div className="flex gap-2 justify-end">
        <button onClick={(e) =>{
          e.preventDefault();
          navigate(`update-resto/${id}`);
        }}  className="font-semibold text-blue-600">Edit</button>
        <button onClick={(e) => {
            e.preventDefault();
            rest.delete(id)
        }} className="font-semibold text-red-600">Delete</button>
      </div>
    </div>
  );
};

export default RestoCards;
