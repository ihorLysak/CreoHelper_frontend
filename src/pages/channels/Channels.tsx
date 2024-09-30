import styles from './channels.module.css';
import { ChannelBtn } from './libs/components/components';
import { channelMinimalProps } from '~/dummydata/dummydata';

export function Channels() {
    return (
        <div className={styles.channelsGrid}>
            <ChannelBtn data={channelMinimalProps} />
            <ChannelBtn data={channelMinimalProps} />
            <ChannelBtn data={channelMinimalProps} />
            <ChannelBtn data={channelMinimalProps} />
            <ChannelBtn data={channelMinimalProps} />
            <ChannelBtn data={channelMinimalProps} />
        </div>
    );
}
