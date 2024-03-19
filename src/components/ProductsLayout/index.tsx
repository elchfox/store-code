import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setModeType } from "../../store/products/productsSlice";
import { IProduct } from "../../types";
import { sortBy } from "../../utils/helper";
import ToolBar from "../SearchAndSortBar";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";

const ProductsLayout: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { products } = useSelector((state: RootState) => state.products);
  const [renderProducts, setRenderProducts] = useState<IProduct[]>(products);

  const onCreate = () => {
    dispatch(setModeType("create"));
  };
  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    let filtred = renderProducts;
    if (value.length > 0) {
      filtred = renderProducts.filter(
        (item) =>
          item.title.includes(value) || item.description?.includes(value)
      );
    } else {
      filtred = products;
    }
    setRenderProducts(filtred);
  };

  const onSort = (value: string) => {
    setRenderProducts(
      renderProducts.sort((a: IProduct, b: IProduct) =>
        a.price < b.price ? 1 : -1
      )
    );
  };

  return (
    <div className="flex column gap-l">
      <ToolBar onCreate={onCreate} onSearch={onSearch} onSort={onSort} />
      <div className="flex row gap-l items-start">
        <ProductList data={renderProducts} />
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductsLayout;
