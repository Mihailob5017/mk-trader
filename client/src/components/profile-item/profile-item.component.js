import React from "react";
import "./profile-item.style.scss";
import ButtonComponent from "../button/button.somponent";
import { Link } from "react-router-dom";
const ProfileItemComponent = ({ item }) => {
  return (
    <div className="profile-item">
      <div className="profile-main">
        <div className="image-container">
          <img src={item.imageUrl} />
        </div>
        <div className="basic-info">
          <h2>{item.name}</h2>
          <h2>Price:{item.price}$</h2>
        </div>
      </div>
      <ButtonComponent fullWidth={true}>
        <Link to={`/item/t/${item._id}`}>View Item</Link>
      </ButtonComponent>
    </div>
  );
};

export default ProfileItemComponent;
