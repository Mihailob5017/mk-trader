import React, { useState } from "react";
import "./filter.style.scss";
import SearchComponent from "../search/search.component";
import SortItemsComponent from "../sort-items/sort-items.component";
import SelectComponent from "../select/select.component";
import InputComponent from "../input/input.component";
import ButtonComponent from "../button/button.somponent";
const searchNameType = [
  { name: "Type", value: "type" },
  { name: "Price", value: "price" },
  { name: "Rating", value: "score" },
];
const types = [
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

const FilterComponent = ({ close, searchByName, searchAndFilter }) => {
  //  Search
  const [searchParam, setSearchParam] = useState("");
  const [param1, setParam1] = useState("");
  const [param2, setParam2] = useState("");

  //  Sort
  const [sortValue, setSortValue] = useState(false);
  const [sortByName, setSortByName] = useState("name");

  const handleChange = (e) => {
    const { value, name } = e.target;
    //  Search
    if (name === "search-type") setSearchParam(value);
    if (name === "item-type" || name === "param1") setParam1(value);
    if (name === "param2") setParam2(value);
    //  Sort
    if (name === "radio-group") setSortValue(!sortValue);
    if (setSortByName === "sort-by-name") setSortByName(value);
  };

  const executeSearchAndFilter = () => {
    const obj = {
      filter: {
        type: searchParam,
        param1: param1,
        param2: param2,
      },
      sort: {
        type: sortByName,
        param: sortValue ? "asc" : "desc",
      },
    };
    searchAndFilter(obj);
    setSearchParam("");
    setParam1("");
    setParam2("");
    setSortByName("");
    setSortValue(false);
  };

  return (
    <div className="filter-container">
      <div className="filter-exit">
        <i className="far fa-times-circle" onClick={close}></i>
      </div>
      <SearchComponent action={searchByName} />
      <div className="filter-body">
        <div className="search-items-container">
          <h2>Filter Elements by Specific param</h2>
          <SelectComponent
            options={searchNameType}
            value={searchParam}
            message="Type:"
            name="search-type"
            handleChange={handleChange}
          />
          {searchParam !== "" ? (
            searchParam === "type" ? (
              <SelectComponent
                options={types}
                value={param1}
                message="Category"
                name="item-type"
                handleChange={handleChange}
              />
            ) : (
              <>
                <InputComponent
                  placeholder={searchParam === "price" ? "Price" : "Rating"}
                  label="Min:"
                  name="param1"
                  value={param1}
                  handleChange={handleChange}
                />
                <InputComponent
                  placeholder={searchParam === "price" ? "Price" : "Rating"}
                  label="Max:"
                  name="param2"
                  value={param2}
                  handleChange={handleChange}
                />
              </>
            )
          ) : (
            <></>
          )}
        </div>

        <div className="sort-items-container">
          <h2>Sort Items by parameter</h2>{" "}
          <SortItemsComponent
            sortValue={sortValue}
            sortByName={sortByName}
            handleChange={handleChange}
          />
          <ButtonComponent actionHandler={executeSearchAndFilter}>
            Search
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
