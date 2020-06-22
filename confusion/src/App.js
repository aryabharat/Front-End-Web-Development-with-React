import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Main from './components/MainComponenet'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configStore';
import './App.css';
const store = ConfigureStore();


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div >
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
