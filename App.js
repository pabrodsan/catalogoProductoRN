// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './src/components/ProductList';
import ProductInformation from './src/components/ProductInformation';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={ProductList} 
          options={{ title: 'Products' }}
        />
        <Stack.Screen 
          name="information" 
          component={ProductInformation} 

        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;