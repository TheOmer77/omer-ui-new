import styles from './index.module.css';

const NotFound = () => (
  <div className={styles['error-container']}>
    <span className={styles.code}>404</span>
    <span className={styles.msg}>
      I have no idea what it is that you were looking for - but it&apos;s
      definitely not here.
    </span>
  </div>
);

export default NotFound;
