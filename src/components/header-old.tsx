import { useEffect, useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import styles from "@/styles/Home.module.css";
import Caret from './icons/caret';
export default function Header() {
  const [ethPrice, setEthPrice] = useState("");

  useEffect(() => {
    const getEthPrice = async () => {
      // const response = await axios.get("http://localhost:5001/getethprice", {});
      // setEthPrice(response.data.usdPrice);
    };
    getEthPrice();
  });

  return (
    <section className="header">
      <section className="topHeader">
        ETH Price:{" "}
        <span className="blueText">${Number(ethPrice).toFixed(2)}</span>
      </section>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header logo-area">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
            <img src="/assets/images/logo.png" alt="Etherscan Logo" className="logo" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><a href="#">Home</a></li>
              <li className="active"><a href="#">
                Blockchain
                <Caret />
              </a></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Token
                  <Caret />
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Token 1-1</a></li>
                  <li><a href="#">Token 1-2</a></li>
                  <li><a href="#">Token 1-3</a></li>
                </ul>
              </li>

              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">NFT
                  <Caret />
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">NFT 1-1</a></li>
                  <li><a href="#">NFT 1-2</a></li>
                  <li><a href="#">NFT 1-3</a></li>
                </ul>
              </li>

              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Resources
                  <Caret />
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Resources 1-1</a></li>
                  <li><a href="#">Resources 1-2</a></li>
                  <li><a href="#">Resources 1-3</a></li>
                </ul>
              </li>

              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Developers
                  <Caret />
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Resources 1-1</a></li>
                  <li><a href="#">Resources 1-2</a></li>
                  <li><a href="#">Resources 1-3</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">More
                  <Caret />
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Resources 1-1</a></li>
                  <li><a href="#">Resources 1-2</a></li>
                  <li><a href="#">Resources 1-3</a></li>
                </ul>
              </li>
          <li><a href="#"> | Signin</a></li>
            </ul>

          </div>
        </div>
      </nav>
      {/* <section className="navbar">
        <img src="/assets/images/logo.png" alt="Etherscan Logo" className="logo" />
        <section className="menu">
          <p>Home</p>
          <p>
            Blockchain
            <span className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
          <p>
            Token
            <span className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
          <p>
            NFTs
            <span className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
          <p>
            Resources
            <span className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
          <p>
            Developers
            <span className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
          <p>
            More
            <span className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
          <p>|</p>
          <p className="signIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="profile"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Sign In
          </p>
        </section>
      </section> */}
    </section>
  );
}
