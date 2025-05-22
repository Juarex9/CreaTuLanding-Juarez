import axios from 'axios';

/// OBTENER LOS PRODUCTOS DE LA BASE DE DATOS
export async function getAllProducts() {
    return await axios.get('https://dummyjson.com/products');
}

/// CREAR UN NUEVO PRODUCTO EN LA BASE DE DATOS
export async function createNewProduct(data) {
    return await axios.post('https://dummyjson.com/products/add', data);
}

/// ACTUALIZAR ALGO EXISTENTE EN LA BASE DE DATOS
export async function updateExistingProduct(id, data) {
    return await axios.put(`https://dummyjson.com/products/${id}`, data);
}

/// ELIMINAR UN PRODUCTO DE LA BASE DE DATOS
export async function deleteExistingProduct(id) {
    return await axios.delete(`https://dummyjson.com/products/${id}`);
}