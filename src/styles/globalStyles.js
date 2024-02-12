import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';

// Import font files
import MontserratBold from '../../assets/fonts/Montserrat-Bold.ttf';
import MontserratRegular from '../../assets/fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from '../../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratMedium from '../../assets/fonts/Montserrat-Medium.ttf';
import MontserratExtraBold from '../../assets/fonts/Montserrat-ExtraBold.ttf';


// Register fonts
Font.loadAsync({
  'Montserrat-Bold': MontserratBold,
  'Montserrat-ExtraBold': MontserratExtraBold,
  'Montserrat-Medium': MontserratMedium,
  'Montserrat-SemiBold': MontserratSemiBold,
  'Montserrat-Regular': MontserratRegular,
});


const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#333',
  },
  text_semibold: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 30,
    color: '#333',
  },
});

export default globalStyles;
