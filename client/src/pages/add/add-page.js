import React, { useState } from "react";

//  Components
import InputComponent from "../../components/input/input.component";
import SelectComponent from "../../components/select/select.component";
import CheckBoxComponent from "../../components/checkbox/checkbox.component";
import ButtonComponent from "../../components/button/button.somponent";
import ItemImageComponent from "../../components/item-image/item-image.component";
import "./add-page.style.scss";
//  Helpers
import { colors, options, sizes } from "../../helpers/data-sets";

const AddPage = ({ addItem, token }) => {
  const [willAddUrl, setAddUrl] = useState(false);
  const [url, setUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [secendaryColor, setSecendaryColor] = useState("");
  const [size, setSize] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "checkbox") {
      setAddUrl(!willAddUrl);
      if (url !== "" && willAddUrl === true) setUrl("");
    }
    if (name === "url") setUrl(value);
    if (name === "desc") setDesc(value);
    if (name === "type") setType(value);
    if (name === "name") setName(value);
    if (name === "price") setPrice(value);
    if (name === "primary-color") setPrimaryColor(value);
    if (name === "secendary-color") setSecendaryColor(value);
    if (name === "size") setSize(value);
  };

  const addItemExec = () => {
    const item = {
      name,
      type,
      description: desc,
      imageUrl: url,
      price,
      primaryColor,
      secendaryColor,
      size,
      viewCount: 0,
    };
    addItem(item, token);
    setPrice("");
    setDesc("");
    setName("");
    setType("");
    setAddUrl(false);
    setUrl("");
    setPrimaryColor("");
    setSecendaryColor("");
    setSize("");
  };

  return (
    <div className="add-page-container">
      <div className="basic-info-conatiner change-bg">
        <InputComponent
          label="Item Name:"
          name="name"
          value={name}
          handleChange={handleChange}
          placeholder="Required"
        />
        <InputComponent
          label="Item Price:"
          type="number"
          name="price"
          min={0}
          value={price}
          handleChange={handleChange}
          placeholder="Required"
        />
        <SelectComponent
          message="Primary color"
          placeholder="Choose color"
          value={primaryColor}
          handleChange={handleChange}
          name="primary-color"
          options={colors.filter((el, i) => i < colors.length - 1)}
        />
        <SelectComponent
          message="Secendary color"
          placeholder="Choose color"
          name="secendary-color"
          handleChange={handleChange}
          value={secendaryColor}
          options={colors}
        />
        <SelectComponent
          message="Category"
          name="type"
          placeholder="Choose Type"
          value={type}
          handleChange={handleChange}
          options={options}
        />
        <SelectComponent
          message="Size"
          placeholder="Choose Size"
          name="size"
          value={size}
          handleChange={handleChange}
          options={sizes}
        />
        <CheckBoxComponent name="checkbox" handleChange={handleChange}>
          I will link the Item image
        </CheckBoxComponent>
        {willAddUrl === true && (
          <InputComponent
            placeholder="Optional"
            name="url"
            value={url}
            handleChange={handleChange}
            label="Image Link:"
          />
        )}
        <div className="add-page-desc">
          <h1 className="change">Item Description:</h1>
          <textarea
            className="change"
            name="desc"
            value={desc}
            placeholder="Optional"
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div className="add-image-container change-bg">
        <ItemImageComponent
          className="add-item-image"
          imageUrl={url}
          type={type}
        />
        <ButtonComponent actionHandler={addItemExec}>
          Add to Store
        </ButtonComponent>
      </div>
    </div>
  );
};

export default AddPage;
