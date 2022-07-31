import {useContext} from "react";
import {MyContextAuth, MyContextAuthDispactch} from "../../store/Context";

export const useAuthState = () => useContext(MyContextAuth);

export const useAuthDispatch = () => useContext(MyContextAuthDispactch);
