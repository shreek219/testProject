import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {isSimulator} from './src/Helper/UtilityManager';
import Routes from './src/Navigation/Routes';
import store from './src/Store';

class App extends Component {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    if (__DEV__) {
      isSimulator();
    }
    LogBox.ignoreLogs([
      "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    ]);
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
