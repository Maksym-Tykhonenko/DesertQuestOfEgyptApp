import React, {useCallback, useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import data from '../../models/Quiz2Data';
import {closeIcon, coinStoneIcon} from '../../assets';
import styles from './styles';
import {ButtonSolid, Option, OptionType} from '../../components';
import {CONTINUE, NEXT} from '../../const';
import {useQuestStore} from '../../store/useQuestStore';

export const Quiz = ({navigation}: any) => {
  const allQuestions = data;

  const {score, setScore} = useQuestStore();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [optionsArray, setOptionsArray] = useState<OptionType[]>(
    allQuestions[currentQuestionIndex]?.options?.map(
      (el: string, idx: number) => ({
        title: el,
        selected: false,
        symbol: allQuestions[currentQuestionIndex]?.optionsLetter[idx],
      }),
    ),
  );
  const [rightAnswer, setRightAnswer] = useState<string>(
    allQuestions[currentQuestionIndex]?.correctOption,
  );

  const [selectedOption, setSelectedOption] = useState('');
  const [newScore, setNewScoreState] = useState(score);
  const [rightAnswerCount, setRightAnswerCount] = useState(0);
  const [timer, setTimer] = useState<number>(60);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  useEffect(() => {
    const resetQuiz = () => {
      setCurrentQuestionIndex(0);
      setOptionsArray(
        allQuestions[0]?.options?.map((el: string, idx: number) => ({
          title: el,
          selected: false,
          symbol: allQuestions[0]?.optionsLetter[idx],
        })) || [],
      );
      setRightAnswer(allQuestions[0]?.correctOption || '');
      setSelectedOption('');
      setNewScoreState(score);
      setRightAnswerCount(0);
      setTimer(60);
      setIsTimerActive(true);
    };

    const unsubscribe = navigation.addListener('focus', resetQuiz);

    return unsubscribe;
  }, [allQuestions, navigation, score]);

  useEffect(() => {
    setRightAnswer(allQuestions[currentQuestionIndex]?.correctOption);
    setOptionsArray(
      allQuestions[currentQuestionIndex]?.options?.map(
        (el: string, idx: number) => ({
          title: el,
          selected: false,
          symbol: allQuestions[currentQuestionIndex]?.optionsLetter[idx],
        }),
      ),
    );
    setTimer(60);
    setIsTimerActive(true);

    return () => {
      setIsTimerActive(false);
    };
  }, [allQuestions, currentQuestionIndex]);

  const handleNext = useCallback(() => {
    if (selectedOption === rightAnswer) {
      setNewScoreState(prevScore => prevScore + 150);
      setRightAnswerCount(prevCount => prevCount + 1);
    }

    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setScore(newScore + (selectedOption === rightAnswer ? 150 : 0));

      const localScore = rightAnswerCount * 150;

      navigation.navigate('quizComplete', {
        score: localScore,
        rightAnswerCount,
      });
    }
    setSelectedOption('');
    setTimer(60);
    setIsTimerActive(true);
  }, [
    allQuestions.length,
    currentQuestionIndex,
    navigation,
    newScore,
    rightAnswer,
    rightAnswerCount,
    selectedOption,
    setScore,
  ]);

  useEffect(() => {
    if (isTimerActive && timer > 0) {
      const countdown = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      handleNext();
    }
  }, [handleNext, isTimerActive, timer]);

  const onOptionPress = useCallback(
    (option: OptionType) => {
      const updatedOptions = optionsArray?.map(opt => {
        if (opt.title === option.title) {
          return {...opt, selected: true};
        }

        return {...opt, selected: false};
      });
      setOptionsArray(updatedOptions);

      setSelectedOption(option?.title);
    },
    [optionsArray],
  );

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds,
    ).padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.headerView}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={coinStoneIcon}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.image} resizeMode="contain" source={closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.timerView}>
          <Text style={styles.quizText}>Quiz</Text>
          <Text style={styles.quizText}>{formatTime(timer)} min</Text>
        </View>
        <View style={styles.lineStyle} />
        <Text style={styles.questionText}>
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
        <View style={styles.optionsView}>
          {optionsArray?.map(el => (
            <Option key={el.title} onPress={onOptionPress} option={el} />
          ))}
        </View>

        <View style={styles.nextButtonWrap}>
          <ButtonSolid
            title={currentQuestionIndex < 4 ? NEXT : CONTINUE}
            onPress={handleNext}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
