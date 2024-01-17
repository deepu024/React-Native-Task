/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './screens/Home';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack: any = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer
      theme={MyTheme}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarColor: "inherit",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Product Details" component={ProductDetails} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
