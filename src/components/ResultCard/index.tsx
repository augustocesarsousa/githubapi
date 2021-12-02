import './styles.css';

type Props = {
  avatarUrl: string;
  htmlUrl: string;
  followers: number;
  location: string;
  name: string;
};

const ResultCard = ({
  avatarUrl,
  htmlUrl,
  followers,
  location,
  name,
}: Props) => {
  return (
    <div className="result-container bg-primary">
      <div className="avatar-container">
        <img
          src={avatarUrl}
          alt="Imagem do perfil"
          className="avatar-img"
        />
      </div>
      <div className="info-container">
        <h3>Informações</h3>
        <div className="text-container">
          <p className="text-description">Perfil:</p>
          <p className="text-value">{htmlUrl}</p>
        </div>
        <div className="text-container">
          <p className="text-description">Seguidores:</p>
          <p className="text-value">{followers}</p>
        </div>
        <div className="text-container">
          <p className="text-description">Localidade:</p>
          <p className="text-value">{location}</p>
        </div>
        <div className="text-container">
          <p className="text-description">Nome:</p>
          <p className="text-value">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
