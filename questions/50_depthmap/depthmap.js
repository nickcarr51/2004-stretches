//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated

const recordDepth = (tomb, level = 0) => {
  if (typeof tomb !== 'object') throw new Error('no way jose');

  tomb['depth'] = level;
  level++;
  Object.keys(tomb).forEach(key => {
    if (key === 'treasury') {
      tomb['depth'] = level;
      return tomb;
    } else {
      if (typeof tomb[key] === 'object') {
        return recordDepth(tomb[key], level);
      }
    }
  })
  return tomb;
};

module.exports = { recordDepth };
