import {React, Components }from 'react';
import {BrowserRouter,Switch, Router} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

class App extends Components {
  render(){
    return (
      <BrowserRouter>
           <div className="container">
            <Switch>
              <Router exact path='/signin' component={SignIn}></Router>
              <Router exact path='/signup' component={SignUP}></Router>
          
            </Switch>
          </div>
          </BrowserRouter>
 

    );
}
}
export default App;
