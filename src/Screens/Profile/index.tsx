import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {profile} from '../../assets';
import {ButtonSolid, Header} from '../../components';
import {SAVE} from '../../const';
import LinearGradient from 'react-native-linear-gradient';
import {useProfileStore} from '../../store/useProfileStore';
import {styles} from './styles';

export const ProfileScreen = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [localAvatarUri, setLocalAvatarUri] = useState<string | null>(null);

  const {profileName, avatarUri, setProfileName, setAvatarUri, loadProfile} =
    useProfileStore();

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  const selectImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        const newUri: string | null = response.assets[0].uri ?? null;
        setLocalAvatarUri(newUri);
      } else if (response.didCancel) {
        Alert.alert('Cancelled image selection');
      } else {
        Alert.alert('Error', 'Something went wrong');
      }
    });
  };

  const handleSave = () => {
    if (inputValue.trim() || localAvatarUri) {
      if (inputValue.trim()) {
        setProfileName(inputValue);
      }
      if (localAvatarUri) {
        setAvatarUri(localAvatarUri);
      }
      Alert.alert('Profile Updated');
      setInputValue('');
    } else {
      Alert.alert('Error', 'Please enter a valid profile name');
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Header />
          <View style={styles.content}>
            <Image
              source={
                localAvatarUri
                  ? {uri: localAvatarUri}
                  : avatarUri
                  ? {uri: avatarUri}
                  : profile
              }
              style={styles.avatar}
              resizeMode="cover"
            />
            <TouchableOpacity onPress={selectImage}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 1.0, y: 1.0}}
                style={styles.button}
                colors={['#fffa8a', '#ecc440']}>
                <Text style={styles.changeText}>Change Avatar</Text>
              </LinearGradient>
            </TouchableOpacity>

            {profileName && (
              <Text style={styles.usernameText}>{profileName}</Text>
            )}

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Change User Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter profile name"
                value={inputValue}
                onChangeText={setInputValue}
              />
            </View>
            <ButtonSolid title={SAVE} onPress={handleSave} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
