import { Box, Text, View } from "native-base";
import React from "react";
import HomeProduct from "../componenst/HomeProducts";
import Colors from "../data/Colors";
import Search from "./SearchScreen";
import SearchTest from "./SearchTest";


function HomeScreen() {
   return (
    <Box flex={1} bg={Colors.subGreen}>
      <SearchTest/> 
    </Box>
    );
}
export default HomeScreen;
