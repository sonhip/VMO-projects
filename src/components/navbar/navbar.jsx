import React, { useState } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import Img from "../../img/VMO.PNG";
import { useDispatch, useSelector } from "react-redux";
import fire from "../pages/login/fire";
import * as actions from "../pages/login/actions";

export default function Navbar(props) {
  const { pathname } = useLocation();
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
  props.checkModal(click);
  const isLogin = useSelector((state) => state.loginReducer.login);
  const dispatch = useDispatch();

  const handleLogout = () => {
    fire.auth().signOut();
    dispatch(actions.loginFail(false));
  };
  const handleClickAndLogout = () => {
    setClick(true);
    handleLogout();
  };
  return (
    <>
      {isLogin ? <Redirect to="/Counter" /> : null}
      <div className="flex relative justify-between lg:justify-around flex items-center h-16 w-full z-10 bg-purple-navbar fixed">
        <div className="not-sr-only lg:sr-only">
          {click ? (
            <button onClick={handleClick}>
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          ) : (
            <button onClick={handleClick}>
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          )}
        </div>
        <div>
          <button className="w-32" href="!#">
            <img src={Img} alt="vmo" />
          </button>
        </div>
        <div className="lg:flex lg:justify-around lg:not-sr-only sr-only">
          {["Counter", "Random Quotes", "TodoList", "Calculator"].map(
            (item, key) => {
              return (
                <div key={key} className="flex flex-col">
                  <Link
                    onClick={() => setClick(true)}
                    className={`text-center font-bold text-gray-300 hover:text-white hover:no-underline capitalize mx-8 my-2 `}
                    to={`/${item}`}
                  >
                    {" "}
                    <span
                      className={`${
                        pathname === `/${item}`
                          ? "border-b-4 transition delay-100 duration-700 ease-in-out border-orange-primary"
                          : ""
                      }`}
                    >
                      {item}
                    </span>{" "}
                  </Link>
                </div>
              );
            }
          )}
          {isLogin ? (
            <Link
              className="hover:text-white hover:no-underline transform transition duration-500 hover:scale-110 bg-orange-primary px-4 py-2 uppercase rounded"
              onClick={handleLogout}
            >
              <span className="font-medium text-md text-black-base">
                Logout
              </span>
            </Link>
          ) : (
            <Link
              className=" hover:text-white hover:no-underline transform transition duration-500 hover:scale-110 bg-orange-primary px-4 py-2 uppercase rounded"
              to="/Login"
            >
              <span className="font-medium text-md text-black-base ">
                Login
              </span>
            </Link>
          )}
        </div>
        <div className="absolute top-full w-full bg-purple-navbar bg-purple-sub">
          {["Counter", "Random Quotes", "TodoList", "Calculator"].map(
            (item, key) => {
              return (
                <div
                  key={key}
                  className={
                    click ? `sr-only` : `flex flex-col hover:bg-purple-600`
                  }
                >
                  <Link
                    onClick={() => setClick(true)}
                    className={`lg:sr-only text-center font-bold hover:text-white hover:no-underline text-gray-200 capitalize mx-8 my-2 `}
                    to={`/${item}`}
                  >
                    {" "}
                    <span
                      className={`${
                        pathname === `/${item}`
                          ? "border-b-4 transition delay-100 duration-700 ease-in-out border-orange-primary"
                          : ""
                      }`}
                    >
                      {item}
                    </span>
                  </Link>
                </div>
              );
            }
          )}
          <div
            className={click ? `sr-only` : `flex flex-col hover:bg-purple-600`}
          >
            {isLogin ? (
              <Link
                className={`lg:sr-only text-center font-bold hover:text-white hover:no-underline text-gray-200 capitalize mx-8 my-2 `}
                onClick={handleClickAndLogout}
              >
                <span>Logout</span>
              </Link>
            ) : (
              <Link
                onClick={() => setClick(true)}
                className={`lg:sr-only text-center font-bold hover:text-white hover:no-underline text-gray-200 capitalize mx-8 my-2 `}
                to="/Login"
              >
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
