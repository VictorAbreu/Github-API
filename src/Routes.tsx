import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Pesquisa from 'pages/Pesquisa';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/Pesquisa">
        <Pesquisa />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
