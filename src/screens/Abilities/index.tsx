import React from "react";
import { Text, View } from "react-native";

import { styles as gStyles } from "../../styles/global";

import { styles } from "./styles";
import { SkillInfoView } from "../../components";

export function Abilities() {
  return (
    <View style={styles.container}>
      <SkillInfoView />
    </View>
  );
}
