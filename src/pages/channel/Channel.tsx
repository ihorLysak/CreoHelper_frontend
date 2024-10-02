import { ChannelBtn } from '~/libs/components/components';
import { ApplicationsLineChart } from './libs/components/components';
import { channelMinimalProps } from '~/dummydata/dummydata';

import styles from './styles.module.css';

function Channel() {
    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <ChannelBtn data={channelMinimalProps} />
                <ApplicationsLineChart />
            </header>
        </section>
    );
}

export { Channel };
