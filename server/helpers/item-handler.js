const filterAndSort = (items, params) => {
  const filterAndSort = compose(filterByParam, sortByParam);
  return filterAndSort(items, params);
};

const sortByParam = (items, params) => {
  let sorted = items;
  const { type, param } = params.sort;
  if (param === 'asc') {
    type === 'name'
      ? (sorted = sortByName(items, '<'))
      : sorted.sort((a, b) => a[type] - b[type]);
  }
  if (param === 'desc') {
    type === 'name'
      ? (sorted = sortByName(items, '>'))
      : sorted.sort((a, b) => b[type] - a[type]);
  }

  return sorted;
};

//  Because we cant sort names using the sort method,we have to use this function that will do it manualy
const sortByName = (items, operator) => {
  let sorted = items;
  let tmp;
  if (operator === '<') {
    for (let i = 0; i < items.length; i++)
      for (let j = i; j < items.length; j++) {
        if (sorted[i].name < sorted[j].name) {
          tmp = sorted[i];
          sorted[i] = sorted[j];
          sorted[j] = tmp;
        }
      }
  } else {
    for (let i = 0; i < items.length; i++)
      for (let j = i; j < items.length; j++) {
        if (sorted[i].name > sorted[j].name) {
          tmp = sorted[i];
          sorted[i] = sorted[j];
          sorted[j] = tmp;
        }
      }
  }

  return sorted;
};

const filterByParam = (items, params) => {
  let filtered = items;
  const { type, param1, param2 } = params.filter;
  if (type === 'price') {
    filtered = items.filter(
      (item) => item.price >= param1 && item.price <= param2
    );
  }
  if (type === 'score') {
    filtered = items.filter(
      (item) => item.score >= param1 && item.score <= param2
    );
  }
  if (type === 'type' && param1 !== 'all') {
    filtered = items.filter((item) => item.type === param1);
  }

  return filtered;
};

const compose = (fn1, fn2) => (items, params) =>
  fn1(fn2(items, params), params);

const searchForItems = (itemArray, param) => {
  const newArr = itemArray.filter((element) => element.name.includes(param));

  return newArr;
};

const appendObjectList = (objects, object) => {
  const newObject = Object.assign(objects, object);
  return newObject;
};

module.exports.searchForItems = searchForItems;
module.exports.filterAndSort = filterAndSort;
module.exports.appendObjectList = appendObjectList;
