import styles from './authPage.module.scss';
import { Logo } from '../logo/Logo';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function AuthPage() {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.authForm}>
                <Logo />
                <div className={styles.btnHolder}>
                    <button className={styles.button}>
                        Login <FontAwesomeIcon size="xl" icon={faTelegram} />
                    </button>
                    <button className={styles.button}>
                        Register <FontAwesomeIcon size="xl" icon={faTelegram} />
                    </button>
                </div>
            </div>
        </div>
    );
}
