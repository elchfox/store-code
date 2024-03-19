import { Button, Typography } from "antd";
import { useDispatch } from "react-redux";
import { IProduct } from "../../types";
import Card from "../Card";
import styles from "./Product.module.scss";
import { productDeleteById } from "../../store/products/productsSlice";
const { Title, Paragraph } = Typography;

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
        <Title level={5}>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </div>
      <div>
        <Button type="primary" danger onClick={onDelete}>
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default Product;
