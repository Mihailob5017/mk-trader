import React, { useState } from 'react';
import InputComponent from '../input/input.component';
import CheckboxComponent from '../checkbox/checkbox.component';
import ButtonComponent from '../button/button.somponent';
import StepComponent from '../step/step.component';
import SelectComponent from '../select/select.component';
import './sign-up.style.scss';

const SignUp = () => {
  const avatars = [
    { name: 'Default', value: 'default' },
    { name: 'Proffesional', value: 'prof' },
    { name: 'Ocasional', value: 'ocs' },
    { name: 'Gold', value: 'gold' },
    { name: 'Premium', value: 'premium' },
  ];

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
  const [step, setStep] = useState(1);
  const [avatar, setAvatar] = useState('');

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
    if (name === 'avatar') setAvatar(value);
  };
  const moveStep = (val) => setStep(val);

  if (step === 1)
    return (
      <div className="sign-up-container">
        <h1 className="sign-up-header">Sign Up</h1>
        <StepComponent step={1} moveStep={moveStep}>
          <InputComponent
            value={firstname}
            handleChange={handleChange}
            placeholder="Required * "
            name="firstname"
            label="First Name"
          />
          <InputComponent
            value={lastname}
            handleChange={handleChange}
            placeholder="Required * "
            name="lastname"
            label="Last Name"
          />
          <InputComponent
            value={email}
            handleChange={handleChange}
            placeholder="Required * "
            name="email"
            label="Email:"
          />
          <InputComponent
            value={password}
            handleChange={handleChange}
            placeholder="Required * "
            name="password"
            label="Password:"
          />
        </StepComponent>
      </div>
    );

  if (step === 2)
    return (
      <div className="sign-up-container">
        <h1 className="sign-up-header">Sign Up</h1>
        <StepComponent step={2} moveStep={moveStep}>
          <InputComponent
            value={address}
            handleChange={handleChange}
            placeholder="Optional  "
            name="address"
            label="Address:"
          />
          <InputComponent
            value={currCity}
            handleChange={handleChange}
            placeholder="Optional * "
            name="city"
            label="Current City:"
          />
          <InputComponent
            value={date}
            handleChange={handleChange}
            placeholder="Optional * "
            name="date"
            type="date"
            label="Date of Birth::"
          />
        </StepComponent>
      </div>
    );

  if (step === 3)
    return (
      <div className="sign-up-container">
        <h1 className="sign-up-header">Sign Up</h1>
        <StepComponent step={3} moveStep={moveStep}>
          <CheckboxComponent
            value={willAdd}
            name="willadd"
            handleChange={handleChange}
          >
            I will be adding my items to the Store
          </CheckboxComponent>
          <CheckboxComponent
            value={willAdd}
            name="setimg"
            handleChange={handleChange}
          >
            I have the Url to the profile picture
          </CheckboxComponent>
          {image ? (
            <InputComponent
              label="Image Url:"
              placeholder="Optional"
              type="url"
              name="imageurl"
              value={imageUrl}
              handleChange={handleChange}
            />
          ) : (
            <SelectComponent
              message="avatar:"
              options={avatars}
              value={avatar}
              name="avatar"
              handleChange={handleChange}
            />
          )}

          <ButtonComponent actionHandler="hello">Sign Up</ButtonComponent>
        </StepComponent>
      </div>
    );
};

export default SignUp;
