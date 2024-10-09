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

  answerTitle: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: 500,
    marginTop: 42,
  },
  answerView: {
    height: 64,
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
  lettersView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 34,
    gap: 15,
  },
  nextButtonWrap: {
    marginTop: 50,
    alignItems: 'center',
  },
  cellTxt: {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
