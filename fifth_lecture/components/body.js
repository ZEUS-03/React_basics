import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../config";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant.info.name.includes(searchText);
  });
  console.log(filteredData);
  return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurant] = useState(RestaurantList);
  const [searchText, setSearchText] = useState("");
  return (
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
            const data = filterData(searchText, restaurants);
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
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
