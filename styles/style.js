import { StyleSheet } from "react-native";

export const gStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  //   image: {
  //     flex: 1,
  //     justifyContent: 'center',
  //   },

  title: {
    fontSize: 30,
    color: "#212121",
    fontFamily: "roboto-medium",
    marginBottom: 33,
    marginLeft: "auto",
    marginRight: "auto",
    letterSpacing: 0.3,
  },

  formContainer: {
    position: "relative",
    minWidth: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    // paddingBottom: 78,
    paddingTop: 92,
    // borderRadius: "25 25 0 0",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  imgWrp: {
    position: "absolute",
    top: "-15%",
    zIndex: 10,
    left: "50%",
    transform: [{ translateX: -50 }],
    width: 120,
    height: 120,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

//   image: {
//     width: 125,
//     // backgroundColor: "rgba(246, 246, 246, 1)",
//   },

  inputWrp: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  input: {
    // width: 343,
    height: 50,
    padding: 16,
    // color: ${({placeholder}) => placeholder? rgba(189, 189, 189, 1) : 'black'},
    backgroundColor: "rgba(246, 246, 246, 1)",
    // marginBottom: 16,
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: "#E8E8E8",
  },

  button: {
    width: 343,
    padding: 16,
    color: "white",
    backgroundColor: "#FF6C00",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    marginTop: 43,
  },

  buttonTitle: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "roboto-reg",
    fontSize: 16,
  },

  textToLoginForm: {
    color: "#1B4371",
    fontFamily: "roboto-reg",
    fontSize: 16,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16,
    marginBottom: 78,
  },
});
