import { StyleSheet } from "react-native";
import { palette } from "./color-pallete";

export const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: 700,
    color: palette.textLight,
  },
  h2: {
    fontSize: 25,
    fontWeight: 600,
    color: palette[300],
    fontStyle: "italic",
  },
  h3: {
    fontSize: 20,
    color: palette[100],
  },
  textBold: {
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 600,
    fontStyle: "italic",
  },
});
