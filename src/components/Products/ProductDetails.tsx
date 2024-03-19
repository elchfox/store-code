import { useState } from "react";
import { IProduct } from "../../types";
import styles from "./Product.module.scss";
import { TextField } from "@mui/material";

const ProductDetails: React.FC<IProduct> = (props) => {
  const [product, setProduct] = useState(props);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const timer = setTimeout(
      () =>
        setProduct({
          ...product,
          [event.target.name]: [event.target.value],
        }),
      250
    );
    clearTimeout(timer);
  };
  return (
    <div className={styles.product}>
      <img src={product.thumbnail} className={styles.img} alt={product.title} />
      <div className={styles.content}>
        <TextField
          label="title"
          name={"title"}
          variant="outlined"
          onChange={onChange}
          value={product.title}
        />
        <TextField
          label="title"
          name={"title"}
          variant="outlined"
          onChange={onChange}
          value={product.title}
        />
        <TextField
          label="description"
          name={"description"}
          variant="outlined"
          onChange={onChange}
          value={product.description}
        />
        <TextField
          label="price"
          name={"price"}
          variant="outlined"
          onChange={onChange}
          value={product.price}
        />

      </div>
      <div>
        <button className="btn">Save</button>
      </div>
    </div>
  );
};

export default ProductDetails;
