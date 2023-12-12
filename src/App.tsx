import {SafeAreaView, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {styles} from './Styles/main';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
import Snackbar from 'react-native-snackbar';
export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
      {/* <FontAwesomeIcon size={22} icon={faCopy} /> */}
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
}
