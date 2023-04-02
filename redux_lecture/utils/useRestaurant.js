import { useState, useEffect } from "react";
import { MENU_API_URL } from "../config";

const useRestaurants = (resId) => {
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const res = await fetch(MENU_API_URL + resId);
    const json = await res.json();
    setRestaurant(json);
  }
  return restaurant;
};

export default useRestaurants;
