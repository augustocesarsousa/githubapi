import './styles.css';

import ResultCard from '../../components/ResultCard';
import ProfileLoader from './ProfileLoader';

import { useState } from 'react';
import axios from 'axios';

type FormData = {
  profile: string;
};

type Profile = {
  avatar_url: string;
  html_url: string;
  followers: number;
  location: string;
  name: string;
};

const ProfileSearch = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [profile, setProfile] = useState<Profile>();

  const [formData, setFormData] = useState<FormData>({
    profile: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.profile}`)
      .then((response) => {
        setProfile(response.data);
        console.log(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setProfile(undefined);
        console.log(error);
      });
  };

  return (
    <div className="container profile-search-container">
      <div className="search-container">
        <h1>Encontre um perfil no Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="profile"
              value={formData.profile}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-secondary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {profile &&
        (isLoading ? (
          <ProfileLoader />
        ) : (
          <ResultCard
            avatarUrl={profile.avatar_url}
            htmlUrl={profile.html_url}
            followers={profile.followers}
            location={profile.location}
            name={profile.name}
          />
        ))}
    </div>
  );
};

export default ProfileSearch;
