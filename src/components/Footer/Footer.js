import styles from "./Footer.module.css";

function Footers() {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>Movie App</h2>
                <p className={styles.footer__author}>Dibuat oleh peTIK Jombang</p>
            </footer>
            </div>
    );
}

export default Footers;