import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import navigationTheme from "./app/navigation/navigationTheme";

import store from "./app/redux/store";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNaviagator";
import AuthContext from "./app/auth/context";
import { useState } from "react";
// import OfflineNotice from "./app/components/common/OfflineNotice";

export default function App() {
  const [user, setUser] = useState();
  console.log(user);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        <Provider store={store}>
          {/* {user ? 
            :  */}
          <AppNavigator />
          {/* <AuthNavigator /> */}
          {/* } */}
        </Provider>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
