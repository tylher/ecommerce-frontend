const resettableReducer = (reducer, initialState) => (state, action) => {
  if (action.type === "RESET STATE") {
    return initialState;
  }

  return reducer(state, action);
};

export default resettableReducer;
