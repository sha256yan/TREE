import React, { useContext } from "react";
import { CryptoAuthContext, EmailAuthContext } from "../App";
import Popup from "./Popup";
import "./Auth.css";



function CryptoLogIn() {
    const CryptoAuth = useContext(CryptoAuthContext);

    const handleSubmit = (event) => {
      event.preventDefault();
      CryptoAuth.authenticate()
    };

    const popupStatus = CryptoAuth.popupStatus;
    let title = popupStatus.length > 0 ? popupStatus : "MetaMask";

    const [isOpen, setIsOpen] = React.useState(false);
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        <Input type="button" value="Sync Meta" onClick={togglePopup} inputClass="signup-button"></Input>
        {isOpen && (
          <Popup
            content={
              <>
                <h1 className="signup-title">{title}</h1>
                <form className="signup-form"
                  onSubmit={handleSubmit}>
                <Input labelClass="signup-label" inputClass="signup-button" type="submit" value="Sync"></Input>
                </form>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </>
    );
}







function Input(props) {
    return (
        <label className={props.labelClass}>
            <input
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder={props.holder}
            className={props.inputClass}
            onChange={props.onChange}
            onClick={props.onClick}
            />
      </label>
    );
}



//AuthContextSetters: array of setter functions
//submitFunc: function to be executed when form is submitted. (cannot take params)
function getEmailFormHandlers(EmailAuth, submitFunc) {
  const {setEmail, setPassword, setUsername, popupStatus} = EmailAuth;
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleSubmit = (event) => {
      event.preventDefault();
      submitFunc()
  };

  return {handleEmailChange, handlePasswordChange, handleUsernameChange, handleSubmit, popupStatus};
}






function SignIn() {
    const EmailAuth = React.useContext(EmailAuthContext);

    //Tracks whether pop up is covering page or not
    const [isOpen, setIsOpen] = React.useState(false);
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };

    const submitFunc = EmailAuth.loginUsingUsername;
    const {handlePasswordChange, handleUsernameChange, handleSubmit, popupStatus} = getEmailFormHandlers(EmailAuth, submitFunc);

    let title = popupStatus.length > 0 ? popupStatus : "Sign In";
  
  
    return (
      <>
      <Input type="button" value="Sign In" onClick={togglePopup} inputClass="signup-button"></Input>
        {isOpen && (
          <Popup
            content={
              <>
                <h1 className="signup-title">{title}</h1>
                <form className="signup-form"
                  onSubmit={handleSubmit}>
                <Input labelClass="signup-label" inputClass="signup-input" type="text" name="username" holder="Username" onChange={handleUsernameChange}></Input>
                <Input labelClass="signup-label" inputClass="signup-input" type="text" name="password" holder="Password" onChange={handlePasswordChange}></Input>
                <Input labelClass="signup-label" inputClass="signup-button" type="submit" name="email" holder="Submit"></Input>
                </form>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </>
    );
  }


  






function SignUp() {
  const EmailAuth = React.useContext(EmailAuthContext);

  //Tracks whether pop up is covering page or not
  const [isOpen, setIsOpen] = React.useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const submitFunc = EmailAuth.signupFunc;
  const {handleEmailChange, handlePasswordChange, handleUsernameChange, handleSubmit, popupStatus} = getEmailFormHandlers(EmailAuth, submitFunc);

  let title = popupStatus.length > 0 ? popupStatus : "Sign Up";


  return (
    <>
      <Input type="button" value="Sign Up" onClick={togglePopup} inputClass="signup-button"></Input>
      {isOpen && (
        <Popup
          content={
            <>
              <h1 className="signup-title">{title}</h1>
              <form className="signup-form"
                onSubmit={handleSubmit}>
              <Input labelClass="signup-label" inputClass="signup-input" type="text" name="email" holder="Email" onChange={handleEmailChange}></Input>
              <Input labelClass="signup-label" inputClass="signup-input" type="text" name="username" holder="Username" onChange={handleUsernameChange}></Input>
              <Input labelClass="signup-label" inputClass="signup-input" type="text" name="password" holder="Password" onChange={handlePasswordChange}></Input>
              <Input labelClass="signup-label" inputClass="signup-button" type="submit" name="email" holder="Submit"></Input>
              </form>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </>
  );
}


export {SignIn, Input, CryptoLogIn, SignUp};
