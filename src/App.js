import React, {lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar/navbar';

import './App.css';

const Counter = lazy(() => import ('./components/pages/counter/index'));
const Calculator = lazy(() => import ('./components/pages/calculator/index'));
const TodoList = lazy(() => import ('./components/pages/todo-list/index'));
const RandomQuotes = lazy(() => import ('./components/pages/random-quotes/index'));

function App() {
  return (
      <Router>
          <Suspense fallback={<h2>Loading...</h2>}>
             <Navbar/>
               <div className='h-screen bg-green-200 pt-16'>
                <Switch>
                      <Route exact path="/">
                        <Counter/>
                      </Route>
                      <Route path="/random-quotes">
                        <RandomQuotes/>
                      </Route>
                      <Route path="/todo-list">
                        <TodoList/>
                      </Route>
                      <Route path="/calculator">
                        <Calculator/>
                      </Route>
                  </Switch>
               </div>
          </Suspense>
      </Router>
  );
}

export default App;
