import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//  Helper Components
import { isUrl, getTotal } from '../../helpers/helpers';

//  Components
import ProfileItem from '../../components/profile-item/profile-item.component';
import ImageComponent from '../../components/image-component/image.component';
import ButtonComponent from '../../components/button/button.somponent';
import './profile-page.style.scss';
const Axios = require('axios').default;

const ProfilePage = ({ profile, items, clearCart }) => {
  const { avatarType } = profile;
  const [state, setState] = useState(getTotal(items));
  const handleState = async () => {
    const token =
      localStorage.getItem('auth-token') ||
      sessionStorage.getItem('auth-token');
    setState(0);
    clearCart();
    await Axios.post(
      'http://localhost:5000/cart/clear',
      {},
      {
        headers: { ['auth-token']: token },
      }
    );
  };
  return (
    <div className="profile-container">
      <div className="info-component">
        <div className="basic-info">
          <ImageComponent
            className="profile-image"
            avatar={avatarType}
            gender={profile.gender}
            hasUrl={isUrl(avatarType)}
          />
          <div className="info-primary">
            <h2>Username: {profile.username}</h2>
            <h2>First Name: {profile.firstname}</h2>
            <h2>Last Name: {profile.lastname}</h2>
            <h2>A member since:{profile.createdAt}</h2>
          </div>
        </div>
        <div className="other-info">
          <h2>Gender:{profile.gender}</h2>
          <h2>
            Date of Birth:
            {profile.dateOfBirth ? profile.dateOfBirth : 'not defined'}
          </h2>
          <h2>Addres:{profile.currentAddres}</h2>
          <h2>City:{profile.currentCity}</h2>
        </div>
        <div className="info-btns">
          <ButtonComponent fullWidth={true}>
            <Link to="/settings">Edit Profile Info</Link>
          </ButtonComponent>
        </div>
      </div>
      <div className="cart-component">
        <div className="cart">
          {state !== 0 &&
            items.map((item, i) => <ProfileItem item={item} key={i} />)}
        </div>
        <div className="total">
          <h1>Total:{state}$</h1>
          <div className="btns">
            <div>
              <ButtonComponent actionHandler={handleState} fullWidth={true}>
                Clear Cart
              </ButtonComponent>
            </div>
            <div>
              <ButtonComponent actionHandler={handleState} fullWidth={true}>
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
