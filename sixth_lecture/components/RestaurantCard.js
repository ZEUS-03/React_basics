import { IMG_URL } from "../config";

const RestaurantCard = ({name, cuisines, sla, cloudinaryImageId /** restaurant */}) => {
  // const {name, cuisines, lastMileTravelString, cloudinaryImageId} = restaurant; using restaurant
  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{sla.lastMileTravelString}</h3>
    </div>
  )
}
export default RestaurantCard;