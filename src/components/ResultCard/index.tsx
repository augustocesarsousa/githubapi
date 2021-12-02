import './styles.css';

type Props = {
  avatar_url: string;
  html_url: string;
  followers: number;
  location: string;
  name: string;
};

const ResultCard = () => {
  return (
    <div className="result-container bg-primary">
      <div className="avatar-container">
        <img src="https://avatars.githubusercontent.com/u/79109414?v=4" alt="Imagem do perfil" className="avatar-img" />
      </div>
      <div className="info-container">
          <h3>Informações</h3>
          <div className="text-container">
              <p className="text-description">Perfil:</p>
              <p className="text-value">https://github.com/augustocesarsousa</p>
          </div>
          <div className="text-container">
              <p className="text-description">Seguidores:</p>
              <p className="text-value">1</p>
          </div>
          <div className="text-container">
              <p className="text-description">Localidade:</p>
              <p className="text-value">Francisco Morato, São Paulo - BR</p>
          </div>
          <div className="text-container">
              <p className="text-description">Nome:</p>
              <p className="text-value">Augusto Cesar</p>
          </div>
      </div>
    </div>
  );
};

export default ResultCard;
