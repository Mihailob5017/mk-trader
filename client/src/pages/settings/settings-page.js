import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//  Helper Components
import {
  getTheme,
  setTheme,
  getRMState,
  changeRMState,
} from "../../helpers/helpers";
//  Components
import "./settings-page.style.scss";
import UpdateComponent from "../../components/update/update.component";
import SelectComponent from "../../components/select/select.component";
import CheckboxComponent from "../../components/checkbox/checkbox.component";
import ButtonComponent from "../../components/button/button.somponent";
import SubsectionComponent from "../../components/subsection/subsection.component";

const axios = require("axios").default;

const genders = [
  { name: "Male", value: "male" },
  { name: "Female", value: "female" },
];

const willAddItems = [
  {
    name: "will add",
    value: true,
  },
  { name: "wont add", value: false },
];

const themes = [
  { name: "light", value: false },
  { name: "dark", value: true },
];

const SettingPage = ({ profile, token, signOut }) => {
  const history = useHistory();

  const [theme, setThemeState] = useState(getTheme());
  const [gender, setGender] = useState(profile.gender);
  const [willAddItemsToStore, setWillAddItemsToStore] = useState(
    profile.willAddItemsToStore
  );
  const [ays, setAys] = useState(false);
  const [rememberMeState, setRememberState] = useState(getRMState);
  const [subsection, setSubsection] = useState(1);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    setTheme(getTheme());
    changeRMState(rememberMeState);
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "gender") setGender(value);
    if (name === "theme") setThemeState(value);
    if (name === "willAddItemsToStore") setWillAddItemsToStore(value);
    if (name === "remember") setRememberState(!rememberMeState);
    if (name === "ays") setAys(!ays);
    if (name === "test") console.log("value");
  };

  const deleteProfile = () => {
    signOut(token);
    axios.delete(
      "http://localhost:5000/user/delete",

      {
        headers: { ["auth-token"]: token },
      }
    );
    if (rememberMeState === true) localStorage.removeItem("auth-token");
    else sessionStorage.removeItem("auth-token");

    history.push("/sign");
  };

  return (
    <div className="settings-page-container">
      <div className="setting-selector">
        <h2 className="settings-header">Select Options:</h2>
        <div className="settings-section" onClick={() => setSubsection(1)}>
          Overview
        </div>
        <div className="settings-section " onClick={() => setSubsection(2)}>
          Account
        </div>
        <div className="settings-section" onClick={() => setSubsection(3)}>
          Theme and Cookies
        </div>
        <div className="settings-section" onClick={() => setSubsection(4)}>
          Dangerous
        </div>
      </div>
      <SubsectionComponent state={subsection} number={1}>
        <h1 className="update-header change">Account Overview:</h1>
        <div className="update-component">
          <h2 className="change">Update Username:</h2>
          <UpdateComponent
            token={token}
            label="Username"
            value={profile.username}
            name="username"
          />
        </div>
        <div className="update-component">
          <h2 className="change">Update Username:</h2>
          <UpdateComponent
            token={token}
            label="User Email"
            value={profile.email}
            type="email"
            name="email"
          />
        </div>
      </SubsectionComponent>

      <SubsectionComponent state={subsection} number={2}>
        <h1 className="update-header change">Edit Profile:</h1>
        <div className="update-component">
          <h2 className="change">Update FirstName:</h2>
          <UpdateComponent
            token={token}
            label="First Name"
            value={profile.firstname}
            name="firstname"
          />
        </div>
        <div className="update-component">
          <h2 className="change">Update LastName:</h2>
          <UpdateComponent
            token={token}
            label="Last Name"
            value={profile.lastname}
            name="lastname"
          />
        </div>
        <div className="update-component">
          <h2 className="change">Update City of Residance:</h2>
          <UpdateComponent
            token={token}
            label="Current City"
            value={profile.currentCity}
            name="currentCity"
          />
        </div>
        <div className="update-component">
          <h2 className="change">Update Current Address</h2>
          <UpdateComponent
            token={token}
            label="Current Addres"
            value={profile.currentAddres}
            name="currentAddres"
          />
        </div>
        <div className="update-component">
          <h2 className="change">Update Date of Birth:</h2>
          <UpdateComponent
            token={token}
            label="Date of Birth"
            value={profile.dateOfBirth || ""}
            type="date"
            name="dateOfBirth"
          />
        </div>
        <div className="update-component">
          <h2 className="change">Update Gender:</h2>
          <UpdateComponent
            isCustom={true}
            name="gender"
            token={token}
            value={gender}
          >
            <SelectComponent
              options={genders}
              value={gender}
              name="gender"
              handleChange={handleChange}
            />
          </UpdateComponent>
        </div>
      </SubsectionComponent>

      <SubsectionComponent state={subsection} number={3}>
        <h1 className="update-header change">This is about cookies:</h1>

        <div className="update-component">
          <h2 className="change">Will you be adding items of your own</h2>
          <UpdateComponent
            isCustom={true}
            name="willAddItemsToStore"
            token={token}
            value={willAddItemsToStore}
          >
            <SelectComponent
              options={willAddItems}
              name="willAddItemsToStore"
              value={willAddItemsToStore}
              handleChange={handleChange}
            />
          </UpdateComponent>{" "}
        </div>
        <div className="update-component">
          <h2 className="change">Choose a theme for the website</h2>
          <SelectComponent
            options={themes}
            message="theme"
            name="theme"
            value={theme}
            handleChange={handleChange}
          />{" "}
        </div>
        <div className="update-component">
          <h2 className="change">
            If this button is checked,you will be remebered for the next time
            you vist the website
          </h2>
          <CheckboxComponent
            value={rememberMeState}
            name="remember"
            handleChange={handleChange}
          >
            Remember Me
          </CheckboxComponent>
        </div>
      </SubsectionComponent>
      <SubsectionComponent state={subsection} number={4}>
        {/* Add the part of changin the password here */}
        <div className="delete-profile_container">
          <div className="update-component">
            <h1 className='danger'>Dangerous</h1>
            <h4 className="change">
              Are you sure you want to delete your profile?Choose wisely,because
              you wont be able to bring it back,also all the items you have
              added to the store will remain on the store
            </h4>
          </div>
          <CheckboxComponent value={ays} name="ays" handleChange={handleChange}>
            Are you sure you want to delete the profile?
          </CheckboxComponent>

          <ButtonComponent
            danger={true}
            disabled={!ays}
            actionHandler={deleteProfile}
          >
            Delete Profile
          </ButtonComponent>
        </div>
      </SubsectionComponent>
    </div>
  );
};
export default SettingPage;
