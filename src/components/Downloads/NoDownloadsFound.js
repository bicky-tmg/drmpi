import classes from './NoDownloadsFound.module.css';

const NoDownloadsFound = () => {
  return (
    <div className={`${classes.NoDownloads} mb-4`}>
      <p>No Downloads available right now!</p>
    </div>
  );
};

export default NoDownloadsFound;
