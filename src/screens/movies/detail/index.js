import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import { getDetailMovieById } from '../../../api';

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
      console.log(data)
    } catch (err) {
    } finally {
      setLoader(false);
    }
  }

  return (
    <View style={{flex: 1}}>
      {loader && <ActivityIndicator color={'red'} size="small" />}
      <Text>Detalle</Text>
    </View>
  );
};

export default MovieDetail;