import { createStore } from "redux";

const InitialState = { comments: [] };

const reducer = (state = InitialState, action) => {
  if (action.type === "sendComments") {
    return { comments: action.comments };
  }
  return state;
};

const store = createStore(reducer);

export default store;
