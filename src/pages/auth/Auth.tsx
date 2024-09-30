import styles from './auth.module.scss';
import { Logo } from '../../libs/components/components';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Auth() {
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
