import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import Time from "../Pages/Time/time";
import Home from "../Home";
import Map from "../Pages/Maps/map";
const Tab = createBottomTabNavigator();

export default function Maintab() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ffff",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#72bb79"
      }}
    >



      <Tab.Screen name="Time" 
      component={Time} 
      options={{
        tabBarIcon: ({focused, size, color}) => {
        if(focused){
            return <Ionicons name= 'alarm'  size={size} color={color}/>
        }
        return <Ionicons name='alarm' size={size} color={color}/>
        }
      }} 
     />

   
<Tab.Screen name="Home"
       component={Home}
       options={{
        tabBarIcon: ({focused, size, color}) => {
        if(focused){
            return <Ionicons name= 'ios-home'  size={size} color={color}/>
        }
        return <Ionicons name='ios-home-outline' size={size} color={color}/>
        }
      }} />


      <Tab.Screen name="Map" 
      component={Map} 
      options={{
        tabBarIcon:({focused, size,color}) => {
            if(focused){
                return <Ionicons name= 'ios-location'  size={size} color={color}/>
            }
            return <Ionicons name= 'ios-location-outline'  size={size} color={color}/>
        }
      }}/>

  

    </Tab.Navigator>
  );
}
