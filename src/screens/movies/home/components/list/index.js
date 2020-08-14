import React from 'react';
import {FlatList, View} from 'react-native';

import {styles} from './style';
import MovieCard from '../card';

const MoviesList = ({onCardPress, data}) => {  
  const keyExtractor = data => data.imdbID;

  const renderItem = ({item}) => {
    return <MovieCard item={item} onPress={() => onCardPress(item)} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatlist}
      keyboardShouldPersistTaps="handled"
    />
  );
};

export default MoviesList;
