import { useState } from "react";
import { IProduct } from "../../types";
import styles from "./Product.module.scss";
import { TextField } from "@mui/material";
import Card from "../Card";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
let timer: any;

const ProductDetails: React.FC<IProduct> = (props) => {
  const { createMode } = useSelector((state: RootState) => state.products);

  const [product, setProduct] = useState(props);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timer);
    timer = setTimeout(
      () =>
        setProduct({
          ...product,
          [event.target.name]: [event.target.value],
        }),
      250
    );
  };

  return (
    <Card className={`${styles.product} flex column gap-m`} style={{ maxWidth: "16rem", width: "100%" }}>
      <img src={product.thumbnail} className={styles.img} alt={product.title} />
      <div className={"flex column gap-m"}>
        <TextField
          label="title"
          name={"title"}
          variant="filled"
          onChange={onChange}
          value={product.title}
        />
        <TextField
          label="description"
          name={"description"}
          variant="filled"
          onChange={onChange}
          value={product.description}
        />
        <TextField
          label="price"
          name={"price"}
          variant="filled"
          onChange={onChange}
          value={product.price}
        />

      </div>
      <div>
        <button className="btn">Save</button>
      </div>
    </Card>
  );
};

export default ProductDetails;
