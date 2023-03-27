import RestaurantCard from "./RestaurantCard";
import { RESTAURANTS_URL } from "../config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import filterData from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState("");
  const [restaurants, setRestaurant] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const res = await fetch(RESTAURANTS_URL);
    const json = await res.json();

    setRestaurant(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setAllRestaurants(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>💨💨💨Looks like your internet ran away!!</h1>;
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          className="search-input"
          value={searchText}
          placeholder="search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setRestaurant(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {/* <RestaurantCard name={RestaurantList[0].info.name} cuisines={RestaurantList[0].info.cuisines}/> */}
        {/* <RestaurantCard {...RestaurantList[0].info}/> */}
        {restaurants.length === 0 ? (
          <h1>No Restaurant with matching name found!</h1>
        ) : (
          restaurants.map((restaurant) => {
            return (
              <Link
                to={"restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
