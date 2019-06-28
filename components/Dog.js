import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';



export default function(props) {
  const { image, title, onItemPress, width } = props;
  return (
    <TouchableOpacity onPress={onItemPress} style={[styles.wrapper, { width }]}>
      <Image
        source={{ uri: image }}
        style={{ width: 150, height: 150 }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    color: '#000'
  }
})