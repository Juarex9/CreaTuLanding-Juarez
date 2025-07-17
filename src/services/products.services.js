import axios from 'axios';
import { BASE_URL } from './config/api';

export async function getAllProducts() {
    return await axios.get(BASE_URL);
}
export async function getProductById(id) {
    return await axios.get(`${BASE_URL}/${id}`);
}
export async function getProductsByCategory(categoryId) {
    return await axios.get(`${BASE_URL}/category/${categoryId}`);
}
export async function getAllCategories() {
    return await axios.get(`${BASE_URL}/categories`);
}