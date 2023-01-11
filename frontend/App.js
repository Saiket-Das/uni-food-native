import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import navigationTheme from "./app/navigation/navigationTheme";

import store from "./app/redux/store";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNaviagator";
// import OfflineNotice from "./app/components/common/OfflineNotice";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Provider store={store}>
        {/* <AppNavigator /> */}
        <AuthNavigator />
      </Provider>
    </NavigationContainer>
  );
}
