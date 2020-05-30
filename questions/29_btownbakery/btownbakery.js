// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (recipe, supplies) => {
  if (typeof recipe !== 'object' || typeof supplies !== 'object') throw new Error('arguments must be objects');
  let cake = {};
  for (let key in recipe) {
    if (!supplies.hasOwnProperty(key)) {
      return 0;
    }
  }
  Object.keys(recipe).forEach(ing => {
    cake[ing] = Math.floor(supplies[ing] / recipe[ing]);
  })
  return Math.min(...Object.values(cake));
};

module.exports = { btownbake };
