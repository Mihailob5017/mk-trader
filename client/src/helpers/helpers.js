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
