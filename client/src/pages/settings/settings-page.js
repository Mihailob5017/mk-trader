import React, { useState } from "react";

//  Helper Components

//  Components
import "./settings-page.style.scss";
import UpdateComponent from "../../components/update/update.component";
import SelectComponent from "../../components/select/select.component";
import CheckboxComponent from "../../components/checkbox/checkbox.component";

const genders = [
  { name: "Male", value: "male" },
  { name: "Female", value: "female" },
];

const SettingPage = ({ profile, token }) => {
  console.log(profile);
  const [gender, setGender] = useState(profile.gender);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "gender") setGender(value);
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
          label="Current Addres"
          value={profile.dateOfBirth}
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
      <div className="other-options"></div>
    </div>
  );
};

export default SettingPage;
