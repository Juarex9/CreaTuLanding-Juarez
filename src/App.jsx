import React from 'react';
import { ChakraProvider, Button } from '@chakra-ui/react';
import ItemListContainer from './components/ItemListContainer';
import MainLayout from './layouts/MainLayout';
import { createNewProduct } from './services/products.services';
import { updateExistingProduct } from './services/products.services';
import { deleteExistingProduct } from './services/products.services';


const App = () => {

  const addNewProduct = () => {
    const data = {
      title: "proyecto coder",
      description: "producto creado en clase",
      price: 100
    }

    createNewProduct(data).then((res) => { console.log(res) })
  }

  const updateProduct = () => {
    const data = {
      title: "proyecto coder",
      description: "producto creado en clase",
      price: 300
    }

    updateExistingProduct(1, data).then((res) => { console.log(res) })
  }

  const deleteProduct = () => {
    const data = {
      title: "proyecto coder",
      description: "producto creado en clase",
      price: 300
    }
  
    deleteExistingProduct(1, data).then((res) => { console.log(res) })
  }

    return (
      <ChakraProvider>
        <MainLayout>
          <Button onClick={addNewProduct}>Crear Producto</Button>
          <Button onClick={updateProduct}>Actualizar Producto</Button>
          <Button onClick={deleteProduct}>Eliminar Producto</Button>
          <ItemListContainer greeting="Bienvenidos a la tienda!" />
        </MainLayout>
      </ChakraProvider>
    );
}

export default App;