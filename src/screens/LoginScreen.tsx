import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import ScreenContainer from "../components/ScreenContainer";
import Heading from "../components/Heading";
import BodyText from "../components/BodyText";
import TextField from "../components/TextField";
import PrimaryButton from "../components/PrimaryButton";

import { SPACING } from "../constants/spacing";
import { login } from "../services/authService";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

async function handleLogin() {
  setErrorMessage("");

  if (!email.trim() || !password.trim()) {
    setErrorMessage("Please enter your email address and password.");
    return;
  }

  try {
    setIsLoading(true);

    const result = await login({
      email: email.trim(),
      password,
    });

    if (!result.success) {
      setErrorMessage(result.message);
      return;
    }

    console.log("Login successful:", result);

    navigation.navigate("Landing" as never);
  } catch (error) {
    setErrorMessage("Something went wrong. Please try again.");
    console.error("Login failed:", error);
  } finally {
    setIsLoading(false);
  }
}

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Heading>Welcome back</Heading>

        <View style={styles.subtitle}>
          <BodyText>
            Log in to continue using Travelmate.
          </BodyText>
        </View>

        <View style={styles.form}>
          <TextField
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
          />

          <View style={styles.fieldSpacing}>
            <TextField
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          {errorMessage ? (
  <View style={styles.errorSpacing}>
    <Text style={styles.errorText}>
      {errorMessage}
    </Text>
  </View>
) : null}

          <View style={styles.buttonSpacing}>
            <PrimaryButton
              title="Login"
              loading={isLoading}
              onPress={handleLogin}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
  },

  subtitle: {
    marginTop: SPACING.sm,
  },

  form: {
    marginTop: SPACING.xl,
  },

  fieldSpacing: {
    marginTop: SPACING.md,
  },

  buttonSpacing: {
    marginTop: SPACING.lg,
  },

  errorSpacing: {
    marginTop: SPACING.md,
  },

  errorText: {
    color: "red",
  },
});