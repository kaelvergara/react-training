import {observable, autorun, action} from "mobx";

export const authenticationStore = observable({
  isloggedIn: localStorage ? localStorage.getItem('isLoggedIn') : false,
  // action:
  setIsLoggedIn: action(function(isloggedIn) {
    this.isloggedIn = isloggedIn;
    localStorage.setItem('isLoggedIn', isloggedIn)
  })
});