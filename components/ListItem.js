import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import { COLORS } from '../constants/color'

const ListItem = ({ item, onSelected }) => {

  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.listItem}>
      <Image
        style={styles.logo}
        source={{
          uri: `${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`,
        }}
      />
        <View style={styles.titleContainer}><Text style={styles.title}>{item.title}</Text></View>
        <View>
        
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    padding: 20,
    margin: 10,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.30,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: COLORS.redSecondMarvel,
  },
  titleContainer:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFComicScript',
    color: 'white',
  },
  logo: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 6,
    marginRight: 30,
  },
});

export default ListItem;