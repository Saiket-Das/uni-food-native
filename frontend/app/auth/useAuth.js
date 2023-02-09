import { useContext } from "react";
import jwtDecode from "jwt-decode";
import AuthContext from "./context";
import AuthStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = () => {
    const user = jwtDecode(authToken);
    AuthContext.setUser(user);
    AuthStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    AuthStorage.removeToken();
  };

  return { user, login, logOut };
};
