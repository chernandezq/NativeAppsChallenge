import React from 'react';
import {styles} from './style';
import {View, TouchableOpacity, Text, Image} from 'react-native';

const MovieCard = ({onPress, item}) => {  
  const {Title, Poster, Type, Year, imdbID} = item;
  return (
    <TouchableOpacity
      style={[styles.container, {width: '100%', marginVertical: 5 * 2}]}
      activeOpacity={0.5}
      onPress={onPress}>
      
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.title}>{Title}</Text>
        </View>        
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
