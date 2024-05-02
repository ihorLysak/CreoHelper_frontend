import styles from './channelBtn.module.css';

export function ChannelBtn() {
    return (
        <div className={styles.channelBtn}>
            <div className={styles.avatar}></div>
            <span>Афіша Києва</span>
            <div className={styles.stats}>
                <span>5</span>
                <span>+100</span>
                <span>-25</span>
            </div>
        </div>
    );
}
