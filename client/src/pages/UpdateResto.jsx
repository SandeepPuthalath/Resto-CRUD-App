import React from "react";
import { useParams } from "react-router-dom";
import UpdateRestoForm from "../components/forms/UpdateRestoForm";

const UpdateResto = () => {
  const params = useParams();
  return (
    <div className="w-full mt-10 px-10 flex justify-center items-center">
        <UpdateRestoForm id={params.id}/>
    </div>
  );
};

export default UpdateResto;
