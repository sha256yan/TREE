
   
import React from "react";
import Popup from "./Popup";
import "./Signup.css";




function Signup() {
  const [isOpen, setIsOpen] = React.useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <input
        type="button"
        value="Sign Up"
        onClick={togglePopup}
        className="signup-button"
      />
      {isOpen && (
        <Popup
          content={
            <>
              <h1 className="signup-title">Signup</h1>
              <form className="signup-form">
                <label className="signup-label">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="signup-input"
                  />
                </label>
                <label className="signup-label">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="signup-input"
                  />
                </label>
                <label className="signup-label">
                  <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    className="signup-input"
                  />
                </label>
                <label className="signup-label">
                  <input
                    type="text"
                    name="confirm password"
                    placeholder="Confirm password"
                    className="signup-input"
                  />
                </label>
                <label className="signup-label">
                  <input
                    type="submit"
                    value="Submit"
                    className="signup-button"
                  ></input>
                </label>
              </form>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </>
  );
}

export default Signup;