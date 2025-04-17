import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReactionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reactions Screen</Text>
      <Text>Track your reactions here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6ffed',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});