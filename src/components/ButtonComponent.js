import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import ThemeContext from '../styles/ThemeContext';
import { useContext } from 'react'
import { LinearGradient } from 'expo-linear-gradient';


export default function ButtonComponent(props) {
  const { onPress, title } = props;
const globalStyles = React.useContext(ThemeContext);

  return (
    <LinearGradient
                    colors={['#F73893', '#FFB906']}
                    start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.button}
                        >
    <Pressable onPress={onPress}>
      <Text style={[globalStyles.text_semibold,{color : 'white'}]}>{title}</Text>
    </Pressable>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },

});

