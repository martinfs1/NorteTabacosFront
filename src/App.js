import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Admin from './pages/Admin';
import CigarrillosPage from './pages/CigarrillosPage';
import FuegosAPage from './pages/FuegosAPage';

function App() {

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact={true} path="/fuegos-artificiales" component={FuegosAPage} />
        <Route exact={true} path="/admin" component={Admin} />
        <Route exact={true} path="/" component={CigarrillosPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
