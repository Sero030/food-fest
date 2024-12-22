import { useState, useEffect } from "react";
import Card from "./Card.js";
import { DATA_API } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const fetchData = async () => {
    const rawData = await fetch(DATA_API);
    const dataJson = await rawData.json();
    setRestaurantList(
      dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterList(
      dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(filterList);
  return filterList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div>
        <input
          type="search"
          placeholder="Search for restaurant or cuisine"
          id="search-bar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const searchList = restaurantList.filter((res) => {
              return (
                res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                res?.info?.cuisines
                  .map((ele) => ele.toLowerCase())
                  .includes(searchText.toLowerCase())
              );
            });
            setFilterList(searchList);
          }}
        >
          Search
        </button>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const resultList = restaurantList.filter(
            (res) => res.info.avgRating > 4.2
          );
          setFilterList(resultList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="card-container">
        {filterList.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
