import { Image, StyleSheet, Text, View } from 'react-native';
import { palette } from '../../assets/color-pallete';
import { styles as gStyles } from '../../styles/global'
import { useEffect, useState } from 'react';
import { UserData } from '../../models/User';

export function Home() {
  const [userData, setUserData] = useState<UserData>({
    avatar_url: '',
    bio: '',
    company: '',
    location: '',
    name: '',
    repos_url: '',
    url: ''
  })

  const fetchUserData = async () => {
    const response = await fetch('https://api.github.com/users/rudneisantiago')
    const data = await response.json()
    setUserData(data)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <View style={styles.container}>
      <Image src={userData.avatar_url} style={styles.avatar} />
      <Text style={[styles.text, gStyles.h1, styles.titleText]}>
        Olá, eu sou o {userData.name}
      </Text>
      <Text style={[styles.text, gStyles.subtitle]}>
        {userData.bio}
      </Text>
      <View style={styles.textGroup}>
        <Text style={[styles.text, gStyles.textBold]}>Localização:</Text>
        <Text style={styles.text}>
          {userData.location}
        </Text>
      </View>
      <View style={styles.textGroup}>
        <Text style={[styles.text, gStyles.textBold]}>Trabalhando atualmente:</Text>
        <Text style={styles.text}>
          {userData.company}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette[900]
  },
  text: {
    fontSize: 15,
    color: palette.textLight,
  },
  textGroup: {
    width: '100%',
  },
  titleText: {
    textAlign: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 30
  }
})