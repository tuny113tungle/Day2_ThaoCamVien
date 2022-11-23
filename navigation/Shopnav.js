import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DongVatBaoTon from '../screens/DongVatBaoTon';
import GauTruc from '../screens/GauTruc';
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from '../screens/LoginScreen';

import ProductScreen from "../screens/ProductScreen";
import SiginScreen from "../screens/SiginScreen";
import SigupScreen from "../screens/SigupScreen";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bảo tồn-Cứu hộ" component={DongVatBaoTon} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Gấu Trúc" component={GauTruc} />
      <Stack.Screen name="Sig In" component={SiginScreen} />
      <Stack.Screen name="Sig Up" component={SigupScreen} />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator>

      </StackNavigator>
    </NavigationContainer>
  )

};

export default MainNavigator;
