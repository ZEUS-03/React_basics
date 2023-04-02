import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_URL } from "../config";
import useRestaurants from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurants(id);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  // console.log(restaurant?.data?.cards[0]?.card?.card?.info);

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
      <h2 className="font-bold text-center">Menu Items:</h2>

      <div>
        <ul className="text-center">
          {!restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards[1]?.card?.card?.itemCards
            ? restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
                (item) => {
                  return (
                    <div className="flex justify-around">
                      <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name}
                      </li>
                      <button
                        className="underline"
                        onClick={() => handleAddItem(item?.card?.info)}
                      >
                        add to cart
                      </button>
                    </div>
                  );
                }
              )
            : restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
                (item) => {
                  return (
                    <div className="flex justify-around">
                      <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name}
                      </li>
                      <button
                        className="underline"
                        onClick={() => handleAddItem(item?.card?.info)}
                      >
                        add to cart
                      </button>
                    </div>
                  );
                }
              )}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
