import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/'  exact component={BurgerBuilder}/>
      </Switch>
    </Layout>
  );
}

export default App;
