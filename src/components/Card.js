import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} className="card-img"></img>
      <h3>{name}</h3>
      <p>
        {cuisines.join(", ")}
        <br />
        {avgRating}⭐<br />
        {sla.deliveryTime} mins
        <br />
        {costForTwo}
      </p>
    </div>
  );
};

export default Card;
