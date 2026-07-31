import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import ScreenContainer from "../components/ScreenContainer"; 
import Heading from "../components/Heading";
import BodyText from "../components/BodyText";
import { SPACING } from "../constants/spacing";
export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
  <ScreenContainer>
    <View style={styles.content}>
      <Heading>🚌 Travelmate</Heading>

      <BodyText>
        Safe, accessible and AI-powered travel.
      </BodyText>

      <View style={{ marginTop: SPACING.xl }}>
        <PrimaryButton
          title="Login"
          onPress={() => navigation.navigate("Login" as never)}
        />
      </View>
    </View>
  </ScreenContainer>
)};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})