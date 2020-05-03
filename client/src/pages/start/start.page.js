import React from 'react';

//  Components
import './start-page.style.scss';
import PageOverview from '../../components/page-overview/page-overview.component';

//  Helpers
import homepage_img from '../../assets/images/homepage.jpeg';
import profile_img from '../../assets/images/profile.jpg';
import add_img from '../../assets/images/add.jpeg';
import sign_img from '../../assets/images/sign.jpeg';

const StartPage = ({ hasToken, signOut }) => {
  return (
    <div className="start-page-container">
      <PageOverview image={homepage_img} to="/home">
        Home
      </PageOverview>
      <PageOverview image={profile_img} to="/profile">
        Profile
      </PageOverview>
      <PageOverview image={add_img} to="/add">
        Add
      </PageOverview>
      <PageOverview
        image={sign_img}
        action={signOut}
        isBtn={hasToken ? true : false}
        to="/sign"
      >
        Sign
      </PageOverview>
    </div>
  );
};

export default StartPage;
