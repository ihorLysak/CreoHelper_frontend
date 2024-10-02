import { Logo } from '../logo/Logo';
import styles from './mobileHeader.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch } from '~/app/hooks';
import { toggleOpen } from '~/features/sidebar/sidebarSlice';

export function MobileHeader() {
    const dispatch = useAppDispatch();
    function handleClick() {
        dispatch(toggleOpen());
    }
    return (
        <div className={styles.mobileHeader}>
            <button className={styles.sidebarBtn} onClick={handleClick}>
                <FontAwesomeIcon size="2xl" icon={faBars} />
            </button>
            <Logo />
        </div>
    );
}
