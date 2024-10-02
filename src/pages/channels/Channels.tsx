import styles from './channels.module.css';
import { ChannelBtn } from '~/libs/components/components';
import { channelMinimalProps } from '~/dummydata/dummydata';

export function Channels() {
    return (
        <section className={styles.channelsGrid}>
            <ChannelBtn data={channelMinimalProps} />
            <ChannelBtn data={channelMinimalProps} />
            <ChannelBtn data={channelMinimalProps} />
            <ChannelBtn data={channelMinimalProps} />
            <ChannelBtn data={channelMinimalProps} />
            <ChannelBtn data={channelMinimalProps} />
        </section>
    );
}
