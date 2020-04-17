import React,{useEffect} from 'react';
import './start-page.style.scss';
import PageOverview from '../../components/page-overview/page-overview.component';
const StartPage = ({ hasToken, signOut }) => {
  useEffect(()=>{
    
  })
  return (
    <div className="start-page-container">
      <PageOverview to="/home">Home </PageOverview>
      <PageOverview to="/profile">Profile</PageOverview>
      <PageOverview to="/add">Add</PageOverview>
      <PageOverview action={signOut} isBtn={hasToken ? true : false} to="/sign">
        Sign
      </PageOverview>
    </div>
  );
};

export default StartPage;
