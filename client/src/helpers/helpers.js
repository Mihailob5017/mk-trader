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
  const args = url.split('/');
  return args[args.length - 1];
};

export const filterOutItem = (storeItems, itemId) => {
  if (storeItems !== null) {
    const res = storeItems.filter((item) => item._id === itemId);
    sessionStorage.setItem('curr-item', JSON.stringify(res));
    return res;
  } else return JSON.parse(sessionStorage.getItem('curr-item'));
};

export const isInCart = (items, item_id) => {
  for (let item of items) {
    if (item === item_id) return true;
  }
  return false;
};

export const getInCartParam = (url) => {
  const args = url.split('/');
  return args[args.length - 2];
};
export const newCartItems = (Items, item) => {
  return Items.includes(item) ? [...Items] : [...Items, item];
};
