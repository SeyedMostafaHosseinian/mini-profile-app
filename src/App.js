import React from 'react';
// import Navbar from './components/Navbar';
import { Switch , Route } from 'react-router-dom';

//contexts 
import ProfileContextProvider from './components/contexts/ProfileContextProvider';

//components
import Home from './components/Home';
import Projects from './components/Projects';
import Resumeh from './components/Resumeh';
import Call from './components/Call';

const App = () => {
    return (
        <ProfileContextProvider>
          <Switch>
            <Route path="/resumeh" component={Resumeh}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/call" component={Call}/>
            <Route path="/" component={Home} /> 
          </Switch>
        </ProfileContextProvider>

    );
};

export default App;