import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import MenuItems from "./MenuItems";
import { useParams } from "react-router";

const Menu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  async function fetchData() {
    const rawData = await fetch(MENU_API + resId);
    const dataJson = await rawData.json();
    setResInfo(dataJson.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  if (resInfo === null) return <Shimmer />;
  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    sla,
    id,
  } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className="menu">
      <div className="res-head">
        <div>
          <h1>{name}</h1>
          <p>
            {avgRatingString}⭐({totalRatingsString}) - {costForTwoMessage}
            <br />
            {cuisines.join(",")}
            <br />
            {sla.slaString}
            <br />
          </p>
        </div>
        <div className="menu-search">
          <input
            type="search"
            placeholder="Search for dishes"
            id="search-bar"
          ></input>
        </div>
      </div>
      <div className="menu-list">
        {itemCards.map((item) => (
          <MenuItems key={item?.card?.info?.id} menuData={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
