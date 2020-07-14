import React from "react";

//  Helpers
import female from "../../assets/art/female.png";
import hats from "../../assets/art/hats.png";
import heels from "../../assets/art/heels.png";
import hoodies from "../../assets/art/hoodies.png";
import jackets from "../../assets/art/jackets.png";
import male from "../../assets/art/male.png";
import other from "../../assets/art/other.png";
import pants from "../../assets/art/pants.png";
import polos from "../../assets/art/polos.png";
import shirts from "../../assets/art/shirts.png";
import sneakers from "../../assets/art/sneakers.png";
import socks from "../../assets/art/socks.png";
import sweaters from "../../assets/art/sweaters.png";
import swimsuits from "../../assets/art/swimsuits.png";

const chooseAvatar = (hasUrl, imageUrl, type) => {
 
  if (hasUrl === false) return imageUrl;

    

  switch (type) {
    case "male":
      return male;
    case "female":
      return female;
    case "shirts":
      return shirts;
    case "pants":
      return pants;
    case "jackets":
      return jackets;
    case "hats":
      return hats;
    case "hoodies":
      return hoodies;
    case "polos":
      return polos;
    case "other":
      return other;
    case "shoes":
      return sneakers;
    case "socks":
      return socks;
    case "sweaters":
      return sweaters;
    case "swimsuits":
      return swimsuits;
    case "heels":
      return heels;

    default:
      return "";
  }
};

const ItemImagecomponent = ({ imageUrl, type, className  }) => {
 
  return (
    <div className={className}>
      <img
        src={chooseAvatar(
          imageUrl.length !== 0 ? false : true,
          imageUrl,
          type
        )}
      />
    </div>
  );
};

export default ItemImagecomponent;
