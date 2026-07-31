import { StyleSheet, Text, View } from "react-native";

import ScreenContainer from "../components/ScreenContainer";
import Heading from "../components/Heading";
import BodyText from "../components/BodyText";
import PrimaryButton from "../components/PrimaryButton";

import { COLORS } from "../constants/colors";
import { SPACING } from "../constants/spacing";

export default function LandingScreen() {
  function handleConnect() {
    console.log("Connect pressed");
  }

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <Heading>Travelmate</Heading>

        <BodyText>
          Your accessible journey companion.
        </BodyText>
      </View>

      <View style={styles.locationCard}>
        <Text style={styles.cardTitle}>Current location</Text>
        <Text style={styles.cardText}>
          Location not available yet
        </Text>
      </View>

      <View style={styles.connectionCard}>
        <Text style={styles.cardTitle}>
          Travelmate connection
        </Text>

        <Text style={styles.connectionStatus}>
          Not connected
        </Text>

        <View style={styles.buttonSpacing}>
          <PrimaryButton
            title="Connect"
            onPress={handleConnect}
          />
        </View>
      </View>

      <View style={styles.quickActions}>
        <View style={styles.actionCard}>
          <Text style={styles.actionTitle}>
            Journey Planner
          </Text>
        </View>

        <View style={styles.actionCard}>
          <Text style={styles.actionTitle}>
            Notifications
          </Text>
        </View>

        <View style={styles.actionCard}>
          <Text style={styles.actionTitle}>
            Profile
          </Text>
        </View>

        <View style={styles.actionCard}>
          <Text style={styles.actionTitle}>
            Contact Us
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: SPACING.lg,
  },

  locationCard: {
    marginTop: SPACING.xl,
    padding: SPACING.md,
    borderRadius: SPACING.md,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },

  connectionCard: {
    marginTop: SPACING.md,
    padding: SPACING.md,
    borderRadius: SPACING.md,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.text,
  },

  cardText: {
    marginTop: SPACING.sm,
    fontSize: 16,
    color: COLORS.textLight,
  },

  connectionStatus: {
    marginTop: SPACING.sm,
    fontSize: 16,
    color: COLORS.textLight,
  },

  buttonSpacing: {
    marginTop: SPACING.md,
  },

  quickActions: {
    marginTop: SPACING.xl,
    gap: SPACING.md,
  },

  actionCard: {
    padding: SPACING.lg,
    borderRadius: SPACING.md,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },

  actionTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: COLORS.text,
  },
});