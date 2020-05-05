import React from 'react';

//  Helper Components

//  Components
import './settings-page.style.scss';
import UpdateComponent from '../../components/update/update.component';

const SettingPage = ({ profile, token }) => {
  return (
    <div className="settings-page-container">
      <div className="user-options">
        <UpdateComponent
          token={token}
          label="First Name"
          value={profile.firstname}
          name="firstname"
        />
      </div>
      <div className="other-options">ey</div>
    </div>
  );
};

export default SettingPage;
