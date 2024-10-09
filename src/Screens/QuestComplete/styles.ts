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
  titleText: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Inter',
    fontWeight: 500,
    textAlign: 'center',
    marginHorizontal: 55,
    marginTop: 88,
  },

  image: {
    width: 360,
    height: 360,
  },
  closeImage: {
    width: 32,
    height: 32,
  },
  closeView: {
    flex: 1,
    alignSelf: 'flex-end',
    right: 0,
    marginHorizontal: 24,
  },
  imageWrap: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 35,
    marginBottom: 24,
  },
  descriptionText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: 400,
    textAlign: 'center',
    marginHorizontal: 35,
    marginBottom: 46,
  },
});
