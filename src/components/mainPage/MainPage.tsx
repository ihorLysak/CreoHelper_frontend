import styles from './mainPage.module.scss';
import { Sidebar } from '../sidebar/Sidebar';
import { ChannelBtn } from '../channelBtn/ChannelBtn';
import { MobileHeader } from '../mobileHeader/MobileHeader';
import { useAppSelector } from '../../app/hooks';
import { MobileSidebar } from '../mobileSidebar/MobileSidebar';

export function MainPage() {
    const isOpen = useAppSelector((state) => state.sidebar.isOpen);
    console.log('is open:', isOpen);
    return (
        <div className={styles.gridContainer}>
            <Sidebar />
            {isOpen && <MobileSidebar />}
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
