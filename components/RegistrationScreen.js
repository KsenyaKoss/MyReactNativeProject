import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";
import { IoAddCircleOutline } from "react-icons/io";
import { gStyles } from "../styles/style";
import { StatusBar } from "expo-status-bar";
// import { useState } from "react";

const RegistrationScreen = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const onRegister = () => {

  // }

  return (
    <View style={gStyles.formContainer}>
      <View style={gStyles.imgWrp}>
        {/* <Image
        style= {gStyles.image}
        /> */}
       {/* <Button title="add"></Button> */}
      </View>
      <Text style={gStyles.title}>Реєстрація</Text>
      <View style={gStyles.inputWrp}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput style={gStyles.input} placeholder="Логін" />
          </KeyboardAvoidingView>
          <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            style={gStyles.input}
            placeholder="Адреса електронної пошти"
          />
    </KeyboardAvoidingView>
    <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            style={gStyles.input}
            placeholder="Пароль"
            autoComplete="password"
          />
       </KeyboardAvoidingView>
      </View>
      <TouchableOpacity style={gStyles.button}>
        <Text style={gStyles.buttonTitle}>Зареєстуватися</Text>
      </TouchableOpacity>
      <Text style={gStyles.textToLoginForm}>Вже є акаунт? Увійти</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default RegistrationScreen;
