import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#1a0901',
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 31,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontFamily: 'Inter',
    fontWeight: 'medium',
    marginTop: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  list: {
    marginTop: 32,
    marginHorizontal: 5,
  },
  row: {
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  item: {
    width: 80,
    height: 80,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
