import { Text, StyleSheet } from "react-native";

import { TYPOGRAPHY } from "../constants/typography";
import { COLORS } from "../constants/colors";

type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return <Text style={styles.heading}>{children}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: TYPOGRAPHY.title,
    fontWeight: "700",
    color: COLORS.text,
  },
});