// DraggableButton.js
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Draggable from 'react-native-draggable';
import SoundButton from './SoundButton';

export default function DraggableButton({ specialZoneRef}) {
  const [isInSpecialZone, setIsInSpecialZone] = useState(false);
  const [position, setPosition] = useState({ x: 300, y: 100 });

  const handleRelease = (event, gestureState) => {
    event.persist();

    if (specialZoneRef.current) {
      specialZoneRef.current.measureInWindow((x, y, width, height) => {
        const releaseX = event.nativeEvent.pageX;
        const releaseY = event.nativeEvent.pageY;

        const overSpecialZone =
          releaseX > x && releaseX < x + width && releaseY > y && releaseY < y + height;

        setIsInSpecialZone(overSpecialZone);

        if (!overSpecialZone) {
          // If not dropped on the special zone, reset the position immediately
          setPosition({ x: 300, y: 100 });
        }
      });
    }
  };

  const handleSoundPlay = () => {
    // Play sound logic here
    console.log('Playing sound');
  };

  const handleSoundStop = () => {
    // Stop sound logic here
    console.log('Stopping sound');
  };

  useEffect(() => {
    if (isInSpecialZone) {
      handleSoundPlay();
    } else {
      handleSoundStop();
    }
  }, [isInSpecialZone]);

  return (
    <View style={styles.container}>
      <View
        ref={specialZoneRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '10%',
          height: '20%',
          backgroundColor: 'lightblue',
        }}
      />

      <Draggable
        x={position.x}
        y={position.y}
        onRelease={(event, gestureState) => handleRelease(event, gestureState)}
        onDrag={(event, gestureState) => setPosition({ x: gestureState.moveX, y: gestureState.moveY })}
      >
        <SoundButton soundKey="do" isInSpecialZone={isInSpecialZone} />
      </Draggable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
