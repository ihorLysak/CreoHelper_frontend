import styles from './sidebar.module.css';
import { Logo } from '../logo/Logo';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <FontAwesomeIcon
                    size="2xl"
                    icon={faXmark}
                    className={styles.closeSidebarBtn}
                />
                <Logo />
            </div>
        </div>
    );
}
