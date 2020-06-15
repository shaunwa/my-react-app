import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import { NavBar } from './NavBar';
import {
  ControlledFormPage,
  HomePage,
  CounterButtonPage,
  NotFoundPage,
  PeopleListPage,
  ProtectedPage,
  UncontrolledFormPage,
  UserProfilePage,
} from './pages';
import { UserDataLoader } from './UserDataLoader';
import { CounterButtonPageCB } from './class-based/CounterButtonPageCB';
import './App.css';

const appLinks = [
  { url: '/', label: 'Home' },
  { url: '/counter', label: 'Counter' },
  { url: '/people-list', label: 'People List' },
  { url: '/forms', label: 'Forms' },
  { url: '/user', label: 'User Profile' },
];

const formLinks = [
  { url: '/forms/controlled', label: 'Controlled' },
  { url: '/forms/uncontrolled', label: 'Uncontrolled' },
];

function App() {
  return (
    <ThemeContext.Provider value="light">
      <div className="App">
        <Router>
          <NavBar links={appLinks} />
          <div className="App-header">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/counter">
                <CounterButtonPage />
              </Route>
              <Route path="/people-list">
                <PeopleListPage />
              </Route>
              <Route path="/protected">
                <ProtectedPage />
              </Route>
              <Route path="/forms">
                <Router>
                  <NavBar links={formLinks} />
                  <Route path="/forms/controlled">
                    <ControlledFormPage />
                  </Route>
                  <Route path="/forms/uncontrolled">
                    <UncontrolledFormPage />
                  </Route>
                </Router>
              </Route>
              <Route path="/user">
                <UserProfilePage />
              </Route>
              <Route path="/class-based">
                <CounterButtonPageCB />
              </Route>
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
