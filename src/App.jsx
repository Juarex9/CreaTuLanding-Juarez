import React from 'react';
import { ChakraProvider, Button } from '@chakra-ui/react';
import ItemListContainer from './components/ItemListContainer';
import MainLayout from './layouts/MainLayout';


const App = () => {

    return (
      <ChakraProvider>
        <MainLayout>
          <ItemListContainer greeting="Bienvenidos a la tienda!" />
        </MainLayout>
      </ChakraProvider>
    );
}

export default App;