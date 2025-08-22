import { View } from "react-native";

import { Button, UserInfoView } from "../../components";
import { styles } from "./styles";

export function Home({ navigation }: any) {
  const navigateToSkills = () => {
    navigation.navigate("AbilitiesScreen");
  };

  return (
    <View style={styles.container}>
      <UserInfoView />
      <Button onClick={navigateToSkills} label="Skills" />
    </View>
  );
}
