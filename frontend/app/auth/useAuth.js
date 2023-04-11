import { useContext } from "react";
import jwtDecode from "jwt-decode";

import authContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(authContext);

  const login = (authToken) => {
    try {
      const user = jwtDecode(authToken);
      setUser(user?.data);
      authStorage.storeToken(authToken);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, login, logOut };
};
