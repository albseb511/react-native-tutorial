import React from "react";

const actions = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT: "LOGOUT",
};

const initState = () => {
  auth: false;
};

const Reducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        auth: true,
      };
    case actions.LOGOUT:
      return {
        ...state,
        auth: false,
      };
  }
};

export const AppContext = React.createContext();

export default function AppContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(Reducer, initState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}
