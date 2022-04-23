import React, { useState } from "react";
import Column from "./component/Column";
import Main from "./component/Main";
import Organisations from "./component/Organisations";
import Newscard from "./component/Newscard";
import { CryptoLogIn } from "./component/Auth";
import SignUp from "./component/Auth";
import { SignIn } from "./component/Auth";








const pageContent = {
    "about": (
        <>
            <Column
            content={
                <Main
                title="ABOUT US"
                content="Established since 2021, we have hosted forest carbon token and governance token sales for thousands of organisations. The aim of Tree organisation is to provide a platform for everyday consumers to help in reducing carbon waste as well."
                theimage="images/forestThree.jpg"
                ></Main>
            }
            >
                
            </Column>
            <Column content={<h1>Hello world!</h1>}></Column>
      </>
    ),
    "transaction": (
        <>
            <Column
            content={
                <Main
                title="TRANSACTION"
                content="Worried about the environment but do not know how to contribute as an indivual? Buy a token today and you can also become a hero to save Nature!"
                theimage="images/forestThree.jpg"
                >
                </Main>
            }>
            </Column>
            <Column
                content={
                    <>
                        <p class="transaction-statement">Check out these cool forest tokens!</p>
                        <Organisations></Organisations>
                    </>
                }>
            <p class="transaction-statement">Check out these cool forest tokens!</p>
            <Organisations></Organisations>
            </Column>
        </>
    ),
    "home": (
        <>
          <Column
            content={
                <>
                    <Main
                        title="TREE"
                        content="A platform created to reduce carbon emission via decentralized autonomous forest preservation. Buy your token today and help save the Earth!"
                    >
                    </Main>
                    <div className="test-buttons">
                        <CryptoLogIn></CryptoLogIn>
                        <SignUp></SignUp>
                        <SignIn></SignIn>
                    </div>
                </>
          }>
          </Column>
          <Column
          content={
            <ul className="newscard-container">
            <Newscard
              event="DeepOwl Woods tokens now available!"
              duration="24th April 2022-31st May 2022"
              className="newscard-items"
            ></Newscard>
            <Newscard
              event="Governance voting starting soon!"
              duration="26th April 2022-28th April 2022"
              className="newscard-items"
            ></Newscard>
          </ul>
          }>
          </Column>
        </>
    )
}


export default pageContent;


