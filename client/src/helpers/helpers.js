export const appendScoredList = (objects, object) => {
  const newObject = Object.assign(objects, object);
  return newObject;
};

export const isExact = (pathname, string) => {
  const arg = pathname.substring(1, pathname.length);
  return arg === string ? true : false;
};

export const checkIfEmpty = (obj) =>
  Object.keys(obj).length === 0 ? false : true;

export const getLastParam = (url) => {
  const args = url.split("/");
  return args[args.length - 1];
};

export const filterOutItem = (storeItems, itemId) => {
  if (storeItems !== null) {
    const res = storeItems.filter((item) => item._id === itemId);
    sessionStorage.setItem("curr-item", JSON.stringify(res));
    return res;
  } else return JSON.parse(sessionStorage.getItem("curr-item"));
};

export const isInCart = (items, item_id) => {
  for (let item of items) {
    if (item === item_id) return true;
  }
  return false;
};

export const getInCartParam = (url) => {
  const args = url.split("/");
  return args[args.length - 2];
};
export const newCartItems = (Items, item) => {
  return Items.includes(item) ? [...Items] : [...Items, item];
};

export const getCartItems = (storeItems, cartItems) => {
  return storeItems.filter((item) => cartItems.includes(item._id));
};

export const isUrl = (url) => {
  return url.startsWith("http") && url.includes("/") ? true : false;
};

export const getTotal = (itemArr) => {
  const sum = itemArr.reduce((acc, curr) => acc + curr.price, 0);

  return sum;
};

export const getTheme = () => {
  const isSet = localStorage.getItem("theme");
  if (isSet === null)
    //if there is no theme,it will set it a light theme to default
    localStorage.setItem("theme", false);
  else if (isSet === "true") return true;
  else return false;
};

export const setTheme = (theme) => {
  if (theme === true) {
    //  Changes the body background
    document.body.style.backgroundColor = "#111";
    // Changes the text
    document
      .querySelectorAll(" .change")
      .forEach((el) => (el.style.color = "#aaaaaa"));
    //  Changes the background
    document
      .querySelectorAll(".change-bg")
      .forEach((el) => (el.style.backgroundColor = "#333"));
    //Changes the boarder
    document
      .querySelectorAll(".change-border")
      .forEach((el) => (el.style.border = "1px solid white"));
  } else {
    // more style changes if needed
    document.body.style.backgroundColor = "#ffffff";
    document
      .querySelectorAll(" .change")
      .forEach((el) => (el.style.color = "#000000"));
    document
      .querySelectorAll(".change-bg")
      .forEach((el) => (el.style.backgroundColor = "#ddd"));
    //Changes the boarder
    document
      .querySelectorAll(".change-border")
      .forEach((el) => (el.style.border = "1px solid black"));
  }
};

export const getRMState = () =>
  localStorage.getItem("auth-token") ? true : false;

export const changeRMState = (NRMState) => {
  const lStorage = localStorage.getItem("auth-token");
  const sStorage = sessionStorage.getItem("auth-token");

  if (lStorage && NRMState === false) {
    sessionStorage.setItem("auth-token", lStorage);
    localStorage.removeItem("auth-token");
    return;
  } else if (sStorage && NRMState === true) {
    localStorage.setItem("auth-token", sStorage);
    sessionStorage.removeItem("auth-token");
    return;
  } else return;
};


