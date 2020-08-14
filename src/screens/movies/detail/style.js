import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(249, 249, 254)',
  },
  containerScroll: {
    flex:1, 
    marginLeft: 20, 
    marginRight: 20
  },
  thumbnail: {
    width: '100%',
    height: 220,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: 10,
  },
  itemColumn: {
    marginTop: 20, 
    alignItems: 'flex-start', 
    flexDirection: 'row'
  },
  titleColumn: {
    fontSize: 20, 
    fontWeight: '700'
  },
  infoMovie: {
    fontSize: 16
  },
  textColumn: {
    fontSize: 16, 
    marginTop: 2.5
  },
  description: {
    fontSize: 18
    }
});
