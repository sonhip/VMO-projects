import React, { lazy, Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import "./App.css";

const Counter = lazy(() => import("./components/pages/counter/index"));
const Calculator = lazy(() => import("./components/pages/calculator/index"));
const TodoList = lazy(() => import("./components/pages/todo-list/index"));
const RandomQuotes = lazy(() =>
  import("./components/pages/random-quotes/index")
);
const Login = lazy(() => import("./components/pages/login/login-form"));

function App() {
  const [flag, setFlag] = useState(null);

  const handleModal = (click) => {
    setFlag(click);
  };

  return (
    <Router>
      <Suspense
        fallback={
          <div class="min-h-screen flex flex-col justify-center items-center bg-black">
            <h1 className="text-white font-bold text-5xl mb-8">Loading</h1>
            <div class="loader bg-white p-5 rounded-full flex space-x-3">
              <div class="w-5 h-5 bg-gray-800 rounded-full animate-spin origin-bottom "></div>
              <div class="w-5 h-5 bg-gray-800 rounded-full animate-spin origin-right"></div>
              <div class="w-5 h-5 bg-gray-800 rounded-full animate-spin origin-left"></div>
            </div>
          </div>
        }
      >
        <Navbar checkModal={handleModal} />
        <div
          className={
            flag
              ? `bg-purple-body`
              : `bg-purple-body opacity-50 cursor-not-allowed pointer-events-none`
          }
        >
          <Redirect from="/" to="/Login" />
          <Switch>
            <Route exact path="/Counter">
              <Counter />
            </Route>
            <Route path="/Random Quotes">
              <RandomQuotes />
            </Route>
            <Route path="/TodoList">
              <TodoList />
            </Route>
            <Route path="/Calculator">
              <Calculator />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default React.memo(App);
