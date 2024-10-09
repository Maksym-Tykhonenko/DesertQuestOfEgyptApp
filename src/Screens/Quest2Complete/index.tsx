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
import {bigCoinLogo, bigCrown, closeIcon} from '../../assets';
import styles from './styles';
import {ButtonSolid} from '../../components/ButtonSolid';
import {useCollectionStore} from '../../store/useCollectionStore';

interface Quest2Complete {
  title: string;
}

//TODO TYPES
export const Quest2Complete = ({navigation, route}: any) => {
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
    rightAnswerCount < 4
      ? YOUR_QUEST_RESULT + ' ' + rightAnswerCount + '/4'
      : YOUR_GIFT;

  useEffect(() => {
    if (rightAnswerCount === 4) {
      unlockItem('Crown');
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
              source={rightAnswerCount < 4 ? bigCoinLogo : bigCrown}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.descriptionText}>
            {rightAnswerCount < 4
              ? `You got ${score} points, do you want to complete the quest again?`
              : `You received ${score} points and a compass as a gift`}
          </Text>
          <ButtonSolid
            title={rightAnswerCount >= 4 ? CLAIM_BONUSES : TRY_AGAIN}
            onPress={() => {
              if (rightAnswerCount < 4) {
                navigation.navigate('Quest2');
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
