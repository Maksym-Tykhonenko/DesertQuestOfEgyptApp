import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  icon: {
    height: 82.16,
    width: 82.16,
  },
  scoreView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scoreContainer: {
    justifyContent: 'center',
  },
  score: {
    flexDirection: 'row',
    backgroundColor: '#27170f',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 30,

    alignItems: 'center',
  },
  scoreText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: 400,
    textAlign: 'center',
  },
  coinImage: {
    height: 30.81,
    width: 30.81,
  },
});
