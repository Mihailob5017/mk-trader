

export const appendScoredList = (objects, object) => {
  const newObject = { ...objects };
  newObject[object.itemId] = object.scored;
  return newObject;
};
