import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

interface LetterCellProps extends TouchableOpacityProps {
  type?: 'letter' | 'empty';
  letter?: string;
  height: number;
  width: number;
}

export const LetterCell = ({
  letter,
  height,
  width,
  ...props
}: LetterCellProps) => {
  return (
    <>
      {letter ? (
        <TouchableOpacity onPress={props.onPress}>
          <LinearGradient
            style={[styles.cellContainer, {height, width}]}
            colors={['#EB1800', '#FD6D0A']}>
            <View style={styles.cellContainer}>
              <Text style={styles.cellTxt}>{letter}</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <View
          style={[
            styles.cellContainer,
            styles.cellContainerEmpty,
            {height, width},
          ]}>
          <Text style={styles.cellTxt}>{letter}</Text>
        </View>
      )}
    </>
  );
};
