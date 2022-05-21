// how this works
// functions in usecontext
// that will dispatch and action to the reducer (state)
// reducer loooks at the action and updates the state

import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  // state
  const initialState = {
    users: [],
    user: [],
    loading: false,
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
