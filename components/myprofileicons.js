import styles from './myprofileicons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MyProfileIcons() {
  return (
    <div className={styles.container}>
      <div className={styles.child}>
        <a href="https://github.com/paoramati" target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={['fab', 'github']} />
        </a>
      </div>
      <div className={styles.child}>
        <a href="https://twitter.com/Brand_On_Jitsu" target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={['fab', 'twitter']} />
        </a>
      </div>
    </div>
  );
}