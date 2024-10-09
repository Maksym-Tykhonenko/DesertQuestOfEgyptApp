import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  YOUR_QUEST_RESULT,
  YOUR_GIFT,
  TRY_AGAIN,
  CLAIM_BONUSES,
} from '../../const';
import {backpack, bigCoinLogo, closeIcon} from '../../assets';
import styles from './styles';
import {ButtonSolid} from '../../components/ButtonSolid';
import {useCollectionStore} from '../../store/useCollectionStore';

interface QuizComplete {
  title: string;
}

//TODO TYPES
export const QuizComplete = ({navigation, route}: any) => {
  const {rightAnswerCount, score} = route.params;
  const unlockItem = useCollectionStore(state => state.unlockItem);

  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          backgroundColor: '#302019',
          paddingTop: 20,
          paddingBottom: 32,
          borderTopWidth: 0,
        },
        tabBarVisible: true,
      });
    };
  }, [navigation]);

  const titleText =
    rightAnswerCount < 10
      ? YOUR_QUEST_RESULT + ' ' + rightAnswerCount + '/10'
      : YOUR_GIFT;

  useEffect(() => {
    if (rightAnswerCount === 10) {
      unlockItem('Bag');
    }
  }, [rightAnswerCount, unlockItem]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <TouchableOpacity
            style={styles.closeView}
            onPress={() => navigation.push('HomeScreen')}>
            <Image source={closeIcon} style={styles.closeImage} />
          </TouchableOpacity>
          <Text style={styles.titleText}>{titleText}</Text>
          <View style={styles.imageWrap}>
            <Image
              style={styles.image}
              source={rightAnswerCount < 10 ? bigCoinLogo : backpack}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.descriptionText}>
            {rightAnswerCount < 10
              ? `You got ${score} points, do you want to complete the quest again?`
              : `You received ${score} points and a bag as a gift`}
          </Text>
          <ButtonSolid
            title={rightAnswerCount >= 10 ? CLAIM_BONUSES : TRY_AGAIN}
            onPress={() => {
              if (rightAnswerCount < 10) {
                navigation.navigate('Quiz');
              } else {
                navigation.navigate('box');
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
