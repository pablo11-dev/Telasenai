import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native'; // Fix import statement for 'Itens' component
import Itens from './screens/itens'; // Fix import statement for 'Itens' component

export default function App() {
  return (
    <View>
      <Itens/>
      <StatusBar style="auto" />
    </View>
  );
}