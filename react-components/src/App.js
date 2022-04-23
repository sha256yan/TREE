import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMoralis } from "react-moralis";

import Navbar from "./component/Navbar";
import Pages from "./component/Pages";
import pageContent from "./PageContent";


const WAIT_MSG = "Please wait...";
const SUCC_SIGNUP_MSG = "Succesfully Signed up!";
const SUCC_EMAIL_SIGNIN_MSG = "Sucessfully signed in!";
const SUCC_CRYPT_SIGNIN_MSG = "Successfully connnected wallet!";
const FAIL_LOGIN_MSG = "Invalid Credentials."



const CryptoAuthContext = React.createContext();
const EmailAuthContext = React.createContext();



export { CryptoAuthContext, EmailAuthContext };

function App(props) {
  const { login, isAuthenticated, authenticate, Moralis, user } = useMoralis();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //These will be used to store the state of popups.
  //Will use popups for authentications, proposal 
  //creation, warnings, etc...
  const [popupStatus, setPopupStatus] = useState("");
  const POPUP_RESET_DELAY_MS = 3000;

  const resetPopup = (resetDelay) => {
    setTimeout(() => setPopupStatus(""), resetDelay);
  };

  const setPopupWrapper = (PopupStatus, timeToReset) => {
    setPopupStatus(PopupStatus);
    resetPopup(timeToReset);
  }


  const signupFunc = async () => {
    setPopupStatus(WAIT_MSG, POPUP_RESET_DELAY_MS);

    const user = new Moralis.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);

    try {
      await user.signUp();
      setPopupWrapper(SUCC_SIGNUP_MSG, POPUP_RESET_DELAY_MS)
    } catch (error) {
      setPopupWrapper(error.message, POPUP_RESET_DELAY_MS);
    }
  };

  //Login Only using MetaMask
  const loginUsingMetamask = () => {
    authenticate();
  };

  const loginUsingUsername = async () => {
    const result = await login(username, password);

    if (result === undefined) {
      setPopupWrapper(FAIL_LOGIN_MSG, POPUP_RESET_DELAY_MS)
    } else {
      setPopupWrapper(SUCC_EMAIL_SIGNIN_MSG, POPUP_RESET_DELAY_MS);
    }
  };

  const resetPassword = () => {
    //getting email from email input
    setPopupStatus("Please wait...");
    if (email) {
      Moralis.User.requestPasswordReset(email)
        .then(() => {
          setPopupStatus("Success. Check your email!");
          resetPopup();
        })
        .catch((error) => {
          setPopupStatus(`Password reset failed: ${error.message}`);
          resetPopup();
        });
    } else {
      setPopupStatus(`Enter your email...`);
      resetPopup();
    }
  };

  return (
    <Router>
      <CryptoAuthContext.Provider
        value={{ authenticate, isAuthenticated, user, popupStatus }}
      >
        <EmailAuthContext.Provider
          value={{
            setEmail,
            setUsername,
            setPassword,
            signupFunc,
            loginUsingUsername,
            popupStatus,
            setPopupStatus,
          }}
        >
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Pages columns={pageContent.home} />}></Route>
            <Route exact path="/governance" element={<Pages columns={pageContent.governance} />}></Route>
            <Route exact path="/transaction" element={<Pages columns={pageContent.transaction}/>}></Route>
            <Route exact path="/about" element={<Pages columns={pageContent.about}/>}></Route>
            <Route exact path="/profile" element={<Pages columns={pageContent.profile} />}></Route>
          </Routes>
        </EmailAuthContext.Provider>
      </CryptoAuthContext.Provider>
    </Router>
  );
}

export default App;
