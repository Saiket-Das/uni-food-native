import { useContext } from "react";
import jwtDecode from "jwt-decode";
import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = () => {
    const user = jwtDecode(authToken);
    AuthContext.setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, login, logOut };
};
