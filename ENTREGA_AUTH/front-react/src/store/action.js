export const AUTHENTICATED = "AUTHENTICATED";
export const LOGOUT = "LOGOUT";

export const authenticated = (payload) => {
  return { type: AUTHENTICATED, payload };
};

export const logout = (payload) => {
  return { type: LOGOUT, payload };
};
