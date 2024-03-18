import { useState } from "react";
import { IProduct } from "../../types";
import styles from "./Product.module.scss";

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
        <input
          onChange={onChange}
          name={"title"}
          defaultValue={product.title}
        />
        <input
          onChange={onChange}
          name={"description"}
          defaultValue={product.description}
        />
        <input
          onChange={onChange}
          name={"price"}
          defaultValue={product.price}
        />
      </div>
      <div>
        <button className="btn">Save</button>
      </div>
    </div>
  );
};

export default ProductDetails;
