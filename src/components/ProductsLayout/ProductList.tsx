import { Flex, List } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentProduct } from "../../store/products/productsSlice";
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
    dispatch(setCurrentProduct(product));
    setIsSelected(product.id);
  };

  const sliceFrom = currentPage * limitPerPage;
  const sliceTo = sliceFrom + limitPerPage;
  const productsRender = data.slice(sliceFrom, sliceTo);

  return (
    <List
      itemLayout="horizontal"
      dataSource={productsRender}
      grid={{
        column: 1,
      }}
      style={{ gap: "1rem", height: "100%" }}
      pagination={{
        position: "bottom",
        align: "center",
        total: data.length,
        defaultPageSize: limitPerPage,
        defaultCurrent: 1,
        simple: true,
        onChange: (page) => setCurrentPage(page - 1),
        // disabled:true
      }}
      renderItem={(item, index) => (
        <div  key={index} style={{marginBottom:"1rem"}}>
        <Product
          {...item}
         
          isActive={isSelected === item.id}
          onClick={() => onSelect(item)}
        />
        </div>
      )}
    />
  );
};

export default ProductList;
