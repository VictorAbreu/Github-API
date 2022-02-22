import CardPerfil from 'components/CardPerfil';
import './styles.css';
import { NavLink } from 'react-router-dom';
import ButtonSearch from 'components/ButtonSearch';

const Pesquisa = () => {
  return (
    <>
      <div className="search-container">
        <div className="search-card-principal">
          <h1>Encontre um perfil do Github</h1>
          <input type="text" placeholder="Usuário Github" />
          <div>
            <NavLink to="/">
              <ButtonSearch />
            </NavLink>
          </div>
        </div>
      </div>
      <CardPerfil />
    </>
  );
};

export default Pesquisa;
