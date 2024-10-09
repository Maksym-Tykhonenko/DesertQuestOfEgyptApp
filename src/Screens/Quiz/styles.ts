import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 24,

    backgroundColor: '#1a0901',
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#411500',
  },
  headerView: {
    backgroundColor: '#411500',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginVertical: 24,
  },
  image: {
    height: 32,
    width: 32,
  },
  timerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  quizText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: 400,
  },
  lineStyle: {
    borderWidth: 0.7,
    borderColor: '#898989',
    marginTop: 16,
    marginBottom: 24,
  },
  questionText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: 500,
  },
  optionsView: {
    marginTop: 42,
    gap: 16,
  },
  nextButtonWrap: {
    flex: 1,
    alignSelf: 'center',
    position: 'absolute',
    marginBottom: 32,
    bottom: 0,
  },
});
