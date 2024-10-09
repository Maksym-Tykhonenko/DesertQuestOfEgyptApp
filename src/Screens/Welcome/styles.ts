import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#eb1800',
  },
  welcomeText: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Inter',
    fontWeight: 500,
    textAlign: 'center',
    marginHorizontal: 55,
    marginTop: 48,
  },
  image: {
    width: '100%',
    height: '100%',
    marginTop: 42,
    marginHorizontal: 35,
    marginBottom: 24,
  },
  descriptionText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: 400,
    textAlign: 'center',
    marginTop: 24,
    marginHorizontal: 35,
    marginBottom: 34,
  },
});
