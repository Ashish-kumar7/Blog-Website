import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails' ;
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Page404 from './Page404';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/create">
                    <Create />
                </Route>
                <Route  path="/blogs/:id">
                    <BlogDetails  />
                </Route>
                <Route  path="*">
                    <Page404  />
                </Route>
            </Switch>
          </div>
      </div>
    </Router> 
  );
}
export default App;
