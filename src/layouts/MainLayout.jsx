import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children, title = "Task Management App"  }) => {
  return (
    <View style={styles.container}>
    <Header title={title} />
      {children}
    <Footer /> 
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default MainLayout;