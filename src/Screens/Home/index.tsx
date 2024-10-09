import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';

import {ButtonSolid, Header} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {
  ANCIENT_EGYPT_QUEST,
  ANCIENT_EGYPT_QUEST_DESC,
  OPEN_PROFILE,
  VIEW_COLLECTION,
} from '../../const';
import {
  game1Logo,
  sunLogo,
  game2Logo,
  game3Logo,
  game4Logo,
} from '../../assets';
import styles from './styles';
import {StartButton} from '../../components/StartButton';

export const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Header />
          <LinearGradient
            style={styles.profile}
            colors={['#EB1800', '#FD6D0A']}>
            <ButtonSolid
              title={OPEN_PROFILE}
              onPress={() => navigation.navigate('Profile')}
            />
          </LinearGradient>
          <LinearGradient style={styles.card} colors={['#EB1800', '#FD6D0A']}>
            <View style={styles.descriptionView}>
              <Text style={styles.questTitle}>{ANCIENT_EGYPT_QUEST}</Text>
              <Text style={styles.questDescription}>
                {ANCIENT_EGYPT_QUEST_DESC}
              </Text>
              <ButtonSolid
                title={VIEW_COLLECTION}
                onPress={() => navigation.navigate('Collection')}
              />
            </View>
            <Image
              style={styles.sunIcon}
              source={sunLogo}
              resizeMode="contain"
            />
          </LinearGradient>
          <ScrollView horizontal={true} contentContainerStyle={styles.row}>
            <StartButton
              source={game1Logo}
              onPress={() => navigation.navigate('Quest')}
            />
            <StartButton
              source={game2Logo}
              onPress={() => navigation.navigate('Quiz')}
            />
          </ScrollView>
          <ScrollView horizontal={true} contentContainerStyle={styles.row}>
            <StartButton
              source={game3Logo}
              onPress={() => navigation.navigate('Quest2')}
            />
            <StartButton
              source={game4Logo}
              onPress={() => navigation.navigate('CollectItems')}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
