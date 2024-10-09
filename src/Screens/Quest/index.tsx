import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import data from '../../models/QuizData';
import {ADVENTURE_QUEST, CONTINUE, NEXT} from '../../const';
import {ButtonSolid, Header, Question} from '../../components';
import {Cell} from '../../components/Cell';
import {LetterCell} from '../../components/LetterCell';
import styles from './styles';
import {useQuestStore} from '../../store/useQuestStore';

export const Quest = ({navigation}: any) => {
  const allQuestions = data;
  const scrollViewRef = useRef<ScrollView | null>(null);

  const {score, setScore, incrementRightAnswerCount, completeQuest} =
    useQuestStore();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerLetters, setAnswerLetters] = useState<string[]>([]);
  const [emptyCells, setEmptyCells] = useState(['', '', '', '', '']);
  const [selectLetterCount, setSelectLetterCount] = useState(0);
  const [rightAnswerCount, setRightAnswerCount] = useState(0);

  const [countScore, setCountScore] = useState(score);

  useEffect(() => {
    const resetQuest = () => {
      setCurrentQuestionIndex(0);
      setAnswerLetters([]);
      setEmptyCells(['', '', '', '', '']);
      setSelectLetterCount(0);
      setRightAnswerCount(0);
      setCountScore(score);
    };

    const unsubscribe = navigation.addListener('focus', resetQuest);

    return unsubscribe;
  }, [navigation, score]);

  const [lettersArray, setLettersArray] = useState<string[]>([]);

  useEffect(() => {
    setEmptyCells([...Array(5).fill('')]);
    setLettersArray(allQuestions[currentQuestionIndex]?.options);
  }, [allQuestions, currentQuestionIndex]);

  useEffect(() => {
    if (selectLetterCount === 5 && scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({animated: true});
    }
  }, [selectLetterCount]);

  const onLetterPress = (letter: string, index: any) => {
    if (selectLetterCount >= 5) {
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

    const newScore =
      userAnswer === correctAnswer ? countScore + 150 : countScore;
    const newRightAnswerCount =
      userAnswer === correctAnswer ? rightAnswerCount + 1 : rightAnswerCount;

    if (userAnswer === correctAnswer) {
      setCountScore(newScore);
      incrementRightAnswerCount();
      setRightAnswerCount(newRightAnswerCount);
    }

    if (currentQuestionIndex === allQuestions.length - 1) {
      setScore(newScore);
      completeQuest();

      const localScore = newRightAnswerCount * 150;

      navigation.navigate('questComplete', {
        score: localScore,
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
          <Text style={styles.title}>{ADVENTURE_QUEST}</Text>

          <Question
            text={allQuestions[currentQuestionIndex]?.question}
            currQuestionIndex={currentQuestionIndex + 1}
            questionsCount={allQuestions?.length}
            bonus="+150"
          />

          <Text style={styles.answerTitle}>Make an answer out of letters</Text>
          <View style={styles.answerView}>
            {emptyCells.map((el, index) => {
              if (el === '') {
                return (
                  <Cell key={index} height={56} width={56}>
                    <Text style={styles.cellTxt}>_</Text>
                  </Cell>
                );
              }
              return (
                <LetterCell letter={el} key={index} height={56} width={56} />
              );
            })}
          </View>

          <View style={styles.lettersView}>
            {lettersArray?.map((el, index) => {
              return (
                <LetterCell
                  height={56}
                  width={56}
                  key={index}
                  onPress={() => onLetterPress(el, index)}
                  letter={el.toString()}
                />
              );
            })}
          </View>
          <View style={styles.nextButtonWrap}>
            <ButtonSolid
              title={currentQuestionIndex < 4 ? NEXT : CONTINUE}
              onPress={handleNext}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
