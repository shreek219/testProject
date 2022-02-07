import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import ButtonsScreen from '../Screens/ButtonsScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import Home from '../Screens/Home';

const Stack = createStackNavigator();

class Routes extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ButtonsScreen" component={ButtonsScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    );
  }
}

export default Routes;
