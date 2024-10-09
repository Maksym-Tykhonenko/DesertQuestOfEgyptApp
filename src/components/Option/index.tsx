import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {closeIconDark} from '../../assets';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export type OptionType = {
  title: string;
  selected: boolean;
  symbol: string;
};

export const Option: FC<{
  option: OptionType;
  onPress: (option: OptionType) => void;
}> = ({option, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(option)}>
      {option.selected ? (
        <LinearGradient
          start={{x: 1.0, y: 1.0}}
          end={{x: 0.0, y: 0.5}}
          style={styles.optionSelected}
          colors={['#EB1800', '#FD6D0A']}>
          <Text style={styles.optionSelectedText}>{option.title}</Text>
          <View style={styles.roundCancelOption}>
            <Image
              source={closeIconDark}
              resizeMode="contain"
              style={styles.closeImg}
            />
          </View>
        </LinearGradient>
      ) : (
        <View style={styles.option}>
          <LinearGradient
            start={{x: 1.0, y: 1.0}}
            end={{x: 0.0, y: 0.0}}
            style={styles.roundOptionView}
            colors={['#EB1800', '#FD6D0A']}>
            <View>
              <Text style={styles.optionSymbol}>{option.symbol}</Text>
            </View>
          </LinearGradient>

          <Text style={styles.optionText}>{option.title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
