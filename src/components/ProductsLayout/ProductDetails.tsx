import { InputAdornment, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "./Product.module.scss";
import Card from "../Card";
import { productCreateAndUpdate } from "../../store/products/productsSlice";
import { Button, Flex, Input, Select, InputNumber } from "antd";
import { DollarOutlined } from "@ant-design/icons";

type ProductDetailsProps = {};

const ProductDetails: React.FC<ProductDetailsProps> = (props) => {
  const dispatch = useDispatch<any>();

  const { currentProduct, modeType } = useSelector(
    (state: RootState) => state.products
  );
  const [product, setProduct] = useState(currentProduct);

  useEffect(() => {
    setProduct(currentProduct);
    return () => {};
  }, [currentProduct.id]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [event.target.name]: [event.target.value],
    });
  };

  const onSubmit = () => {
    dispatch(productCreateAndUpdate(product));
  };
  return (
    <Card
      className={`${styles.product} flex column gap-m`}
      style={{ maxWidth: "20rem", width: "100%", minHeight: "20rem" }}
    >
      <Typography variant={"h6"} component={"b"}>
        Product Info
      </Typography>
      {modeType !== "none" && (
        <div className="content">
          <img
            src={product.thumbnail}
            className={styles.img}
            alt={product.title}
          />
          <Flex vertical gap={12}>
            <Input
              placeholder="Name"
              name="title"
              required
              maxLength={30}
              onChange={onChange}
              value={product.title}
            />

            <Input
              placeholder="Description"
              name="description"
              maxLength={200}
              onChange={onChange}
              value={product.description}
            />
            <InputNumber
              prefix="￥"
              placeholder="Price"
              type="number"
              name="price"
              required
              addonBefore={<DollarOutlined />}
              onChange={(value) => {
                setProduct({
                  ...product,
                  price: Number(value),
                });
              }}
              value={product.price}
            />
            <Input />
            <Button type={"primary"} onClick={onSubmit}>
              Save
            </Button>
          </Flex>
        </div>
      )}
    </Card>
  );
};

export default ProductDetails;
