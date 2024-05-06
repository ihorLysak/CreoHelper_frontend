import styles from './channels.module.css';
import { ChannelBtn } from '../channelBtn/ChannelBtn';
import { channel } from '../../dummydata/channel';

export function Channels() {
    return (
        <div className={styles.channelsGrid}>
            <ChannelBtn data={channel} />
            <ChannelBtn data={channel} />
            <ChannelBtn data={channel} />
            <ChannelBtn data={channel} />
            <ChannelBtn data={channel} />
            <ChannelBtn data={channel} />
        </div>
    );
}
