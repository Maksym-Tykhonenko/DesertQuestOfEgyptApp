import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 31,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#1a0901',
  },
  content: {
    marginTop: 40,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ECECEC',
  },
  button: {
    marginTop: 20,
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 18,
    height: 30,
    justifyContent: 'center',
  },
  changeText: {
    fontSize: 16,
    color: '#000000',
  },
  usernameText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  inputContainer: {
    width: '100%',
    gap: 8,
    marginVertical: 40,
  },
  label: {
    color: '#FFF',
  },
  input: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
});
