import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant?.info?.name
      ?.toLowerCase()
      ?.includes(searchText.toLowerCase());
  });
  console.log(filteredData);
  return filteredData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState("");
  const [restaurants, setRestaurant] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const data = getRestaurent();
  }, []);

  async function getRestaurent() {
    const res = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=26.8848483&lng=75.7702162"
    );
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

  console.log(useState());

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
            console.log(data);
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
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
