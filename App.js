import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNav from "./Navigations/StackNav";
import CartScreen from "./screens/CartScreen";
import Search from "./componenst/Search";
import SearchTest from "./screens/SearchTest";


 export default function App() {
   return (
     <NativeBaseProvider>
       <NavigationContainer>
         <StackNav/>
       </NavigationContainer>
     </NativeBaseProvider>
   );
 }