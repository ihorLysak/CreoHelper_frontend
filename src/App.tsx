import { Route, Routes } from 'react-router-dom';
import { Auth, Channels, Channel } from '~/pages/pages';
import { SidebarWrapper } from '~/libs/components/components';
import { AppPath } from '~/libs/enums/enums';

function App() {
    return (
        <Routes>
            <Route path={AppPath.AUTH} element={<Auth />} />
            <Route path={AppPath.MAIN} element={<SidebarWrapper />}>
                <Route path={AppPath.CHANNELS} element={<Channels />} />
                <Route path={AppPath.CHANNEL} element={<Channel />} />
            </Route>
        </Routes>
    );
}

export default App;
