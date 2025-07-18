import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/config/firebase";


export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const productsCollection = collection(db, "products")

        getDocs(productsCollection).then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setProducts(data);
        })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return { products, loading, error };

};