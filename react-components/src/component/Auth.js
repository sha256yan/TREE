import React, { useContext } from "react";
import { CryptoAuthContext } from "../App";
import Button from "./Button" 


function CryptoLogIn(props) {
    const CryptoAuth = useContext(CryptoAuthContext);
    return (
        <Button text="Log In" onClick={() => CryptoAuth.authenticate()}></Button>
    );
}


function EmailLogIn(props) {

    return (
        <div class="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required></input>.

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>

          

            <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Sign Up</button>
            </div>
        </div>
    )
}

export default CryptoLogIn;
export {EmailLogIn}