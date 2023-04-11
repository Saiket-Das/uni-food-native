import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { AppLoading } from "expo";

import navigationTheme from "./app/navigation/navigationTheme";

import store from "./app/redux/store";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNaviagator";

import authStorage from "./app/auth/storage";
import AuthContext from "./app/auth/context";
// import OfflineNotice from "./app/components/common/OfflineNotice";

export default function App() {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    console.log("User ->> ", user);
    if (user) setUser(user);
  };

  const [isReady, setReady] = useState(false);

  if (isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        <Provider store={store}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </Provider>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
