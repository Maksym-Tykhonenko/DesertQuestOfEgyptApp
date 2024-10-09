import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import data from '../../models/Quiz3Data';
import {CONTINUE} from '../../const';
import {ButtonSolid, Header, Question} from '../../components';
import {Cell} from '../../components/Cell';
import {LetterCell} from '../../components/LetterCell';
import {useQuestStore} from '../../store/useQuestStore';
import styles from './styles';

export const Quest2 = ({navigation}: any) => {
  const allQuestions = data;
  const scrollViewRef = useRef<ScrollView | null>(null);

  const {incrementRightAnswerCount, completeQuest} = useQuestStore();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerLetters, setAnswerLetters] = useState<string[]>([]);
  const [emptyCells, setEmptyCells] = useState<string[]>([]);
  const [selectLetterCount, setSelectLetterCount] = useState(0);
  const [rightAnswerCount, setRightAnswerCount] = useState(0);

  useEffect(() => {
    const resetQuest = () => {
      setCurrentQuestionIndex(0);
      setAnswerLetters([]);
      setEmptyCells(Array(allQuestions[0].correctAnswer.length).fill(''));
      setSelectLetterCount(0);
      setRightAnswerCount(0);
    };

    const unsubscribe = navigation.addListener('focus', resetQuest);

    return unsubscribe;
  }, [allQuestions, navigation]);

  const [lettersArray, setLettersArray] = useState<string[]>([]);

  useEffect(() => {
    setEmptyCells(
      Array(allQuestions[currentQuestionIndex].correctAnswer.length).fill(''),
    );
    setLettersArray(allQuestions[currentQuestionIndex]?.options);
  }, [allQuestions, currentQuestionIndex]);

  useEffect(() => {
    if (selectLetterCount === emptyCells.length && scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({animated: true});
    }
  }, [emptyCells.length, selectLetterCount]);

  const onLetterPress = (letter: string, index: any) => {
    if (selectLetterCount >= emptyCells.length) {
      return;
    }

    const lettersArrModified = lettersArray.map((el, ind) => {
      if (ind === index) {
        return '';
      }
      return el;
    });
    setLettersArray(lettersArrModified);
    emptyCells.splice(selectLetterCount, 1, letter);
    setAnswerLetters([...answerLetters, letter]);
    setSelectLetterCount(selectLetterCount + 1);

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({y: 0, animated: true});
    }
  };

  const handleNext = () => {
    const userAnswer = answerLetters.join('').toLowerCase();
    let correctAnswer = allQuestions[currentQuestionIndex].correctAnswer;

    const newRightAnswerCount =
      userAnswer === correctAnswer ? rightAnswerCount + 1 : rightAnswerCount;

    if (userAnswer === correctAnswer) {
      incrementRightAnswerCount();
      setRightAnswerCount(newRightAnswerCount);
    }

    if (currentQuestionIndex === allQuestions.length - 1) {
      completeQuest();

      const newScore = newRightAnswerCount * 100;

      navigation.navigate('Task3', {
        score: newScore,
        rightAnswerCount: newRightAnswerCount,
      });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswerLetters([]);
      setEmptyCells([...Array(5).fill('')]);
      setSelectLetterCount(0);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView ref={scrollViewRef}>
        <View style={styles.mainContainer}>
          <Header />
          <Text style={styles.title}>{`Task ${currentQuestionIndex + 1}`}</Text>

          <Question
            text={allQuestions[currentQuestionIndex]?.question}
            currQuestionIndex={currentQuestionIndex + 1}
            questionsCount={4}
            bonus="+100"
          />

          <Text style={styles.answerTitle}>Make an answer out of letters</Text>
          <View style={styles.answerView}>
            {emptyCells.map((el, index) => {
              if (el === '') {
                return (
                  <Cell key={index} height={48} width={48}>
                    <Text style={styles.cellTxt}>_</Text>
                  </Cell>
                );
              }
              return (
                <LetterCell letter={el} key={index} height={48} width={48} />
              );
            })}
          </View>

          <View style={styles.lettersView}>
            {lettersArray?.map((el, index) => {
              return (
                <LetterCell
                  key={index}
                  onPress={() => onLetterPress(el, index)}
                  letter={el.toString()}
                  height={48}
                  width={48}
                />
              );
            })}
          </View>
          <View style={styles.nextButtonWrap}>
            <ButtonSolid title={CONTINUE} onPress={handleNext} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
