import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Onboarding({ onComplete }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <Text style={styles.description}>
        This app helps you explore amazing features. Stay connected and discover new areas!
      </Text>
      
      <Button title="Get Started" onPress={onComplete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
