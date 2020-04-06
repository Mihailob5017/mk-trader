import React, { useState } from 'react';
import InputComponent from '../input/input.component';
import CheckboxComponent from '../checkbox/checkbox.component';
import ButtonComponent from '../button/button.somponent';
import './sign-up.style.scss';
const SignUp = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [currCity, setCurrCity] = useState('');
  const [date, setDate] = useState('');
  const [willAdd, setWilAdd] = useState(false);
  const [image, setImage] = useState(false);
  const [imageUrl, setImgeUrl] = useState('');

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === 'firstname') setFirstname(value);
    if (name === 'lastname') setLastname(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'address') setAddress(value);
    if (name === 'city') setCurrCity(value);
    if (name === 'date') setDate(value);
    if (name === 'willadd') setWilAdd(!willAdd);
    if (name === 'setimg') setImage(!image);
    if (name === 'imageurl') setImgeUrl(value);
  };

  return (
    <div className="sign-up-container">
      <h1 className="sign-up-header">Sign Up</h1>
      <div className="sign-up-body">
        <InputComponent
          type="text"
          label="First Name"
          placeholder="Required"
          name="firstname"
          value={firstname}
          handleChange={handleChange}
        />
        <InputComponent
          type="text"
          label="Last Name"
          name="lastname"
          placeholder="Required"
          value={lastname}
          handleChange={handleChange}
        />
        <InputComponent
          type="email"
          label="Email"
          name="email"
          placeholder="Required"
          value={email}
          handleChange={handleChange}
        />
        <InputComponent
          type="password"
          label="Password"
          name="password"
          placeholder="Required"
          value={password}
          handleChange={handleChange}
        />
        <CheckboxComponent
          value={image}
          handleChange={handleChange}
          name="setimg"
        >
          Add a profile picture via url?
        </CheckboxComponent>
        {image ? (
          <InputComponent
            type="text"
            label="Image Url:"
            name="imageurl"
            placeholder="Optional"
            value={imageUrl}
            handleChange={handleChange}
          />
        ) : (
          <select
            className="sign-up-select"
            value={imageUrl}
            onChange={handleChange}
          >
            <option className="sign-up-option" value="default">
              Default
            </option>
            <option className="sign-up-option" value="female">
              Female
            </option>
            <option className="sign-up-option" value="edgy">
              Edgy
            </option>
            <option className="sign-up-option" value="cool">
              Cool
            </option>
          </select>
        )}
        <InputComponent
          type="text"
          label="Address"
          name="address"
          placeholder="Optional"
          value={address}
          handleChange={handleChange}
        />

        <InputComponent
          type="text"
          label="City"
          name="city"
          placeholder="Optional"
          value={currCity}
          handleChange={handleChange}
        />
        <InputComponent
          type="date"
          label="Date of Birth"
          name="date"
          value={date}
          handleChange={handleChange}
        />
        <CheckboxComponent
          value={willAdd}
          handleChange={handleChange}
          name="willadd"
        >
          Will you be adding your items to the store?
        </CheckboxComponent>
        <ButtonComponent>Submit</ButtonComponent>
      </div>
    </div>
  );
};

export default SignUp;
