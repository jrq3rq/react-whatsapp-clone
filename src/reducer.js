//no log in user
export const initialState = {
  user: null,
};

//actions: pushing data into date layer
export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    // change user to whatever we dispatch
    default:
      return state;
    // fall back to default state
  }
};

export default reducer;
