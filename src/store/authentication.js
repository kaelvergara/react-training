import {observable, action} from "mobx";

export const authenticationStore = observable({
  // isloggedIn: localStorage ? localStorage.getItem('isLoggedIn') : true,
  isloggedIn: true,
  // action:
  setIsLoggedIn: action(function(isloggedIn) {
    this.isloggedIn = isloggedIn;
    if (isloggedIn) {
      localStorage.setItem('isLoggedIn', isloggedIn)
    } else {
      localStorage.removeItem('isLoggedIn')
    }

  })
});