import { Pagination } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCurrentProduct,
  setModeType,
} from "../../store/products/productsSlice";
import { IProduct } from "../../types";
import Product from "./Product";

type IProductListProps = {
  data: IProduct[];
};
const ProductList: React.FC<IProductListProps> = ({ data }) => {
  const dispatch = useDispatch<any>();
  const [isSelected, setIsSelected] = useState<number | string>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [limitPerPage] = useState<number>(5);

  const onSelect = (product: IProduct) => {
    dispatch(setModeType("edit"));
    dispatch(setCurrentProduct(product));
    setIsSelected(product.id);
  };

  const sliceFrom = currentPage * limitPerPage;
  const sliceTo = sliceFrom + limitPerPage;
  const productsRender = data.slice(sliceFrom, sliceTo);
  const countPages = Math.ceil(data.length / limitPerPage);

  return (
    <div className="flex column gap-l center">
      <div className="data-list">
        {productsRender.map((product, index) => (
          <Product
            {...product}
            key={index}
            isActive={isSelected === product.id}
            onClick={() => onSelect(product)}
          />
        ))}
      </div>
      <div className="flex column center">
        {countPages > 1 && (
          <Pagination
            count={countPages}
            page={currentPage + 1}
            onChange={(_, page) => setCurrentPage(page - 1)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductList;
