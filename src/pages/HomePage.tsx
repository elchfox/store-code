import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsLayout from "../components/ProductsLayout";
import { RootState } from "../store";
import {
  fetchProducts
} from "../store/products/productsSlice";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { loading } = useSelector((state: RootState) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container">
        <ProductsLayout />
      </div>
    </div>
  );
};

export default HomePage;
