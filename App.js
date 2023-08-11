// import { StatusBar } from "expo-status-bar";
import {
  ImageBackground
} from "react-native";
import { gStyles } from "./styles/style";
import { useFonts } from "expo-font";
import RegistrationScreen from "./components/RegistrationScreen";

// const image = require('./assets/images/backGround/soursImg.jpeg')

export default function App() {
  const [fontsLoaded] = useFonts({
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-reg": require("./assets/fonts/Roboto-Regular.ttf"),
    "inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
    "SF-light": require("./assets/fonts/SF-Pro-Display-Light.otf"),
    "SF-reg": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      style={gStyles.container}
      source={require("./assets/images/backGround/soursImg.jpeg")}
      resizeMode="cover"
    >
     <RegistrationScreen/>
    </ImageBackground>
  );
}

// const styles = StyleSheet.create({
// });
