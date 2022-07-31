import { createContext, useReducer} from "react";
import { authReducer, initialState } from "./reducer";
import { getTokenApi } from "../api/auth/token";


const init = () => {
  const hasData =  getTokenApi();
  const isData = !!hasData;
  if (isData) {
    return JSON.parse(hasData);
  }
  return initialState;
};


export const MyContextAuth = createContext({
  user: {
    id: 3,
    email: "",
    password: "",
  },
  access_token: "",
});

export const MyContextAuthDispactch = createContext(() => {});

export const AuthContext = ({ children }) => {
  const [ auth, dispatch ] = useReducer(authReducer, initialState, init);
 
  return (
    <MyContextAuthDispactch.Provider value={dispatch}>
      <MyContextAuth.Provider value={{ auth }}>
        {children}
      </MyContextAuth.Provider>
    </MyContextAuthDispactch.Provider>
  );
};
