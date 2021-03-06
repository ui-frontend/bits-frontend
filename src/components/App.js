import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'whatwg-fetch';

// CSS
import '../styles/other/bootstrap.css';
import '../styles/other/custom.css';

// Components
import BitContainer from './BitContainer';
import BitEditor from './BitEditor';
import BitSearch from './BitSearch';
import GenericNotFound from './GenericNotFound';
import AppHeader from './AppHeader';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <div id='content' className='mt-1'>
          <div className='container'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={BitSearch}/>
      <Route path='bits' component={BitContainer}>
        <IndexRoute component={BitSearch}/>
        <Route path='new' component={() => (<BitEditor newBit={true} />)} />
        <Route path=':bitID' component={BitSearch} />
        <Route path=':bitID/full' component={BitEditor} />
      </Route>
      <Route path='*' component={GenericNotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);