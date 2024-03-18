import styles from "./Footer.module.scss"; // Import CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>Your Logo</div>
        <nav className={styles.menu}>
          <div className={styles.item}>Home</div>
          <div className={styles.item}>About</div>
          <div className={styles.item}>Contact</div>
        </nav>
        <div className={styles.social}>
          <div className={styles.icon}>Facebook</div>
          <div className={styles.icon}>Twitter</div>
          <div className={styles.icon}>Instagram</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
