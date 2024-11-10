import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Header;
