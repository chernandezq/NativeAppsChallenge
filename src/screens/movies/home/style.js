import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(249, 249, 254)',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 20,
    backgroundColor: 'rgb(249, 249, 254)',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    height: 45,
  },
  input: {
    width: '100%',
    height: 45,    
    paddingHorizontal: 20,
  }
});
