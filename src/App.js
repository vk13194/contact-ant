import React, { Component } from 'react'
import {Provider} from './context'
import Contacts from './components/Contacts'
import 'antd/dist/antd.css'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/AddContact'
import Navbar from './components/Navbar'
import EditContact from './components/EditContact'
export class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
         <div>
           <Navbar />
        <div className="container">
          <Switch>
         <Route exact path="/" component={Contacts} />
         <Route exact path="/add" component={AddContact} />
         <Route exact path="/edit/:id" component={EditContact} />
          </Switch>
        </div>
        </div>
        </Router>
      </Provider>
      
    )
  }
}

export default App
