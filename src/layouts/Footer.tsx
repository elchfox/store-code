import styles from "./Footer.module.scss"; // Import CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>My Store</div>
      </div>
    </footer>
  );
};

export default Footer;
