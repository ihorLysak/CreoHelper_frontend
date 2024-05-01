import styles from './mobileSidebar.module.css';
import { Logo } from '../logo/Logo';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch } from '../../app/hooks';
import { toggleOpen } from '../../features/sidebar/sidebarSlice';

export function MobileSidebar() {
    const dispatch = useAppDispatch();

    function handleClick() {
        dispatch(toggleOpen());
    }
    return (
        <div className={styles.mobileSidebar}>
            <div className={styles.sidebarHeader}>
                <FontAwesomeIcon
                    size="2xl"
                    icon={faXmark}
                    className={styles.closeSidebarBtn}
                    onClick={handleClick}
                />
                <Logo />
            </div>
        </div>
    );
}
