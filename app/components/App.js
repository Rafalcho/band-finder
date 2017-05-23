import React from 'react';
import FindBand from './FindBand';
import ReactRouter, {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BandPage from './BandPage';
import Album from './Album';

class App extends React.Component {
  render() {
    return (
      <Router>

        <div>
          <Switch>
            <Route exact path='/' component={FindBand} />
            <Route  path='/band' component={BandPage} />
            <Route path='/album' component={Album} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
