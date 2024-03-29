import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className={styles.notification}>
      <span className={styles.message}>{message}</span>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
