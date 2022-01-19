
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import CharacterListPage from './pages/character-list/index'
import CharacterDetailPage from './pages/character-detail';
import HomePage from './pages/home/home';
import Header from './components/header/header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/Characterlist'>
            <Header></Header>
            <CharacterListPage />
          </Route>
          <Route path='/Character/:id'>
            <Header></Header>
            <CharacterDetailPage></CharacterDetailPage>
          </Route>
          <Route path='/'>
            <HomePage></HomePage>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
