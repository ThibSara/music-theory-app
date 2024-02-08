import { useEffect, useState } from 'react';
import { View, Pressable, Image } from 'react-native';
import { Audio } from 'expo-av';
import Logo from '../../assets/images/logo.png';
import LogoSmiling from '../../assets/images/logo_smiling.png';

const soundFileMap = {
  piano_login: require('../../assets/sounds/piano_login.wav'),
};

export default function SoundLogo({ soundKey = 'piano_login' }) {

  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false); // State to track whether sound is playing

  const playSound = async () => {
    setIsPlaying(true); // Set isPlaying to true when sound starts playing
    const { sound } = await Audio.Sound.createAsync(soundFileMap[soundKey]);
    setSound(sound);
    await sound.playAsync().then(() => {
        setTimeout(() => setIsPlaying(false), 3000); 
    });
  };

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

  return (
    <View>
      <Pressable onPress={playSound}>
        <Image source={isPlaying ? LogoSmiling : Logo} /> 
      </Pressable>
    </View>
  );
}
