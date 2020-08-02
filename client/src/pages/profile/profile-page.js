import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//  Helper Components
import { isUrl, getTotal } from "../../helpers/helpers";

//  Components
import ProfileItem from "../../components/profile-item/profile-item.component";
import ImageComponent from "../../components/image-component/image.component";
import ButtonComponent from "../../components/button/button.somponent";
import { getTheme, setTheme } from "../../helpers/helpers";
import "./profile-page.style.scss";
const Axios = require("axios").default;

const ProfilePage = ({ profile, items, clearCart }) => {
  const { avatarType, gender } = profile;
  const [state, setState] = useState(getTotal(items));
  useEffect(() => {
    setTheme(getTheme());
  });

  const handleState = async () => {
    const token =
      localStorage.getItem("auth-token") ||
      sessionStorage.getItem("auth-token");
    setState(0);
    clearCart();
    await Axios.post(
      "http://localhost:5000/cart/clear",
      {},
      {
        headers: { ["auth-token"]: token },
      }
    );
  };
  return (
    <div className="profile-container">
      <div className="image-component change-bg">
        <div className="basic-info">
          <ImageComponent
            className="profile-image"
            avatar={avatarType}
            gender={gender}
            hasUrl={isUrl(avatarType)}
          />
        </div>
        <div className="info-btns">
          <ButtonComponent fullWidth={true}>
            <Link to="/settings">Edit Profile Info</Link>
          </ButtonComponent>
        </div>
      </div>

      <div className="info-component change-bg">
        <h2 className="change">Username: {profile.username}</h2>
        <h2 className="change">First Name: {profile.firstname}</h2>
        <h2 className="change">Last Name: {profile.lastname}</h2>
        <h2 className="change">A member since:{profile.createdAt}</h2>
        <h2 className="change">Gender:{profile.gender}</h2>
        <h2 className="change">Addres:{profile.currentAddres}</h2>
        <h2 className="change">City:{profile.currentCity}</h2>
      </div>

      <div className="cart-component change-bg">
        <div className="cart">
          {state !== 0 &&
            items.map((item, i) => <ProfileItem item={item} key={i} />)}
        </div>
        <div className="total change">
          <h1>Total:{state}$</h1>
          <div className="btns">
            <div>
              <ButtonComponent actionHandler={handleState} fullWidth={true}>
                Clear Cart
              </ButtonComponent>
            </div>
            <div>
              <ButtonComponent
                disabled={true}
                actionHandler={handleState}
                fullWidth={true}
              >
                Purchase
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
