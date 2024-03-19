import { Button, Typography } from "@mui/material";
import { IProduct } from "../../types";
import styles from "./Product.module.scss";
import Card from "../Card";
import { useDispatch } from "react-redux";
import { productDeleteById } from "../../store/features/products/productsSlice";
type IProductProps = {
  onClick?: () => void;
  isActive: boolean;
} & IProduct;
const Product: React.FC<IProductProps> = (props) => {
  const { onClick, title, thumbnail, description, isActive, ...rest } = props;
  const dispatch = useDispatch<any>();

  const onDelete = () => {
    dispatch(productDeleteById(rest.id || 0));
  };
  return (
    <Card
      className={`${styles.product} ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <img src={thumbnail} className={styles.img} alt={title} />
      <div className={styles.content}>
        <Typography variant={"h5"} component={"b"}>
          {title}
        </Typography>
        <Typography variant={"body1"}>{description}</Typography>
      </div>
      <div>
        <Button color={"error"} variant={"contained"} onClick={onDelete}>
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default Product;
