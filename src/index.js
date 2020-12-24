import React, { Suspense, lazy } from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Loading from './components/Elements/Loading';
import { createBrowserHistory } from "history";
import * as serviceWorker from './serviceWorker';
const AuthLayout = lazy(() => import('./layouts/Auth'));
const MainLayout = lazy(() => import('./layouts/Main'));
const AgreementsLayout = lazy(() => import('./layouts/Agreements'));
const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist} >
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route path="/auth" component={AuthLayout} />
          <Route path="/agreements" component={AgreementsLayout} />
          <Route path="/" component={MainLayout} />
          <Redirect from="/" to="/auth/main" />
        </Switch>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
