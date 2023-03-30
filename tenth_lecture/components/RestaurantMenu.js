import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_URL } from "../config";
import useRestaurants from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurants(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-center align-center m-2 p-2">
        <div className="my-2 mx-5 p-2">
          <h1 className="font-bold">
            {restaurant?.data?.cards[0]?.card?.card?.info?.name}
          </h1>
          <h2>
            {restaurant?.data?.cards[0]?.card?.card?.info?.locality}{" "}
            {restaurant?.data?.cards[0]?.card?.card?.info?.areaName}
          </h2>
          <h2>
            {restaurant?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
          </h2>
        </div>
        <img
          src={
            IMG_URL +
            restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          className="h-auto max-w-[250px] rounded-lg my-2 mx-5 p-2"
          alt="restaurant_image"
        />
      </div>

      <div className=" flex-col justify-center items-center">
        <h2 className="font-bold text-center">Menu Items:</h2>
        <ul className="text-center">
          {!restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards[1]?.card?.card?.itemCards
            ? restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
                (item) => {
                  return <li>{item.card.info.name}</li>;
                }
              )
            : restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
                (item) => {
                  return <li>{item.card.info.name}</li>;
                }
              )}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
