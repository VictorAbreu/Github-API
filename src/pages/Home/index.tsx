import './styles.css';
import { NavLink } from 'react-router-dom';
import ButtonStart from 'components/ButtonStart';

const Home = () => {
  return (
    <>
      <div className="home-card-principal">
        <div className="home-content-container">
          <h1>Desafio Github API</h1>
          <p>Bootcamp Spring React - DevSuperior</p>
          <div>
            <NavLink to="/pesquisa">
              <ButtonStart />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
