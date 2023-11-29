import React from "react";
import Loading from "../components/loading/Loading";
import { instance } from "../api/api";
import RestoCards from "../components/cards/RestoCards";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState(false);
  const [restaruants, setRestaruants] = React.useState([]);

  React.useEffect(() => {
    handleGetAllRestaurants()
  }, []);

  const handleGetAllRestaurants = async () =>{
     setLoading(true)
     const response = await instance.get("/restaurant");
     setRestaruants(response.data?.restaurants);
     setLoading(false)
  }

   const handleDeleteRestaurant = async (id) => {
    console.log(id)
      instance.delete(`/restaurant?restoId=${id}`).then(() =>{
        const filteredResto = restaruants?.filter((restaruant => restaruant.id !== id));
        setRestaruants(filteredResto);
      }).catch((err) =>{
        console.log(err)
      })
   };


  if (loading) return <Loading />;

  return (
    <div className="p-10 w-full">
      <div className="w-full px-5 pb-5 flex justify-end items-center">
        <button
          onClick={() => navigate("add-resto")}
          className="px-4 py-2 focus:bg-blue-400 border focus:text-white rounded uppercase text-sm font-semibold"
        >
          Add restaurant
        </button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {restaruants?.map((restaruant) => (
          <RestoCards
            key={restaruant?.id}
            {...restaruant}
            delete={handleDeleteRestaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
