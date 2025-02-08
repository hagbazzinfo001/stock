import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Toggle from "./assets/toggle.png"
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import Logo from "./assets/logo.png"
import Profile from "./assets/profile.png"
import Dash from "./assets/dash.png"
import Broker from "./assets/broker.png"
import Analytics from "./assets/analytics.png"
import team from "./assets/team.png"
// import dropDown from "./assets/dropdown.png"
import {faChevronDown} from "@fortawesome/free-solid-svg-icons"
// import options from "./assets/options.png"
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons"
import tesla from "./assets/icons1.png"
// import apple from "./assets/ICONS2.png"
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import tempus from "./assets/icons3.png"
import amazon from "./assets/icons4.png"
import './App.css'

function App() {
  const [isWatchListVisible, setIsWatchListVisible] = useState(true);

 
  const toggleWatchList = () => {
    setIsWatchListVisible(!isWatchListVisible);
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
 const toggleTheme = () => {
  setIsDarkMode(!isDarkMode);
};

useEffect(() => {
  console.log("Updating theme", isDarkMode ? "Dark" : "Light");
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
}, [isDarkMode]);

 



  return (
    <>
      <div id='sideBar'>
       {/* <img
          id="toggle"
          src={Toggle}
          alt="togglebar"
          onClick={toggleTheme}
        /> */}
        <FontAwesomeIcon icon={isDarkMode ? faToggleOff : faToggleOn} aria-hidden="true" id="toggle" onClick={toggleTheme} />
      
      <section>
        <img id="logo" src={Logo} alt="logo" />
        <h1>Stock Tracker</h1>
        <img id="profile" src={Profile} alt="profilePicture" />
      </section>
      <form action="https://www.coingecko.com/en/coins/" name="data-action">
      <input id="searchBar" type="text"  placeholder="search"/>
      </form>
      <div id="content">
        <div className="sideBarContent">
          <img src={Dash} alt="" id="icons" />
          <h3>Dashboard</h3>
        </div>
        <div className="sideBarContent">
          <img src={Broker} alt="" id="icons" />
          <h3>Brokerage Account</h3>
        </div>
        <div className="sideBarContent">
          <img src={Analytics} alt="" id="icons" />
          <h3>Analytics Integration</h3>
        </div>
        <div className="sideBarContent">
          <img src={team} alt="" id="icons" />
          <h3>The Team</h3>
        </div>
        

      </div>

      <div className="watchListContent">
        <div id="watchListHeader"  onClick={toggleWatchList} >
          {/* <img id="dropDownImg" src={dropDown} alt="" style={{ transform: isWatchListVisible ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.3s ease' }} /> */}
          <FontAwesomeIcon icon={faChevronDown} id="dropDownImg" style={{ transform: isWatchListVisible ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.3s ease' }} />
          <h3>My Watch List</h3>
          {/* <img src={options} alt="" /> */}
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
{isWatchListVisible && (
            <div>
              <div className="sideBarContent">
                <img src={tesla} alt="" />
                <h3>Tesla</h3>
                <span>
                  411.70 <sub className="green">411.70</sub>
                </span>
              </div>
              <div className="sideBarContent">
                {/* <img src={apple} alt="" /> */}
                <FontAwesomeIcon icon={faAppleAlt} />
                <h3>Apple</h3>
                <span>
                  411.70 <sub className="green">411.70</sub>
                </span>
              </div>
              <div className="sideBarContent">
                <img src={tempus} alt="" />
                <h3>Tempus AI</h3>
                <span>
                  411.70 <sub>411.70</sub>
                </span>
              </div>
              <div className="sideBarContent">
                <img src={amazon} alt="" />
                <h3>Amazon.com</h3>
                <span>
                  411.70 <sub>411.70</sub>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}


export default App
