import React, { useState } from "react";

//  Components
import InputComponent from "../../components/input/input.component";
import SelectComponent from "../../components/select/select.component";
import CheckBoxComponent from "../../components/checkbox/checkbox.component";
import ButtonComponent from "../../components/button/button.somponent";
import ItemImageComponent from "../../components/item-image/item-image.component";
import "./add-page.style.scss";

//  Helpers
const options = [
  { name: "Male", value: "male" },
  { name: "Female", value: "female" },
  { name: "Sneakers", value: "shoes" },
  { name: "Shirts", value: "shirts" },
  { name: "Pants", value: "pants" },
  { name: "Hats", value: "hats" },
  { name: "Hoodies", value: "hoodies" },
  { name: "Polos", value: "polos" },
  { name: "Shoes", value: "shoes" },
  { name: "Socks", value: "socks" },
  { name: "Sweaters", value: "sweaters" },
  { name: "Heels", value: "heels" },
  { name: "Swimsuits", value: "swimsuits" },
  { name: "Other", value: "other" },
];

const AddPage = ({ addItem, token }) => {
  const [willAddUrl, setAddUrl] = useState(false);
  const [url, setUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");

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
  };

  const addItemExec = () => {
    const item = { name, type, description: desc, imageUrl: url, price };
    addItem(item, token);
    setPrice("");
    setDesc("");
    setName("");
    setType("");
    setAddUrl(false);
    setUrl("");
  };

  return (
    <div className="add-page-container">
      <div className="basic-info-conatiner">
        <InputComponent
          label="Item Name"
          name="name"
          value={name}
          handleChange={handleChange}
          placeholder="Required"
        />
        <InputComponent
          label="Item Price"
          type="number"
          name="price"
          min={0}
          value={price}
          handleChange={handleChange}
          placeholder="Required"
        />
        <SelectComponent
          message="Item type"
          name="type"
          value={type}
          handleChange={handleChange}
          options={options}
        />
        <CheckBoxComponent name="checkbox" handleChange={handleChange}>
          I will link a image-url
        </CheckBoxComponent>
        {willAddUrl === true && (
          <InputComponent
            placeholder="Optional"
            name="url"
            value={url}
            handleChange={handleChange}
            label="Image Url"
          />
        )}
        <div className="add-page-desc">
          <h1>Item Description:</h1>
          <textarea name="desc" value={desc} onChange={handleChange}></textarea>
        </div>
      </div>
      <div className="add-image-container">
        <ItemImageComponent
          className="add-item-image"
          imageUrl={url}
          type={type}
        />
        <ButtonComponent actionHandler={addItemExec}>
          Add Item To Store
        </ButtonComponent>
      </div>
    </div>
  );
};

export default AddPage;
