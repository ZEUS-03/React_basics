import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_URL } from "../config";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8848483&lng=75.7702162&restaurantId=" +
        id
    );
    console.log(id);
    const json = await res.json();
    setRestaurant(json);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <div>
        <h1>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h1>
        <h2>
          {restaurant?.data?.cards[0]?.card?.card?.info?.locality}{" "}
          {restaurant?.data?.cards[0]?.card?.card?.info?.areaName}
        </h2>
        <img
          alt="restaurant_image"
          src={
            IMG_URL +
            restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h2>
          {restaurant?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
        </h2>
      </div>
      <div>
        <h2>Menu Items:</h2>
        <ul>
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
