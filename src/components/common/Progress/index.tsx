import styles from './Progress.module.scss';

export const CommonProgress = ({ progress }: Progress) => {
  return (
    <div className={styles.progessMain}>
      <span>{progress} %</span>
      <progress className="progress progress-primary w-56" max="100" value={progress}></progress>
    </div>
  );
};
