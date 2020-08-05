import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//  Helper Components
import {
  getTheme,
  setTheme,
  getRMState,
  changeRMState,
} from "../../helpers/helper-functions";
import { genders, willAddItems, themes } from "../../helpers/data-sets";
//  Components
import "./settings-page.style.scss";
import UpdateComponent from "../../components/update/update.component";
import SelectComponent from "../../components/select/select.component";
import CheckboxComponent from "../../components/checkbox/checkbox.component";
import ButtonComponent from "../../components/button/button.somponent";
import SubsectionComponent from "../../components/subsection/subsection.component";
import InputComponent from "../../components/input/input.component";

const axios = require("axios").default;

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
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    if (name === "password") setPassword(value);
    if (name === "confirm-password") setConfirmPassword(value);
  };

  const deleteProfile = () => {
    signOut(token);
    axios.delete(
      "https://mk-trader.herokuapp.com/user/delete",

      {
        headers: { ["auth-token"]: token },
      }
    );
    if (rememberMeState === true) localStorage.removeItem("auth-token");
    else sessionStorage.removeItem("auth-token");

    history.push("/sign");
  };

  const updatePassword = () => {
    axios.put(
      "https://mk-trader.herokuapp.com/user/edit",
      {
        paramName: "password",
        paramValue: password,
      },
      {
        headers: { ["auth-token"]: token },
      }
    );
    setPassword("");
    setConfirmPassword("");
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
          <UpdateComponent
            token={token}
            label="Update username"
            value={profile.username}
            name="username"
          />
        </div>
        <div className="update-component">
          <UpdateComponent
            token={token}
            label="Update Email"
            value={profile.email}
            type="email"
            name="email"
          />
        </div>
      </SubsectionComponent>

      <SubsectionComponent state={subsection} number={2}>
        <h1 className="update-header change">Edit Profile:</h1>
        <div className="update-component">
          <UpdateComponent
            token={token}
            label="First Name"
            value={profile.firstname}
            name="firstname"
          />
        </div>
        <div className="update-component">
          <UpdateComponent
            token={token}
            label="Last Name"
            value={profile.lastname}
            name="lastname"
          />
        </div>
        <div className="update-component">
          <UpdateComponent
            token={token}
            label="Current City"
            value={profile.currentCity}
            name="currentCity"
          />
        </div>
        <div className="update-component">
          <UpdateComponent
            token={token}
            label="Current Addres"
            value={profile.currentAddres}
            name="currentAddres"
          />
        </div>

        <div className="update-component">
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
        <h1 className="update-header change">Themes and cookies:</h1>

        <div className="update-component">
          <h2 className="change">Will you be also selling products</h2>
          <UpdateComponent
            isCustom={true}
            name="willAddItemsToStore"
            token={token}
            value={willAddItemsToStore}
          >
            <SelectComponent
              message="Select option"
              placeholder="Selling option"
              options={willAddItems}
              name="willAddItemsToStore"
              value={willAddItemsToStore}
              handleChange={handleChange}
            />
          </UpdateComponent>
        </div>
        <div className="update-component ">
          <h2 className="change">Choose a theme for the website</h2>
          <SelectComponent
            options={themes}
            message="Select theme"
            placeholder="Website Theme"
            name="theme"
            value={theme}
            handleChange={handleChange}
          />
        </div>
        <div className="update-component">
          <h2 className="change">
            If checked Your account will be rememberd for the next time you
            visit <br />
            <br />
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
        {" "}
        <h1 className="update-header change">Update or Delete:</h1>
        <div className="update-component">
          <h2 className="change">Change Current Password:</h2>
          <InputComponent
            name="password"
            value={password}
            handleChange={handleChange}
            type="password"
            label="New Password"
          />
          <InputComponent
            name="confirm-password"
            value={confirmPassword}
            handleChange={handleChange}
            type="password"
            label="Confirm Password"
          />
        </div>
        <ButtonComponent
          disabled={password !== confirmPassword || password.length < 5}
          actionHandler={updatePassword}
        >
          Update Password
        </ButtonComponent>
        <div className="delete-profile_container">
          <div className="update-component">
            <h1 className="danger">Dangerous</h1>
            <h4 className="change">
              Are you sure you want to delete your profile?
              <br />
              Choose wisely,because you wont be able to bring it back
              <br />
              Also, all the items you previously added to the store will remain
              there untill sold
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
