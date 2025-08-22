import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles as gStyles } from "../../styles/global";
import { styles } from "./styles";

type Proficiency = 1 | 2 | 3 | 4 | 5;
type ArraySkill = Array<[string, Proficiency]>;

export function SkillInfoView() {
  const webSkills: ArraySkill = [
    ["HTML5", 5],
    ["Javascript", 5],
    ["PHP", 4],
    ["CSS3", 4],
  ];

  const webFrameworks: ArraySkill = [
    ["VueJS", 5],
    ["React", 3],
    ["TailwindCSS", 4],
    ["Bootstrap", 5],
  ];

  const mobile: ArraySkill = [["React-Native", 3]];

  const skillInfo = (skill: string, proficiency: Proficiency) => (
    <View key={skill} style={styles.skillInfo}>
      <Text style={gStyles.h3}>{skill}</Text>
      <View style={styles.skillIcons}>
        {Array.from({ length: proficiency }, (_, i) => (
          <AntDesign name="star" style={styles.iconStyle} key={i} />
        ))}
      </View>
    </View>
  );

  const skillInfoGroup = (
    title: string,
    skills: Array<[string, Proficiency]>
  ) => (
    <View>
      <Text style={gStyles.h2}>{title}</Text>
      <View style={styles.skillsContainer}>
        {skills.map((skill) => skillInfo(skill[0], skill[1]))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={gStyles.h1}>Desenvolvimento Web</Text>
      {skillInfoGroup("Linguagens", webSkills)}
      {skillInfoGroup("Frameworks", webFrameworks)}
      <Text style={gStyles.h1}>Desenvolvimento Mobile</Text>
      {skillInfoGroup("Frameworks", mobile)}
    </View>
  );
}
