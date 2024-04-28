import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './components/authPage/AuthPage';

function App() {
    return (
        <Routes>
            <Route path="auth" element={<AuthPage />} />
        </Routes>
    );
}

export default App;
