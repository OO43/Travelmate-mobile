import { Text, StyleSheet } from "react-native";

import { TYPOGRAPHY } from "../constants/typography";
import { COLORS } from "../constants/colors";

type BodyTextProps = {
  children: React.ReactNode;
};

export default function BodyText({ children }: BodyTextProps) {
  return <Text style={styles.body}>{children}</Text>;
}

const styles = StyleSheet.create({
  body: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textLight,
    textAlign: "center",
  },
});