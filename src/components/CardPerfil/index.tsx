import './styles.css';
import { ReactComponent as ImgPerfil } from 'assets/img/teste.svg';

const CardPerfil = () => {
  return (
    <>
      <div className="card-container">
        <div className="card-image-container">
          <ImgPerfil />
        </div>

        <div className="card-info-container">
          <div>
            <h2>Informações</h2>
          </div>

          <div className="card-detail-container">
            <h6>Perfil:</h6>
            <p>www.github.com/acnelio</p>
          </div>
          <div className="card-detail-container">
            <h6>Seguidores:</h6>
            <p>555555555</p>
          </div>
          <div className="card-detail-container">
            <h6>Localidade:</h6>
            <p>Uberlândia</p>
          </div>
          <div className="card-detail-container">
            <h6>Nome:</h6>
            <p>Nélio Alves</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPerfil;
