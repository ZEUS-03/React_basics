import { IMG_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  sla,
  cloudinaryImageId /** restaurant */,
}) => {
  // const {name, cuisines, lastMileTravelString, cloudinaryImageId} = restaurant; using restaurant
  return (
    <div className="w-56 m-2 p-2 bg-orange-100 hover:shadow-md">
      <img className="p-2" src={IMG_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{sla.lastMileTravelString}</h3>
    </div>
  );
};
export default RestaurantCard;
