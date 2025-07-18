import React, { useState } from 'react';
import { Input, Button } from '@chakra-ui/react';
import { collection, addDoc }  from 'firebase/firestore';
import { db } from '../services/config/firebase';


const AddDoc = () => {

    const [formState, setFormState] = useState({
        title: '',
        description: '',
        price: 0.0,
        discountPercentage: 0.0,
        thumbnail: '',
        category: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const productsCollection = collection(db, "products");
        addDoc(productsCollection, formState)
            .then(() => {
                alert("Producto creado exitosamente");
                setFormState({
                    title: '',
                    description: '',
                    price: 0.0,
                    discountPercentage: 0.0,
                    thumbnail: '',
                    category: ''
                });
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                alert("Error al crear el producto");
            });
    };

    return (
        <form onSubmit={(e) => handleSubmit(e, formState)}>
            <Input type="text" placeholder="Titulo" onChange ={(e) => {
                setFormState({
                    ...formState,
                    title: e.target.value
                })
            }}/>
            <Input type="text" placeholder="Descripcion" onChange ={(e) => {
                setFormState({
                    ...formState,
                    description: e.target.value
                })
            }}/>
            <Input type="float" placeholder="Precio" onChange ={(e) => {
                setFormState({
                    ...formState,
                    price: e.target.value
                })
            }}/>
            <Input type="float" placeholder="Porcentaje de Descuento" onChange ={(e) => {
                setFormState({
                    ...formState,
                    discountPercentage: e.target.value
                })
            }}/>
            <Input type="text" placeholder="Thumbnail" onChange ={(e) => {
                setFormState({
                    ...formState,
                    thumbnail: e.target.value
                })
            }}/>
            <Input type="text" placeholder="Categoria" onChange ={(e) => {
                setFormState({
                    ...formState,
                    category: e.target.value
                })
            }}/>
            <Button type="submit">Crear</Button>
        </form>
    );
};

export default AddDoc;