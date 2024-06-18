export const resetMiddleware = (store) => (next) => (action) => {
  if (action.type === "RESET STATE") {
    store.dispatch({ type: "@@redux/INIT" });
  }

  return next(action);
};
