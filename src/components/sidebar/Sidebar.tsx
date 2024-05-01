import styles from './sidebar.module.css';
import { Logo } from '../logo/Logo';

export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <Logo />
            </div>
        </div>
    );
}
