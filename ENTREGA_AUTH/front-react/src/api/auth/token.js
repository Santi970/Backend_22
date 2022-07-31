import {USER} from "../../utils/constants";
import Cookies from 'js-cookie'

export  function setTokenApi(data){
  console.log('a verr', data)
  try {
    Cookies.set(USER, data)
    return true;
  } catch (error) {
    return null;
  }
}

export  function getTokenApi() {
  try {
    return Cookies.get(USER);
  } catch (err) {
    return null;
  }
}

export  function removeTokenApi() {
  try {
    return Cookies.remove(USER);
  } catch (err) {
    return null;
  }
}
