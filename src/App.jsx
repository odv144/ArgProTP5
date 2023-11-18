import React from "react";
import Count from "./Components/Contador/Count";

import { Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import MyHeader from "./Components/MyHeader/MyHeader";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
   
      <Flex direction="column" textAlign="center" bg='#000' >
        
        <MyHeader></MyHeader>
        <Count></Count>
       <Footer></Footer>
        
      </Flex>
   
  );
}

export default App;
