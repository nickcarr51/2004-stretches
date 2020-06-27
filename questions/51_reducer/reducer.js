//Redux Practice
//You will be expanding on the reducer function

//types are defined here.
const types = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
};

const initialState = [
  {
    item: 'Use Redux',
    completed: false,
    id: 0,
  },
];

const reducer = (state = initialState, action) => {
  //ADD YOUR CODE HERE
  switch (action.type) {
    case types.ADD_TODO:
      console.log(action);
      console.log(state);
      return [
        {
          text: action.text,
          completed: false,
          id: 0
        }
      ]
    case types.DELETE_TODO:
      return {

      }
    case types.COMPLETE_TODO:
      return {

      }
    default:
      return state;
  }
};

module.exports = { types, initialState, reducer };
