import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>© 2024 My To Do App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerText: {
    fontSize: 16,
  }
});

export default Footer;
