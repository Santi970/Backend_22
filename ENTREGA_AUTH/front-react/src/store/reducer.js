import { AUTHENTICATED, LOGOUT } from "./action";

export const initialState= {
  user: {
    id: 3,
    email: "",
    password: "",
  },
  access_token: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...action.payload };
    case LOGOUT:
      return { ...action.payload };
    default:
      return state;
  }
};
