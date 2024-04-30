import { Logo } from '../logo/Logo';
import styles from './mobileHeader.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function MobileHeader() {
    return (
        <div className={styles.mobileHeader}>
            <button className={styles.sidebarBtn}>
                <FontAwesomeIcon size="2xl" icon={faBars} />
            </button>
            <Logo />
        </div>
    );
}
