import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IProduct } from "../../types";
import Product from "./Product";
import ProductDetails from "./ProductDetails";


const Products: React.FC = (props) => {
  const [productSelected, setProductSelected] = useState<IProduct>();
  const {products} = useSelector((state: RootState) => state.products);


  const onSelect = (product: IProduct) => {
    setProductSelected({ ...product });
  };


  const productsRender = products.slice(0,5)
  return (
    <div className="products-layout">
      <div className="products-list">
        {productsRender.map((product, index) => (
          <Product {...product} key={index} onClick={() => onSelect(product)} />
        ))}
      </div>
      {productSelected && <ProductDetails {...productSelected} />}
    </div>
  );
};

export default Products;
