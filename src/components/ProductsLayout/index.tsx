import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setModeType } from "../../store/products/productsSlice";
import { IProduct } from "../../types";
import ToolBar from "../SearchAndSortBar";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
import { Flex } from "antd";
import { sortData } from "../../utils/helper";

const ProductsLayout: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { products } = useSelector((state: RootState) => state.products);
  const [renderProducts, setRenderProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setRenderProducts(products);
  }, [products]);

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
    setRenderProducts(sortData(renderProducts, value));
  };

  return (
    <Flex gap="middle" vertical>
      <ToolBar onCreate={onCreate} onSearch={onSearch} onSort={onSort} />
      <Flex gap={"large"} style={{ alignItems: "flex-start" }}>
        <Flex flex={1} align="center" justify="center">
          <ProductList data={renderProducts} />
        </Flex>
        <ProductDetails />
      </Flex>
    </Flex>
  );
};

export default ProductsLayout;
