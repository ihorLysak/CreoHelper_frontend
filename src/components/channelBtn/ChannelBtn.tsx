import styles from './channelBtn.module.css';

interface ChannelBtnProps {
    data: {
        name: string;
        linksAmount: number;
        requests: number;
        unsub: number;
    };
}

export function ChannelBtn({ data }: ChannelBtnProps) {
    const subsStyle = data.unsub >= 0 ? styles.surplus : styles.deficit;
    return (
        <div className={styles.channelBtn}>
            <div className={styles.avatar}></div>
            <span>{data.name}</span>
            <div className={styles.stats}>
                <span className={styles.linksAmount}>{data.linksAmount}</span>
                <span className={styles.requests}>{data.requests}</span>
                <span className={subsStyle}>{data.unsub}</span>
            </div>
        </div>
    );
}
