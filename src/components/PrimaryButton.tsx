import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";

import { COLORS } from "../constants/colors";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  loading?: boolean;
};

export default function PrimaryButton({
  title,
  onPress,
  loading = false,
}: PrimaryButtonProps) {
  return (
    <Pressable
      disabled={loading}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}
    >
        {loading ? (
  <ActivityIndicator color="white" />
) : (
      <Text style={styles.buttonText}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: SPACING.sm,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonPressed: {
    opacity: 0.8,
  },

  buttonText: {
    color: COLORS.background,
    fontSize: TYPOGRAPHY.body,
    fontWeight: "600",
  },
});