import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import "@ui5/webcomponents/dist/DatePicker";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/MessageStrip";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    <ui5-button>Hello World</ui5-button>
      <ui5-datepicker></ui5-datepicker>
      <ui5-messagestrip>All the best!</ui5-messagestrip>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
