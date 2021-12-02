import ContentLoader from 'react-content-loader';
import './styles.css';

const ProfileLoader = () => (
  <div className="loader-container">
    <ContentLoader
      viewBox="0 0 100 100"
      height={100}
      width={100}
      backgroundColor="transparent"
    >
      <circle cx="10" cy="86" r="8" />
      <circle cx="50" cy="86" r="8" />
      <circle cx="90" cy="86" r="8" />
    </ContentLoader>
  </div>
);

ProfileLoader.metadata = {
  name: 'RioF',
  github: 'clariokids',
  description: 'Three Dots',
  filename: 'ThreeDots',
};

export default ProfileLoader;
