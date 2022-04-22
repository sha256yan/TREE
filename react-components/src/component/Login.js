import React from "react";
import Popup from "./Popup";
import "./Login.css";
function Login() {
  const [isOpen, setIsOpen] = React.useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <input
        type="button"
        value="Login"
        onClick={togglePopup}
        className="login-button"
      />
      {isOpen && (
        <Popup
          content={
            <>
              <h1 className="login-title">Login</h1>
              <form className="login-form">
                <label className="login-label">
                  <input
                    type="text"
                    name="name"
                    placeholder="Username"
                    className="login-input"
                  />
                </label>
                <label className="login-label">
                  <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    className="login-input"
                  />
                </label>
                <div className="login-buttons">
                  <label className="login-label">
                    <input
                      type="submit"
                      value="Submit"
                      className="login-button"
                    ></input>
                  </label>
                  <label className="login-label">
                    <input
                      type="button"
                      value="Forgot?"
                      className="login-button"
                    ></input>
                  </label>
                </div>
              </form>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </>
  );
}

export default Login;
