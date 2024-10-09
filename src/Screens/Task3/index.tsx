import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CONTINUE} from '../../const';
import {ButtonSolid, Header, Question} from '../../components';
import styles from './styles';
import {data2} from '../../models/Quiz3Data';
import LinearGradient from 'react-native-linear-gradient';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';

export const Task3 = ({navigation, route}: any) => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const {rightAnswerCount, score} = route.params;

  const [deserts, setDeserts] = useState(data2);
  const correctOrder = ['2', '3', '1', '5', '4'];

  const handleNext = () => {
    const userAnswer = deserts.map(item => item.optionsLetter[0]);
    const isCorrect =
      JSON.stringify(userAnswer) === JSON.stringify(correctOrder);

    navigation.navigate('Paths', {
      score: isCorrect ? score + 100 : score,
      rightAnswerCount: isCorrect ? rightAnswerCount + 1 : rightAnswerCount,
    });
  };

  const renderItem = ({item, drag}: RenderItemParams<any>) => {
    return (
      <TouchableOpacity onPressIn={drag} style={styles.option}>
        <LinearGradient
          start={{x: 1.0, y: 1.0}}
          end={{x: 0.0, y: 0.0}}
          style={styles.roundOptionView}
          colors={['#EB1800', '#FD6D0A']}>
          <Text style={styles.optionSymbol}>{item.optionsLetter}</Text>
        </LinearGradient>
        <Text style={styles.optionText}>{item.options}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView ref={scrollViewRef}>
        <View style={styles.mainContainer}>
          <Header />
          <Text style={styles.title}>{'Task 3'}</Text>

          <Question
            text={
              'To continue the quest, you need to arrange the largest deserts in the world in the correct order - from the largest to the smallest. Familiarize yourself with the names of deserts, their characteristics, and choose the right sequence.'
            }
            currQuestionIndex={3}
            questionsCount={4}
            bonus="+100"
          />

          <DraggableFlatList
            data={deserts}
            renderItem={renderItem}
            keyExtractor={(item, index) =>
              `draggable-item-${item.optionsLetter}-${index}`
            }
            onDragEnd={({data}) => setDeserts(data)}
            scrollEnabled={false}
            contentContainerStyle={styles.contentContainer}
          />

          <View style={styles.nextButtonWrap}>
            <ButtonSolid title={CONTINUE} onPress={handleNext} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
