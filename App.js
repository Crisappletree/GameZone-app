import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from './screens/home'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Navigator from './routes/drawer'

let customFonts = {
  'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Navigator />
      );
    } else {
      return <AppLoading />;
    }
  }
}