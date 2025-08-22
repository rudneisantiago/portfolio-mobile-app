import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

import { styles as gStyles } from "../../styles/global";
import { styles } from "./styles";
import { UserData } from "../../models/User";
import { fetchGetUserData } from "./actions";

export function UserInfoView() {
  const [userData, setUserData] = useState<UserData>({
    avatar_url: "",
    bio: "",
    company: "",
    location: "",
    name: "",
    repos_url: "",
    url: "",
  });

  useEffect(() => {
    fetchGetUserData(setUserData);
  }, []);

  const renderTextGroup = (label: string, value: string) => (
    <View style={styles.textGroup}>
      <Text style={[styles.text, gStyles.textBold]}>{label}:</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image src={userData.avatar_url} style={styles.avatar} />
      <Text style={[styles.text, gStyles.h1, styles.titleText]}>
        Prazer, {userData.name}
      </Text>
      <Text style={[styles.text, gStyles.subtitle]}>{userData.bio}</Text>
      {renderTextGroup("Localização", userData.location)}
      {renderTextGroup("Trabalhando atualmente:", userData.company)}
    </View>
  );
}
