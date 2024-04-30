import styles from './mainPage.module.scss';
import { Sidebar } from '../sidebar/Sidebar';
import { ChannelBtn } from '../channelBtn/ChannelBtn';
import { MobileHeader } from '../mobileHeader/MobileHeader';

export function MainPage() {
    return (
        <div className={styles.gridContainer}>
            <Sidebar />
            <MobileHeader />
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
