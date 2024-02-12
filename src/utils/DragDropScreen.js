import React, { useRef } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated, Dimensions, Image } from 'react-native';
import crocheImage from '../../assets/images/notes/croche.png';
import videImage from '../../assets/images/notes/vide.png';


const DragDropScreen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const dropZoneValues = useRef(null);




  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (e, gesture) => {
        if (isDropZone(gesture)) {
              // Get the current position of the drop zone
            const dropZoneX = dropZoneValues.current.x;
            const dropZoneY = dropZoneValues.current.y -383;

            // Calculate the drop position relative to the drop zone position
            const dropX = dropZoneX;
            const dropY = dropZoneY;

            // let dropX = gesture.moveX - dropZoneValues.current.x - 6*circleRadius;
          //let dropY = gesture.moveY - dropZoneValues.current.y - 4*circleRadius;
      
          Animated.spring(pan, {
            toValue: { x: dropX, y: dropY },
            useNativeDriver: false,
          }).start();
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      }
    })
  ).current;

  const isDropZone = (gesture) => {
    const dz = dropZoneValues.current;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        source={videImage}
        style={styles.videImage}
        resizeMode="contain"
        onLayout={event => (dropZoneValues.current = event.nativeEvent.layout)}
      />

      <Animated.Image
        {...panResponder.panHandlers}
        source={crocheImage}
        style={[
          pan.getLayout(),
          styles.crocheImage,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videImage: {
    height: 100,
    width: '100%',
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  crocheImage: {

    marginTop: 30,
  },
});

export default DragDropScreen;
