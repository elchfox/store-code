import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Products from "../components/Products";
import useFetch from "../hooks/useFetch";
import { setProducts } from "../store/features/mystore/mystoreSlice";

const Home: React.FC = () => {
  const { data, isLoading } = useFetch("/products");

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(setProducts(data));
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container">
        <Products/>
      </div>
    </div>
  );
};

export default Home;
