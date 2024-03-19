import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "./Product.module.scss";
import Card from "../Card";
import { productCreateAndUpdate } from "../../store/features/products/productsSlice";

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
      style={{ maxWidth: "16rem", width: "100%", minHeight: "20rem" }}
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
          <div className={"flex column gap-m"}>
            <TextField
              label="Title"
              name={"title"}
              required
              helperText={"Incorrect entry."}
              variant="filled"
              onChange={onChange}
              value={product.title}
            />
            <TextField
              label="Description"
              name={"description"}
              multiline
              maxRows={5}
              variant="filled"
              onChange={onChange}
              value={product.description}
            />
            <TextField
              label="Price"
              name={"price"}
              variant="filled"
              
              onChange={onChange}
              value={product.price}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
            <Button color={"error"} variant={"contained"} onClick={onSubmit}>
              Save
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ProductDetails;
