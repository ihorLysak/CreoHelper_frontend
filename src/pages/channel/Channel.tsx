import { ChannelBtn } from '~/libs/components/components';
import { channelMinimalProps } from '~/dummydata/dummydata';
function Channel() {
    return (
        <section>
            <ChannelBtn data={channelMinimalProps} />
        </section>
    );
}

export { Channel };
