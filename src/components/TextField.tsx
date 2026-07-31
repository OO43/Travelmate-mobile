import { TextInput, StyleSheet } from "react-native";

import { COLORS } from "../constants/colors";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";

type TextFieldProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

export default function TextField({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: TextFieldProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={COLORS.textLight}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: SPACING.sm,

    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,

    fontSize: TYPOGRAPHY.body,
    color: COLORS.text,

    backgroundColor: COLORS.background,
  },
});