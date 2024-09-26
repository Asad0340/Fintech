// Card.js
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './cardStyles';  // Import styles from a separate file

export const Card = ({ result }) => {
  
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};
