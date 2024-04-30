import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './components/authPage/AuthPage';
import { MainPage } from './components/mainPage/MainPage';

function App() {
    return (
        <Routes>
            <Route path="auth" element={<AuthPage />} />
            <Route path="main" element={<MainPage />} />
        </Routes>
    );
}

export default App;
