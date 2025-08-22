import { StyleSheet } from "react-native";
import { palette } from "../../styles/color-pallete";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: palette[900],
  },
});
