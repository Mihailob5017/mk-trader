import React from 'react';

import './start-page.style.scss';
import PageOverview from '../../components/page-overview/page-overview.component';
const startPage = () => {
  return <div className="start-page-container">
    <PageOverview to='/home'>Home </PageOverview>
    <PageOverview to='/profile'>Profile</PageOverview>
    <PageOverview to='/add'>Add</PageOverview>
    <PageOverview to='/sign'>Sign </PageOverview>
  </div>;
};

export default startPage;
