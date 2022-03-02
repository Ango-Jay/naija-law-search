import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import LandingPage from "./pages/landing/landingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/search/search";
import SectionContainer from "./pages/sections/sectionContainer";
import SearchContextProvider from "./contexts/searchContext";


const App: React.FC= () =>{
  return (
    <Router>
      <Switch>
      <SearchContextProvider>
        <Route exact path="/" component={LandingPage} />
        <Route path="/search" component={Search} />
        <Route path="/sections" component={SectionContainer} />
        </SearchContextProvider>
      </Switch>
    </Router>
  );
}
export default App;