import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import ProductsLayout from "../components/ProductsLayout";
import { RootState } from "../store";
import { fetchProducts } from "../store/products/productsSlice";
import Loading from "../components/Loading";

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { loading } = useSelector((state: RootState) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }
  return (
    <div className="container">
      <ProductsLayout />
    </div>
  );
};

export default ProductsPage;
