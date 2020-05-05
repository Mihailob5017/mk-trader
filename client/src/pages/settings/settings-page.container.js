import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//  Helper Components
import { profile } from '../../redux/user/user.selector';
import { asyncGetUserProfile } from '../../redux/user/user.action';

//  Components
import SettingPage from './settings-page';
import LoadingComponent from '../../components/loading/loading.component';

const SettingPageContainer = ({ profile, asyncGetUserProfile }) => {
  const [isUpdated, setUpdate] = useState(false);
  const token =
    localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token');
  useEffect(() => {
    if (profile === null) asyncGetUserProfile(token);

    return () => {};
  }, []);

  return profile ? (
    <SettingPage
      profile={profile}
      token={token}
      update={() => setUpdate(true)}
    />
  ) : (
    <LoadingComponent />
  );
};

const mapStateToProps = createStructuredSelector({ profile });
const mapDispatchToProps = (disatpch) => ({
  asyncGetUserProfile: (token) => disatpch(asyncGetUserProfile(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingPageContainer);
