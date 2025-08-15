import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Abilities, Home } from "../screens";
import { palette } from "../assets/color-pallete";

const { Navigator, Screen } = createDrawerNavigator()

export function DrawerRoutes() {
  return (
    <Navigator initialRouteName="HomeScreen">
      <Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: 'Bem vindo',
          headerStyle: {
            backgroundColor: palette[800],
          },
          headerTitleStyle: {
            color: palette.textLight
          },
          headerTintColor: palette.textLight,
          drawerIcon: ({ size }) => {
            return <MaterialCommunityIcons name="home" size={size} />
          },
        }} />
      <Screen
        name="AbilitiesScreen"
        component={Abilities}
        options={{
          title: 'Minhas Skills',
          drawerIcon: ({ size }) => {
            return <MaterialCommunityIcons name="adjust" size={size} />
          },
        }} />
    </Navigator>
  )
}