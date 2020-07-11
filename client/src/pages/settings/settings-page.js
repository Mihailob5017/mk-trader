import React, { useState, useEffect } from "react";

//  Helper Components
import { getThemeKey } from "../../helpers/helpers";
//  Components
import "./settings-page.style.scss";
import UpdateComponent from "../../components/update/update.component";
import SelectComponent from "../../components/select/select.component";

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
  const [theme, setTheme] = useState(getThemeKey());
  const [gender, setGender] = useState(profile.gender);
  const [willAddItemsToStore, setWillAddItemsToStore] = useState(
    profile.willAddItemsToStore
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (getThemeKey() === true)
      //document.body.style.backgroundColor = "#333333";
      console.log("set to dark");
    // document.body.style.backgroundColor = "#ffffff";
    else console.log("set to light ");
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "gender") setGender(value);
    if (name === "theme") setTheme(value);
    if (name === "willAddItemsToStore") setWillAddItemsToStore(value);
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
      </div>
    </div>
  );
};

export default SettingPage;
