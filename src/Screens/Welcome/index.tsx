import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {WELCOME, WELCOME_CONTENT, NEXT} from '../../const';
import {welcomeLogo} from '../../assets';
import styles from './styles';
//import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ButtonSolid} from '../../components/ButtonSolid';

//type WelcomeProps = NativeStackScreenProps<LoginStackParamList, 'Welcome'>;

//TODO TYPES
export const Welcome = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text style={styles.welcomeText}>{WELCOME}</Text>
          <Image
            style={styles.image}
            source={welcomeLogo}
            resizeMode="contain"
          />
          <Text style={styles.descriptionText}>{WELCOME_CONTENT}</Text>
          <ButtonSolid
            title={NEXT}
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
