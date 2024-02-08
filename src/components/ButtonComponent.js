import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import ThemeContext from '../styles/ThemeContext';
import { useContext } from 'react';


export default function ButtonComponent(props) {
  const { onPress, title = 'Se connecter' } = props;
const globalStyles = React.useContext(ThemeContext);

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={[globalStyles.text_semibold,{color : 'white'}]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: 'black',
  },

});

