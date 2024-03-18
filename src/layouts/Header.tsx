import styles from "./Header.module.scss";
const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.title}>My Store</div>
    </header>
  );
};

export default Header;
