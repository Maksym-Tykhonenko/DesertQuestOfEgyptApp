import React, {useRef, useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Animated,
} from 'react-native';
import {closeButton, modal, soundOff, soundOn} from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

export const SettingsModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isVibrationOn, setIsVibrationOn] = useState(false);
  const [isNotificationOn, setIsNotificationOn] = useState(false);
  const knobPosition = useRef(new Animated.Value(0)).current;

  const toggleNotification = () => {
    setIsNotificationOn(!isNotificationOn);

    Animated.timing(knobPosition, {
      toValue: isNotificationOn ? 0 : 26,
      useNativeDriver: false,
    }).start();
  };

  const toggleSound = () => setIsSoundOn(!isSoundOn);
  const toggleVibration = () => setIsVibrationOn(!isVibrationOn);

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <ImageBackground
          source={modal}
          resizeMode="contain"
          style={styles.modalContent}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}
            activeOpacity={0.5}>
            <Image source={closeButton} />
          </TouchableOpacity>
          <Text style={styles.title}>Settings</Text>
          <View style={styles.options}>
            <View style={[styles.optionContainer, styles.border]}>
              <Text style={styles.option}>Sound</Text>
              <TouchableOpacity onPress={toggleSound}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.imageContainer}
                  colors={['#FFFA8A', '#ECC440']}>
                  <Image
                    style={styles.image}
                    source={isSoundOn ? soundOn : soundOff}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={[styles.optionContainer, styles.border]}>
              <Text style={styles.option}>Vibration</Text>
              <TouchableOpacity onPress={toggleVibration}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.imageContainer}
                  colors={['#FFFA8A', '#ECC440']}>
                  <Image
                    style={styles.image}
                    source={isVibrationOn ? soundOn : soundOff}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.optionContainer}>
              <Text style={styles.option}>Notification</Text>
              <TouchableOpacity
                onPress={toggleNotification}
                style={styles.notificationToggle}>
                <Animated.View
                  style={[
                    styles.notificationKnob,
                    {
                      transform: [{translateX: knobPosition}],
                    },
                  ]}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={['#FFFA8A', '#ECC440']}
                    style={styles.knobGradient}
                  />
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Modal>
  );
};
