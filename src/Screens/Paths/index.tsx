import React, {useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CONTINUE} from '../../const';
import {ButtonSolid, Header, Question} from '../../components';
import styles from './styles';
import {track, trackHidden} from '../../assets';
import {useQuestStore} from '../../store/useQuestStore';

export const PathsScreen = ({navigation, route}: any) => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const {rightAnswerCount, score: initialScore} = route.params;
  const [isImagePressed, setIsImagePressed] = useState(false);
  const {score, setScore} = useQuestStore();

  const handleImagePress = () => {
    setIsImagePressed(true);
  };

  const handleNext = () => {
    const nextRightAnswerCount = isImagePressed
      ? rightAnswerCount + 1
      : rightAnswerCount;
    const nextScore = isImagePressed ? score + 100 : score;
    const resultScore = nextScore + initialScore;
    setScore(resultScore);

    navigation.navigate('quest2Complete', {
      score: nextRightAnswerCount * 100,
      rightAnswerCount: nextRightAnswerCount,
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView ref={scrollViewRef}>
        <View style={styles.mainContainer}>
          <Header />
          <Text style={styles.title}>{'Task 4'}</Text>

          <Question
            text={
              'Here we are at the final stage! To get your treasure, you must walk the right path. There are several paths in front of you, but only one leads to the map. Be careful and choose the right route to get the treasure!'
            }
            currQuestionIndex={4}
            questionsCount={4}
            bonus="+100"
          />

          <View style={styles.imageContainer}>
            {isImagePressed ? (
              <Image source={track} style={styles.image} />
            ) : (
              <TouchableOpacity onPress={handleImagePress}>
                <Image source={trackHidden} style={styles.image} />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.nextButtonWrap}>
            <ButtonSolid title={CONTINUE} onPress={handleNext} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
