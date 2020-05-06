/* 
There are N rooms and you start in room 0. 
Each room has a distinct number in 0, 1, 2, ..., N-1 
Each room may have some keys to access the next room.  

Initially, all the rooms start locked (except for room 0).
To open the next room, you must have already encountered 
the appropriate key for that room.

EXAMPLE OF ROOMS 
ex 1. 
[[1],[2],[3],[]] 

ex 2. 
[[1,3],[3,0,1],[2],[0]]

*/

const keysToRooms = (rooms) => {
  let keys = [];
  for (let i = 1; i < rooms.length; i++) {

    // keys.push((i + 1));
    // if (!rooms[i].includes(...keys)) {
    //   return false;
    // }

    // keys.push(i);
    // rooms[i].forEach(num => {
    //   if (!keys.includes(num)) {
    //     return false;
    //   }
    // })

    rooms[i - 1].forEach(num => {
      keys.push(num);
    })
    rooms[i].forEach(num => {
      if (!keys.includes(num)) {
        return false;
      }
    })
    
  }
  return true;
};

module.exports = { keysToRooms };
