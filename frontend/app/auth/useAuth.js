import { useContext } from "react";
import jwtDecode from "jwt-decode";

import authContext from "./context";
import AuthStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(authContext);

  const login = (authToken) => {
    try {
      const user = jwtDecode(authToken);
      setUser(user?.data);
      AuthStorage.storeToken(authToken);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    setUser(null);
    AuthStorage.removeToken();
  };

  return { user, login, logOut };
};
