import React from 'react';
import { Button, Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ navigation }) {
  return (
    <MainLayout>
      <View>
        <Text>About Screen</Text>
        <Text>App Name: Todo List</Text>
        <Text>Paolo</Text>
        <Text>Date: {new Date().toLocaleDateString()}</Text>
        <Button
          title="Go Back to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </MainLayout>
  );
}

export default AboutScreen;



