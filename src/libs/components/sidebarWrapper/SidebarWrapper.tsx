import styles from './sidebarWrapper.module.css';
import { Sidebar } from '../sidebar/Sidebar';
import { MobileHeader } from '../mobileHeader/MobileHeader';
import { useAppSelector } from '~/app/hooks';
import { MobileSidebar } from '../mobileSidebar/MobileSidebar';
import { Outlet } from 'react-router-dom';

export function SidebarWrapper() {
    const isOpen = useAppSelector((state) => state.sidebar.isOpen);
    console.log('is open:', isOpen);
    return (
        <section className={styles.gridContainer}>
            <Sidebar />
            {isOpen && <MobileSidebar />}
            <MobileHeader />
            <Outlet />
        </section>
    );
}
