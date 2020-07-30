import React from "react";

//  Components

import "./image.style.scss";
//  Helpers
import gold_m from "../../assets/avatars/gold_m.png";

import gold_f from "../../assets/avatars/gold_f.png";
import default_m from "../../assets/avatars/default_m.png";
import default_f from "../../assets/avatars/default_f.png";
import ocasional_f from "../../assets/avatars/ocasional_m.png";
import ocasional_m from "../../assets/avatars/ocasional_f.png";
import premium_m from "../../assets/avatars/proffesional_m.png";
import premium_f from "../../assets/avatars/proffesional_f.png";
import proffesional_f from "../../assets/avatars/premium_f.png";
import proffesional_m from "../../assets/avatars/premium_m.png";

const chooseImage = (hasUrl, gender, avatar) => {
  if (hasUrl === true) return avatar;

  switch (avatar) {
    case "default":
      return gender === "male" ? default_m : default_f;
    case "prof":
      return gender === "male" ? proffesional_m : proffesional_f;
    case "ocasional":
      return gender === "male" ? ocasional_m : ocasional_f;
    case "premium":
      return gender === "male" ? premium_m : premium_f;
    case "gold":
      return gender === "male" ? gold_m : gold_f;

    default:
      return "";
  }
};

const ImageComponent = ({ className, alt, hasUrl, gender, avatar }) => {
  return (
    <div className={className}>
      <img src={chooseImage(hasUrl, gender, avatar)} />
    </div>
  );
};

export default ImageComponent;
