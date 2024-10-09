import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  questionView: {
    backgroundColor: '#401500',
    padding: 12,
    marginTop: 16,
    borderRadius: 12,
    gap: 16,
  },
  questionText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: 400,
  },
  questionsScore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coinsView: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
  },
  smallCoin: {
    height: 16,
    width: 16,
    alignSelf: 'center',
  },
  coinsBonusText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: 500,
  },
  currQuestionInd: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: 'bold',
  },
  questionsCount: {
    color: '#6b4b3a',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: 500,
  },
  questionsInd: {
    flexDirection: 'row',
  },
});
