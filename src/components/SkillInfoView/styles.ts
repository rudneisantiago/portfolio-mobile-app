import { StyleSheet } from "react-native";
import { palette } from "../../styles/color-pallete";

export const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  skillsContainer: {
    paddingTop: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 15,
  },
  skillInfo: {
    width: "50%",
  },
  text: {
    fontSize: 20,
    color: palette.textLight,
  },
});
