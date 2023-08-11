import { Text, TextInput, TouchableOpacity, View, Image} from "react-native";
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
      </View>
      <Text style={gStyles.title}>Реєстрація</Text>
      <View>
        <TextInput style={gStyles.input} placeholder="Логін" />
      </View>
      <View>
        <TextInput
          style={gStyles.input}
          placeholder="Адреса електронної пошти"
        />
      </View>
      <View>
        <TextInput
          style={gStyles.input}
          placeholder="Пароль"
          autoComplete="password"
        />
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
