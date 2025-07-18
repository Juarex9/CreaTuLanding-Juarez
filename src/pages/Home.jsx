import ItemListContainer from '../components/ItemListContainer';
import { useProducts } from '../hooks/useProducts';

const Home = () => {
    const {products, loading, error} = useProducts();

    ///renderizado condicional:
    if (loading) return <>Loading...</>;
    if (error) return <>Error loading products</>;

    return <ItemListContainer products={products}/>;

};

export default Home;