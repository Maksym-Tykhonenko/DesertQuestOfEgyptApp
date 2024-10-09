import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 31,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#1a0901',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    marginTop: 24,
  },
  nextButtonWrap: {
    marginVertical: 20,
    alignItems: 'center',
  },
  imageContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  image: {
    height: 350,
    resizeMode: 'contain',
  },
});
