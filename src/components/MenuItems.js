import veg from "../../public/images/Veg.png";
import nonVeg from "../../public/images/Non-Veg.png";
import { ITEM_URL } from "../utils/constants";

const MenuItems = (props) => {
  const { menuData } = props;
  const { name, description, defaultPrice, imageId, isVeg, ratings, price } =
    menuData?.card?.info;
  return (
    <div className="menu-item">
      {isVeg ? <img src={veg}></img> : <img src={nonVeg}></img>}
      <div className="item-details">
        <p>
          <span className="item-name">{name}</span>
          <br />
          <span className="item-info">
            ₹ {defaultPrice / 100 || price / 100} -{" "}
            {ratings.aggregatedRating.rating}⭐(
            {ratings.aggregatedRating.ratingCountV2})
          </span>
          <br />
          {description}
        </p>
        <img src={ITEM_URL + imageId}></img>
      </div>
      <hr />
    </div>
  );
};

export default MenuItems;
