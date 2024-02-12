import { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';


const soundFileMap = {
  fa: require('../../assets/sounds/fa.wav'),
  do: require('../../assets/sounds/do.wav'),
  re: require('../../assets/sounds/re.wav'),
  mi: require('../../assets/sounds/mi.wav'),
  sol: require('../../assets/sounds/sol.wav'),
  la: require('../../assets/sounds/la.wav'),
  si: require('../../assets/sounds/si.wav'),
  do_octave: require('../../assets/sounds/do_octave.wav'),
};



export default function SoundButton({soundKey, isInSpecialZone}) {
  const [sound, setSound] = useState();
  const isInSpecialZoneRef = useRef(isInSpecialZone);

  useEffect(() => {
    // Update ref when isInSpecialZone prop changes
    isInSpecialZoneRef.current = isInSpecialZone;
  }, [isInSpecialZone]);


  const playSound = async () => {
    // Check isInSpecialZone using ref for the latest value
    if (isInSpecialZoneRef.current) {
      console.log('Playing Sound');
      const { sound } = await Audio.Sound.createAsync(soundFileMap[soundKey]);
      setSound(sound);
      await sound.playAsync();
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          //console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);


  return (
    <View>
    <Button title={soundKey} onPress={playSound} />
  </View>
  );
};
