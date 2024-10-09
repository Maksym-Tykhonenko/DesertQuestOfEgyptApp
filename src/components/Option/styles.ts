import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  option: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 60,
    gap: 16,
    padding: 4,
  },
  optionSelected: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  optionSelectedText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
    marginLeft: 55,
    alignSelf: 'center',
  },
  roundCancelOption: {
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  closeImg: {
    height: 32,
    width: 32,
    alignSelf: 'center',
  },
});
