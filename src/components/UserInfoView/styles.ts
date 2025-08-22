import { StyleSheet } from "react-native";
import { palette } from "../../styles/color-pallete";

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    color: palette.textLight,
  },
  textGroup: {
    width: "100%",
  },
  titleText: {
    textAlign: "center",
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 30,
    alignSelf: "center",
  },
});
