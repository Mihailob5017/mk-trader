import React from 'react';
import './profile-page.style.scss';
import ImageComponent from '../../components/image-component/image.component';
import { isUrl } from '../../helpers/helpers';

const ProfilePage = ({ profile, items }) => {
  const { avatarType } = profile;

  return (
    <div className="profile-container">
      <h1>PROFILE PAGE</h1>
      <ImageComponent
        className="profile-image"
        avatar={avatarType}
        gender={profile.gender}
        hasUrl={isUrl(avatarType)}
      />
    </div>
  );
};

export default ProfilePage;
