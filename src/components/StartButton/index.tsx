import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {START_GAME} from '../../const';
import styles from './styles';

interface StartButtonProps extends TouchableOpacityProps {
  source: ImageSourcePropType;
}

export const StartButton = ({source, ...props}: StartButtonProps) => {
  return (
    <ImageBackground source={source} style={styles.image}>
      <View style={styles.container}>
        <TouchableOpacity onPress={props.onPress}>
          <View style={styles.startButton}>
            <Text style={styles.startText}>{START_GAME}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
