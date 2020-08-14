import React from 'react';
import {styles} from './style';

import MoviesList from './components/list';
import { getListMovies } from '../../../api';
import { SEARCH_PLACEHOLDER } from '../../../commons/strings';
import {TextInput, ActivityIndicator, View, Alert} from 'react-native';

const Movies = (props) => {
  const [movies, setMovies] = React.useState([]);
  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {    
  }, []);

  const onChangeTextInputSearch = value => {    
    searchMovie(value);
  };

  const searchMovie = async (value) => {
    setLoader(true);
    try {
      const data = await getListMovies(value);      
      if(data.Response == 'True'){
        setMovies(data.Search);
      }else if(data.Response == 'True' && data.Error != 'Too many results.'){
        Alert.alert("Error", data.Error);     
      }
    } catch (err) {
    } finally {
      setLoader(false);
    }
  }

  const navigateToMovieDetail = movie => {
    const {navigation} = props;    
    navigation.navigate('Detail', {movie});
  };

  return (
    <View styles={styles.container}>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder={SEARCH_PLACEHOLDER}
            onChangeText={onChangeTextInputSearch}
            autoCapitalize="none"
            autoCorrect={false}
          />
          

          {loader && <ActivityIndicator color={'red'} size="small" />}
        </View>

        <View style={{ height: 200}}>
            <MoviesList
              data={movies}
              onCardPress={navigateToMovieDetail}
            />
          </View>
    </View>
  );
};

export default Movies;
