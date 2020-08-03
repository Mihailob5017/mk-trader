import React, { useState, useEffect } from "react";

//  Helper Components
import { isInCart, setTheme, getTheme } from "../../helpers/helpers";

//  Components
import "./home-page.style.scss";
import ItemComponent from "../../components/item/item.component";
import ButtonComponent from "../../components/button/button.somponent";
import FilterComonent from "../../components/filter/filter-container.component";
import EmptyComponent from "../../components/empty/empty.component";

const HomePage = ({
  items,
  hasToken,
  scoredItems,
  addNewlyScored,
  cartItems,
  getToken,
}) => {
  useEffect(() => {
    setTheme(getTheme());
  });
  const [isFilterOpen, setFilterOpen] = useState(false);
  return isFilterOpen ? (
    <FilterComonent close={() => setFilterOpen(false)} />
  ) : items.length === 0 ? (
    <EmptyComponent />
  ) : (
    <div className="home-page-container">
      <ButtonComponent actionHandler={() => setFilterOpen(true)}>
        Open Filter
      </ButtonComponent>
      <div className="active-filter-btn"></div>
      {items.map((item, i) => (
        <ItemComponent
          isInCart={isInCart(cartItems, item._id)}
          scored={scoredItems[item._id]}
          addNewlyScored={addNewlyScored}
          key={i}
          token={getToken}
          item={item}
          hasToken={hasToken}
        />
      ))}
    </div>
  );
};

export default HomePage;
