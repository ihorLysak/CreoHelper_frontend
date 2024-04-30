import styles from './mainPage.module.scss';
import { Sidebar } from '../sidebar/Sidebar';
import { ChannelBtn } from '../channelBtn/ChannelBtn';

export function MainPage() {
    return (
        <div className={styles.gridContainer}>
            <Sidebar />
            <div className={styles.channelsGrid}>
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
                <ChannelBtn />
            </div>
        </div>
    );
}
