import { gStyles } from "../styles/style"

const LoginScreen = () => {
    return (
        <View style={gStyles.formContainer}>
        <Text style={gStyles.title}>Увійти</Text>
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
          <Text style={gStyles.buttonTitle}>Увійти</Text>
        </TouchableOpacity>
        <Text style={gStyles.textToLoginForm}>Немає акаунту? Зареєструватися</Text>
        <StatusBar style="auto" />
      </View>
    )
}