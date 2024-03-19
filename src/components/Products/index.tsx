import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  setCurrentProduct,
  setModeType,
} from "../../store/features/products/productsSlice";
import { IProduct } from "../../types";
import PaginationCustom from "../PaginationCustom";
import SearchAndSortBar from "../SearchAndSortBar";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

const Products: React.FC = (props) => {
  const dispatch = useDispatch<any>();

  const [isSelected, setIsSelected] = useState<number | string>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [limitPerPage] = useState<number>(5);
  const { products } = useSelector((state: RootState) => state.products);

  const onSelect = (product: IProduct) => {
    dispatch(setModeType("edit"));
    dispatch(setCurrentProduct(product));
    setIsSelected(product.id);
  };

  const sliceFrom = currentPage * limitPerPage;
  const sliceTo = sliceFrom + limitPerPage;
  const productsRender = products.slice(sliceFrom, sliceTo);
  const countPages = Math.ceil(products.length / limitPerPage);

  const onCreate = () => {
    dispatch(setModeType("create"));
  };
  return (
    <div>
      <div>
        <SearchAndSortBar onCreate={onCreate} />
      </div>
      <div className="flex row gap-l items-start">
        <div>
          <div className="products-list">
            {productsRender.map((product, index) => (
              <Product
                {...product}
                key={index}
                isActive={isSelected === product.id}
                onClick={() => onSelect(product)}
              />
            ))}
          </div>
          <PaginationCustom
            count={countPages}
            onChange={(page) => setCurrentPage(page - 1)}
          />
        </div>
        <ProductDetails />
      </div>
    </div>
  );
};

export default Products;
