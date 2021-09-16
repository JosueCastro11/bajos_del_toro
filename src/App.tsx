import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";
import BajosDelToro from './components/BajosDelToro';
import InfoPage from './components/InfoPage';
import ContactPage from './components/ContactPage';
import ToursPage from './components/ToursPage';
import LodgePage from './components/LodgePage';
import RestaurantPage from './components/RestaurantPage';

import "./assets/scss/material-kit-react.scss?v=1.10.0";
import styled from 'styled-components';

// pages for this product

var hist = createBrowserHistory();

const AppContainer = styled.div`
  height: 0;
`;

function App() {
  return (
    <AppContainer>
      <Router history={hist}>
        <Switch>
          {/* <Route path="/bajosDelToro" component={BajosDelToro} /> */}
          <Route path="/info" component={InfoPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/tours" component={ToursPage} />
          <Route path="/lodge" component={LodgePage} />
          <Route path="/restaurant" component={RestaurantPage} />
          <Route path="/" component={BajosDelToro} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
