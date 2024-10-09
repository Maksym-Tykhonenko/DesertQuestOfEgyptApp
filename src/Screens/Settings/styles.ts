import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 320,
    height: 400,
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    color: 'white',
    fontWeight: '500',
    marginVertical: 40,
  },
  options: {
    marginHorizontal: 30,
    gap: 20,
  },
  option: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: '400',
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    paddingBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: -15,
    right: 5,
  },
  imageContainer: {
    borderRadius: 21,
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 18,
    width: 18,
  },

  notificationToggle: {
    width: 56,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
  },
  notificationKnob: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  knobGradient: {
    flex: 1,
    borderRadius: 16,
  },
});
