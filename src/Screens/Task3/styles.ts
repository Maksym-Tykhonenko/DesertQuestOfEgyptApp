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
  optionsView: {
    marginTop: 42,
    gap: 16,
  },
  option: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 60,
    gap: 16,
    padding: 4,
  },
  optionSymbol: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  roundOptionView: {
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: 'center',
  },
  optionText: {
    color: '#1A0901',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
    textAlign: 'center',
    alignSelf: 'center',
  },
  contentContainer: {
    marginTop: 20,
    gap: 10,
  },
});
