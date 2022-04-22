import React, { useContext } from "react";
import { CryptoAuthContext } from "../App";
import Button from "./Button" 


function CryptoLogIn(props) {
    const CryptoAuth = useContext(CryptoAuthContext);
    return (
        <Button text="Log In" onClick={() => CryptoAuth.authenticate()}></Button>
    );
}


export default CryptoLogIn;