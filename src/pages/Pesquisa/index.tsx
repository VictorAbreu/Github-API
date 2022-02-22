import axios from 'axios';
import CardPerfil from 'components/CardPerfil';
import { useState } from 'react';
import './styles.css';

type FormData = {
  usuario: string;
};

type PerfilCompleto = {
  avatar_url: string;
  html_url: string;
  followers: string;
  location: string;
  name: string;
};

const Pesquisa = () => {
  const [perfilCompleto, setPerfilCompleto] = useState<PerfilCompleto>();

  const [formData, setFormData] = useState<FormData>({
    usuario: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.usuario}`)
      .then((response) => {
        setPerfilCompleto(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setPerfilCompleto(undefined);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <div className="search-card-principal">
            <h1>Encontre um perfil do Github</h1>
            <input
              type="text"
              name="usuario"
              value={formData.usuario}
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </div>

        {perfilCompleto && (
          <CardPerfil
            urlImagem={perfilCompleto.avatar_url}
            perfil={perfilCompleto.html_url}
            seguidores={perfilCompleto.followers}
            localidade={perfilCompleto.location}
            nome={perfilCompleto.name}
          />
        )}
      </form>
    </>
  );
};

export default Pesquisa;
