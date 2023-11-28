import React, { useMemo, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

//Create a login page
export default function LogScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = useMemo(() => {
    return email.length > 0 && password.length > 0;
  }, [email, password]);

  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeMessage}>Welcome Back</Text>
      </View>
      <View style={styles.welcomeDesc}>
        <Text>Please fill out all fields to login.</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(input) => setEmail(input)}
          style={styles.inputValue}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(input) => setPassword(input)}
          style={styles.inputValue}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={!isFormValid}
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={[styles.button, isFormValid ? null : styles.disabledButton]}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "navajowhite",
  },
  inputContainer: {
    width: "80%",
  },
  inputValue: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    height: 40,
    borderRadius: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "orange",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "grey",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  welcomeContainer: {
    marginBottom: 10,
  },
  welcomeMessage: {
    fontWeight: "700",
    fontSize: 30,
  },
  welcomeDesc: {
    fontSize: 18,
    marginBottom: 10,
  },
});
