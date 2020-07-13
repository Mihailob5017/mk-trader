import React, { useState, useEffect } from "react";

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

const SettingPage = ({ profile, token }) => {
  const [theme, setThemeState] = useState(getTheme());
  const [gender, setGender] = useState(profile.gender);
  const [willAddItemsToStore, setWillAddItemsToStore] = useState(
    profile.willAddItemsToStore
  );
  const [rememberMeState, setRememberState] = useState(getRMState);
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
  };

  return (
    <div className="settings-page-container">
      <div className="user-options">
        <UpdateComponent
          token={token}
          label="First Name"
          value={profile.firstname}
          name="firstname"
        />
        <UpdateComponent
          token={token}
          label="Last Name"
          value={profile.lastname}
          name="lastname"
        />
        <UpdateComponent
          token={token}
          label="Username"
          value={profile.username}
          name="username"
        />
        <UpdateComponent
          token={token}
          label="User Email"
          value={profile.email}
          type="email"
          name="email"
        />
        <UpdateComponent
          token={token}
          label="Current City"
          value={profile.currentCity}
          name="currentCity"
        />
        <UpdateComponent
          token={token}
          label="Current Addres"
          value={profile.currentAddres}
          name="currentAddres"
        />
        <UpdateComponent
          token={token}
          label="Date of Birth"
          value={profile.dateOfBirth || ""}
          type="date"
          name="dateOfBirth"
        />
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

      <div className="other-options-container">
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
        </UpdateComponent>

        <SelectComponent
          options={themes}
          message="theme"
          name="theme"
          value={theme}
          handleChange={handleChange}
        />
        <CheckboxComponent
          value={rememberMeState}
          name="remember"
          handleChange={handleChange}
        >
          Remember Me
        </CheckboxComponent>
      </div>
    </div>
  );
};

export default SettingPage;
