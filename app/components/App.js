import React from 'react';
import FindBand from './FindBand';
import ReactRouter, {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BandPage from './BandPage';
import Album from './Album';
import Genre from './Genre';
import Authorize from './Authorize';

class App extends React.Component {
  render() {
    return (
      <Router>

        <div>
          <Switch>
            <Route exact path='/' component={FindBand} />
            <Route  path='/band' component={BandPage} />
            <Route path='/album' component={Album} />
            <Route path='/genre' component={Genre} />
            <Route path='/authorize' component={Authorize} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
