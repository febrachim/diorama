import React, { Component } from 'react';
import logo from './logo.svg';
import DrawerMenu from './Drawer';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import BackgroundVideo from './BackgroundVideo';

import {grey900, indigo700, redA200} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: grey900,
        primary2Color: indigo700,
        accent1Color: redA200,
        pickerHeaderColor: grey900,
    },
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={muiTheme}>
          <DrawerMenu />
        </MuiThemeProvider>

        <BackgroundVideo />
        
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
