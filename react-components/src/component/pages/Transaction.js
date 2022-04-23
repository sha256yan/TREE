import React from "react";
import Main from "../Main";
import Organisations from "../Organisations";
import "./Transaction.css";


function Transaction() {
  return (
    <section>
      <Main
        title="TRANSACTION"
        content="Worried about the environment but do not know how to contribute as an indivual? Buy a token today and you can also become a hero to save Nature!"
        theimage="images/forestThree.jpg"
      ></Main>
      <p class="transaction-statement">Check out these cool forest tokens!</p>
      <Organisations></Organisations>
    </section>
  );
}

export default Transaction;
