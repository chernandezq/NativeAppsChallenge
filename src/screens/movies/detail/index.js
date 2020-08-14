import React from 'react';
import { styles } from './style';
import { getDetailMovieById } from '../../../api';
import {View, Text, ActivityIndicator, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const MovieDetail = props => {
  const {movie} = props.route.params;

  const [movieDetail, setMovieDetail] = React.useState({});
  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {   
    searchMovieById(movie.imdbID) 
  }, []);

  const searchMovieById = async(value) => {
    setLoader(true);
    try {
      const data = await getDetailMovieById(value);    
      setMovieDetail(data)        
    } catch (err) {
    } finally {
      setLoader(false);
    }
  }

  return (
    <View style={styles.container}>
      {loader && <ActivityIndicator color={'red'} size="small" />}

        <Image
          style={styles.thumbnail}
          source={{
            uri: movieDetail.Poster,
          }}
        />

        <ScrollView>
          <View style={styles.containerScroll}>

            <View style={{marginTop: 20, alignItems: 'center'}}>
              <Text style={styles.titleColumn}>{movieDetail.Title}</Text>
              <Text style={styles.infoMovie}>{movieDetail.Type}</Text>
              <Text style={styles.infoMovie}>{movieDetail.Released}</Text>
            </View>  

            <View style={styles.itemColumn}>
              <Text style={styles.description}>{movieDetail.Plot}</Text>
            </View> 

            <View style={styles.itemColumn}>
              <Text style={styles.titleColumn}>Genre: </Text>
              <Text style={styles.textColumn}>{movieDetail.Genre}</Text>
            </View>  

            <View style={styles.itemColumn}>
              <Text style={styles.titleColumn}>Language: </Text>
              <Text style={styles.textColumn}>{movieDetail.Language}</Text>
            </View>  

            <View style={styles.itemColumn}>
              <Text style={styles.titleColumn}>Actors: </Text>
              <Text style={styles.textColumn}>{movieDetail.Actors}</Text>
            </View>  

            <View style={styles.itemColumn}>
              <Text style={styles.titleColumn}>imdb Rating: </Text>
              <Text style={styles.textColumn}>{movieDetail.imdbRating}</Text>
            </View>  

            <View style={styles.itemColumn}>
              <Text style={styles.titleColumn}>imdb Votes: </Text>
              <Text style={styles.textColumn}>{movieDetail.imdbVotes}</Text>
            </View>  

            <View style={styles.itemColumn}>
              <Text style={styles.titleColumn}>Runtime: </Text>
              <Text style={styles.textColumn}>{movieDetail.Runtime}</Text>
            </View>  

            <View style={{height: 50}}/>  
          </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetail;