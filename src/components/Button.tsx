import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import { palette } from '../styles/color-pallete';

interface Props {
  onClick: (event: GestureResponderEvent) => void,
  label: string
}

export function Button({ onClick, label }: Props) {
  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: palette[600],
    backgroundColor: palette[400]
  },
  text: {
    color: palette.textDark,
    fontWeight: 600,
    fontSize: 15
  }
})