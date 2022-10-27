import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";

// import Button from "./app/components/common/AppButton";
// import Text from "./app/components/common/AppText";
// import TextInput from "./app/components/common/AppTextInput";
// import Card from "./app/components/common/Card";
// import Icon from "./app/components/common/Icon";
// import ImageInput from "./app/components/common/ImageInput";
// import SubmitButton from "./app/components/forms/SubmitButton";
// // import useLocation from "./app/hooks/useLocation";
// import FoodItem from "./app/components/lists/ListItem";
// import ListItemSperator from "./app/components/lists/ListItemSperator";
// import colors from "./app/confiq/colors";
// import Icon from "./app/components/common/Icon";

// import ActivityIndicator from "./app/components/common/ActivityIndicator";

import HomeScreen from "./app/screens/HomeScreen";
import AccountScreen from "./app/screens/AccountScreen";
import AddFood from "./app/screens/AddFoodScreen";
import AppNavigator from "./app/navigation/AppNavigator";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AuthNavigator from "./app/navigation/AuthNaviagator";
import SigninScreen from "./app/screens/SigninScreen";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
      {/* <AuthNavigator /> */}
    </NavigationContainer>
  );
}
