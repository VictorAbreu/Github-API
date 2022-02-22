import './styles.css';

type Props = {
  urlImagem: string;
  perfil: string;
  seguidores: string;
  localidade: string;
  nome: string;
}

const CardPerfil = ({ perfil, seguidores, localidade, nome, urlImagem} : Props) => {
  return (
    <>
      <div className="card-container">
        <div className="card-image-container">
          <img src={urlImagem} alt="urlImagem" />
        </div>

        <div className="card-info-container">
          <div>
            <h2>Informações</h2>
          </div>

          <div className="card-detail-container">
            <h6>Perfil:</h6>
            <p>{perfil}</p>
          </div>
          <div className="card-detail-container">
            <h6>Seguidores:</h6>
            <p>{seguidores}</p>
          </div>
          <div className="card-detail-container">
            <h6>Localidade:</h6>
            <p>{localidade}</p>
          </div>
          <div className="card-detail-container">
            <h6>Nome:</h6>
            <p>{nome}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPerfil;
