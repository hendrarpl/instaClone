import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Image
        resizeMode="contain"
        source={require("./assets/logo.png")}
        style={styles.logo}
      />
      <TextInput style={styles.textInput} placeholder="enter your email/ID :" placeholderTextColor={'#757575'} />
      <TextInput style={styles.textInput} placeholder="enter your password :" placeholderTextColor={'#757575'} />
      <TouchableOpacity
        style={{
          height: 35,
          width: 245,
          backgroundColor: "#008FF5",
          borderRadius: 6,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <Text style={{
        marginTop : 100
      }}>
        don’t have an account?{" "}
        <Text
          style={{
            color: "#239FF8",
          }}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 140,
    width: 290,
  },
  textInput: {
    height: 35,
    width: 245,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    backgroundColor: "#F0F0F0",
    marginVertical: 5,
    padding: 5,
    borderRadius: 10,
  },
});
