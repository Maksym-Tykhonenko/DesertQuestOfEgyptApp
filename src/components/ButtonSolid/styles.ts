import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    alignContent: 'center',
    gap: 6,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  arrow: {width: 24, height: 24},

  nextQuestionText: {
    color: 'rgba(26, 9, 1, 1)',
    fontSize: 16,
    fontFamily: 'Inclusive Sans',
    fontWeight: 400,
    textAlign: 'center',
  },
  textView: {
    justifyContent: 'center',
  },
});
