import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { IProduct } from "../../types";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import { Pagination } from "@mui/material";
import SearchAndSortBar from "../SearchAndSortBar";
import PaginationCustom from "../PaginationCustom";
import { productCreateAndUpdate, setCreateModeToggle } from "../../store/features/products/productsSlice";


const Products: React.FC = (props) => {
  const dispatch = useDispatch<any>();

  const [productSelected, setProductSelected] = useState<IProduct>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [limitPerPage] = useState<number>(5);
  const { products } = useSelector((state: RootState) => state.products);

  const onSelect = (product: IProduct) => {
    setProductSelected({ ...product });
  };

  const sliceFrom = currentPage * limitPerPage
  const sliceTo = (sliceFrom) + limitPerPage
  const productsRender = products.slice(sliceFrom, sliceTo);
  const countPages = Math.ceil(products.length / limitPerPage);
  
  const onCreate = () => {
    dispatch(setCreateModeToggle())
  }
  return (
    <div >
      <div>
        <SearchAndSortBar onCreate={onCreate}/>
        </div>
      <div className="flex row gap-l items-start">
        <div>
          <div className="products-list">
            {productsRender.map((product, index) => (
              <Product {...product} key={index} onClick={() => onSelect(product)} />
            ))}
          </div>
          <PaginationCustom count={countPages} onChange={(page)=> setCurrentPage(page - 1)} />
        </div>
        {productSelected && <ProductDetails {...productSelected} />}
      </div>
    </div>
  );
};

export default Products;