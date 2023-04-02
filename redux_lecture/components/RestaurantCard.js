import { IMG_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  sla,
  cloudinaryImageId /** restaurant */,
}) => {
  const { user } = useContext(UserContext);
  // const {name, cuisines, lastMileTravelString, cloudinaryImageId} = restaurant; using restaurant
  return (
    <div className="w-56 m-2 p-2 bg-orange-100 hover:shadow-md">
      <img className="p-2" src={IMG_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{sla.lastMileTravelString}</h3>
      <h3>
        {user.name} - {user.email}
      </h3>
      {/* <h3>{user.name }</h3> props drilling */}
    </div>
  );
};
export default RestaurantCard;
