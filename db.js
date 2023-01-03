// * the sample basic DB to use to have data
exports.envelopesDB = [
  {
    id: 0,
    name: 'Rent',
    budget: 800.00,
    amountSaved: 725.00,
  },
  {
    id: 1,
    name: 'Food',
    budget: 400.00,
    amountSaved: 250.00,
  },
  {
    id: 2,
    name: 'Electric',
    budget: 125.00,
    amountSaved: 75.00,
  },
  {
    id: 3,
    name: 'Water',
    budget: 75.00,
    amountSaved: 35.00,
  }
]

// * the methods for the sample database to make it easier to call for things

exports.findById = (data, dataId) => {
  // find id in the db passed 
  const dataItem = data.find(item => item.id === parseInt(dataId));

  return dataItem;
}

exports.findByName = (data, dataName) => {
  // * the key of the db had to be lowercase for the find to work
  // ? why did it need to be lowercase??
  const dataItem = data.find(item => item.name.toLowerCase() === dataName);

  return dataItem;
}

exports.createNewId = (data) => {
  const lastItem = data[data.length - 1];

  const newId = lastItem.id + 1;

  return newId;
}

exports.deleteById = (data, dataId) => {
  const indexOfItem = data.findIndex(item => item.id === parseInt(dataId));

  if (indexOfItem === -1) {
    console.log(`No item by that index found to delete`);
  }
  data.splice(indexOfItem, 1);
  return data
}

exports.deleteByName = (data, dataName) => {
  const indexOfItem = data.findIndex(item => item.name.toLowerCase() === dataName);

  if (indexOfItem === -1) {
    console.log(`No item by that index found to delete`);
  }
  data.splice(indexOfItem, 1);
  return data
}