import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IProduct } from "../../types";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
const Products: React.FC = (props) => {
  const [productSelected, setProductSelected] = useState<IProduct>();

  const mystore = useSelector((state: RootState) => state.mystore);

  const onSelect = (product: IProduct) => {
    setProductSelected({ ...product });
  };
  return (
    <div className="products-layout">
      <div className="products-list">
        {mystore.data.map((product, index) => (
          <Product {...product} key={index} onClick={() => onSelect(product)} />
        ))}
      </div>
      {productSelected && <ProductDetails {...productSelected} />}
    </div>
  );
};

export default Products;
