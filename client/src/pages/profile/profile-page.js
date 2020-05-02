import React from 'react';
import './profile-page.style.scss';
import ImageComponent from '../../components/image-component/image.component';
import ButtonComponent from '../../components/button/button.somponent';
import { isUrl, getTotal } from '../../helpers/helpers';
import { Link } from 'react-router-dom';
import ProfileItem from '../../components/profile-item/profile-item.component';
const ProfilePage = ({ profile, items }) => {
  const { avatarType } = profile;
  console.log(items);
  console.log(profile);
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
          {items.map((item, i) => (
            <ProfileItem item={item} key={i} />
          ))}
        </div>
        <div className="total">
          <h1>Total:{getTotal(items)}$</h1>
          <div className="btns">
            <div>
              <ButtonComponent fullWidth={true}>Clear Cart</ButtonComponent>
            </div>
            <div>
              <ButtonComponent fullWidth={true}>Purchase</ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
