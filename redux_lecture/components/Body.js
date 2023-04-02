import RestaurantCard from "./RestaurantCard";
import { RESTAURANTS_URL } from "../config";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import filterData from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState("");
  const [restaurants, setRestaurant] = useState("");
  const { user, setUser } = useContext(UserContext);

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
    return (
      <h1 className="text-orange-500 text-3xl text-center">
        💨💨💨Looks like your internet ran away!!
      </h1>
    );
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          className=" m-2 rounded-sm focus:bg-slate-100 focus:border-orange-300"
          value={searchText}
          placeholder="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          className="bg-orange-400 px-1 rounded-md hover:bg-orange-300"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setRestaurant(data);
          }}
        >
          search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
              email: "newEmail@gmail.com",
            })
          }
        ></input>
      </div>
      <div className="flex flex-wrap justify-between">
        {/* <RestaurantCard name={RestaurantList[0].info.name} cuisines={RestaurantList[0].info.cuisines}/> */}
        {/* <RestaurantCard {...RestaurantList[0].info}/> */}
        {restaurants.length === 0 ? (
          <h1 className="bg-orange-500 text-center">
            No Restaurant with matching name found!
          </h1>
        ) : (
          restaurants.map((restaurant) => {
            return (
              <Link
                to={"restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} /*user={user}*/ />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
