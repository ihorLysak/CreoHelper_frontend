import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './components/authPage/AuthPage';
import { Channels } from './components/channels/Channels';
import { SidebarWrapper } from './components/sidebarWrapper/SidebarWrapper';

function App() {
    return (
        <Routes>
            <Route path="auth" element={<AuthPage />} />
            <Route path="dashboard" element={<SidebarWrapper />}>
                <Route path="channels" element={<Channels />} />
            </Route>
        </Routes>
    );
}

export default App;
