import styles from './mainPage.module.scss';
import { Sidebar } from '../sidebar/Sidebar';
import { ChannelBtn } from '../channelBtn/ChannelBtn';
import { MobileHeader } from '../mobileHeader/MobileHeader';
import { useAppSelector } from '../../app/hooks';
import { MobileSidebar } from '../mobileSidebar/MobileSidebar';
import { channel } from '../../dummydata/channel';

export function MainPage() {
    const isOpen = useAppSelector((state) => state.sidebar.isOpen);
    console.log('is open:', isOpen);
    return (
        <div className={styles.gridContainer}>
            <Sidebar />
            {isOpen && <MobileSidebar />}
            <MobileHeader />
            <div className={styles.channelsGrid}>
                <ChannelBtn data={channel} />
                <ChannelBtn data={channel} />
                <ChannelBtn data={channel} />
                <ChannelBtn data={channel} />
                <ChannelBtn data={channel} />
                <ChannelBtn data={channel} />
            </div>
        </div>
    );
}
