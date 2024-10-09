import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';
import {coinIcon} from '../../assets';

interface QuestionProps {
  text: string;
  currQuestionIndex?: number;
  questionsCount?: number;
  bonus: string;
}

export const Question = ({
  text,
  questionsCount,
  currQuestionIndex,
  bonus,
}: QuestionProps) => {
  return (
    <View style={styles.questionView}>
      <Text style={styles.questionText}>{text}</Text>
      <View style={styles.questionsScore}>
        <View style={styles.coinsView}>
          <Image
            style={styles.smallCoin}
            source={coinIcon}
            resizeMode="contain"
          />
          <Text style={styles.coinsBonusText}>{bonus}</Text>
        </View>
        <View style={styles.questionsInd}>
          <Text style={styles.currQuestionInd}>{currQuestionIndex}</Text>
          <Text style={styles.questionsCount}>{'/' + questionsCount}</Text>
        </View>
      </View>
    </View>
  );
};
