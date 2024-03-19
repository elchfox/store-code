import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../components/Products";
import { RootState } from "../store";
import {
  fetchProducts
} from "../store/features/products/productsSlice";

const Home: React.FC = () => {
  const dispatch = useDispatch<any>();
  const {loading,products,error} = useSelector((state: RootState) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container">
        <Products />
      </div>
    </div>
  );
};

export default Home;
