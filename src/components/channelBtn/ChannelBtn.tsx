import styles from './channelBtn.module.css';

interface ChannelBtnProps {
    data: {
        name: string;
        linksAmount: number;
        acceptedAmount: number;
        unsub: number;
    };
}

export function ChannelBtn({ data }: ChannelBtnProps) {
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
