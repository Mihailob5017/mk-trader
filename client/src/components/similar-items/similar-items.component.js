import React, { useEffect } from "react";
import "./similar-items.style.scss";
import { Link } from "react-router-dom";
import { setTheme, getTheme } from "../../helpers/helpers";
import ButtonComponent from "../../components/button/button.somponent";
import ItemImagecomponent from "../item-image/item-image.component";
const SimilarItemsComponent = ({ itemId, items, type }) => {
  useEffect(() => {
    setTheme(getTheme());
  });
  return (
    <div className="similar-items-body">
      {items
        .filter((item) => item._id !== itemId && type === item.type)
        .map(
          (item, i) =>
            i < 5 && (
              <div key={i} className="item-container change-bg">
                <ItemImagecomponent
                  className="item-image"
                  imageUrl={item.imageUrl}
                  type={item.type}
                />
                <div className="info-and-btn">
                  <div className="info">
                    <h3 className='change'>Name:{item.name}</h3>
                    <h3 className='change'>Price:{item.price}$</h3>
                    <h3 className='change'>Type:{item.type}</h3>
                  </div>
                  <ButtonComponent fullWidth={true}>
                    <Link to={`/home`}>View Items</Link>
                  </ButtonComponent>
                </div>
              </div>
            )
        )}
    </div>
  );
};

export default SimilarItemsComponent;
