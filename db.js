// * the sample basic DB to use to have data
exports.envelopes = [
  {
    id: 0,
    name: 'Rent',
    budget: 800,
  },
  {
    id: 1,
    name: 'Food',
    budget: 400,
  },
  {
    id: 2,
    name: 'Electric',
    budget: 125,
  },
  {
    id: 3,
    name: 'Water',
    budget: 75,
  }
]

// * the methods for the sample database to make it easier to call for things

exports.findById = (data, dataId) => {
  // find id in the db passed 
  const dataItem = data.find(item => item.id === parseInt(dataId));

  return dataItem;
}