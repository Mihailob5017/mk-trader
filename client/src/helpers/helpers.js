export const appendScoredList = (objects, object) => {
  const newObject = Object.assign(objects, object);
  return newObject;
};

export const isExact = (pathname, string) => {
  const arg = pathname.substring(1, pathname.length );
  console.log(arg);
  console.log(string)
  return arg === string ? true : false;
};
