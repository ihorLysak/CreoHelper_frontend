import styles from './logo.module.css';

export function Logo() {
    return (
        <div className={styles.logo}>
            <span>CreoHelper</span>
            <div className={styles.circle}></div>
        </div>
    );
}
