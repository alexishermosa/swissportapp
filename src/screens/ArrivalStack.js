/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import ArrivalScreen from './ArrivalScreen';
import AddArrivalScreen from './AddArrivalScreen';


const ArrivalStack = createNativeStackNavigator();

export default function ArrivalStackScreen(){
  return (
    <ArrivalStack.Navigator>
      <ArrivalStack.Screen name="Arrival" component={ArrivalScreen} options={{headerShown: true}} />
      <ArrivalStack.Screen name="AddArrival" component={AddArrivalScreen} />
    </ArrivalStack.Navigator>
  );
}
