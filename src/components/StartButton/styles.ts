import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  startButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
    alignSelf: 'flex-start',
    alignContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 24,
  },
  startText: {
    color: 'white',
    flexShrink: 1,
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: 400,
  },
  image: {
    width: 164,
    height: 164,
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    bottom: 12,
  },
});
