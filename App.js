import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Entypo} from '@expo/vector-icons'; 


import HomePage from './screens/HomePage';

export default function App() {
  return (
    // <DatePicker icon={'calendar'} />
    // <SampleForm />
    <HomePage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  datePicker: {
    width: '100%',
    alignSelf: 'center',
    marginVertical: 10,
  },
});


