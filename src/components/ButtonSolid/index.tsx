import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {arrowIcon} from '../../assets';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonSolidProps extends TouchableOpacityProps {
  title: string;
}

export const ButtonSolid = ({title, ...props}: ButtonSolidProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 1.0, y: 1.0}}
        style={styles.button}
        colors={['#fffa8a', '#ecc440']}>
        <View style={styles.textView}>
          <Text style={styles.nextQuestionText}>{title}</Text>
        </View>
        <Image style={styles.arrow} source={arrowIcon} />
      </LinearGradient>
    </TouchableOpacity>
  );
};
